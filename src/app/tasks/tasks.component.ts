import { Component, OnChanges, SimpleChanges, input, signal } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { IUser } from '../user/users.model';
import { ITask, dummyTasks } from './tasks.model';
import { NewTaskComponent } from './new-task/new-task.component';

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
   isAddedNewTask = signal(false);

   ngOnChanges(changes: SimpleChanges): void {
      this.getTasksOfUser();
   }

   onStartAddTask() {
      this.isAddedNewTask.set(true);
   }
   deleteTask(taskId: string) {
      var tasks = this.allTasks().filter((x) => x.id != taskId);
      this.allTasks.set(tasks);
      this.getTasksOfUser();
   }
   private getTasksOfUser() {
      const tasks = this.allTasks().filter((t) => t.userId === this.user().id);
      this.taskOfUser.set(tasks);
   }
}
