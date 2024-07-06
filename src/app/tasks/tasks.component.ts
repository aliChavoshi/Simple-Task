import { Component, OnChanges, SimpleChanges, input, signal } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { IUser } from '../user/users.model';
import { ITask, dummyTasks } from './tasks.model';
import { NewTaskComponent } from "./new-task/new-task.component";

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskComponent, NewTaskComponent]
})
export class TasksComponent implements OnChanges {
   allTasks = signal<ITask[]>(dummyTasks);
   user = input.required<IUser>();
   taskOfUser = signal<ITask[]>([]);
   isAddedNewTask = false;

   ngOnChanges(changes: SimpleChanges): void {
      const tasks = this.allTasks().filter((t) => t.userId === this.user().id);
      this.taskOfUser.set(tasks);
   }
   onStartAddTask() {
      this.isAddedNewTask = true;
   }
}
