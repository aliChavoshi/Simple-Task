import { Component, OnChanges, SimpleChanges, input, signal } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { IUser } from '../user/users.model';
import { ITask, dummyTasks } from './tasks.model';

@Component({
   selector: 'app-tasks',
   standalone: true,
   templateUrl: './tasks.component.html',
   styleUrl: './tasks.component.css',
   imports: [TaskComponent]
})
export class TasksComponent implements OnChanges {
   user = input.required<IUser>();
   taskOfUser = signal<ITask[]>([]);
   tasks = signal<ITask[]>(dummyTasks);

   ngOnChanges(changes: SimpleChanges): void {
      const tasks = this.tasks().filter((t) => t.userId === this.user().id);
      this.taskOfUser.set(tasks);
   }
}
