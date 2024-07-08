import { Component, OnChanges, SimpleChanges, computed, input, signal } from '@angular/core';
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
export class TasksComponent {
   //all data
   allTasks = signal<ITask[]>(dummyTasks);
   taskOfUser = computed(() => this.allTasks().filter((t) => t.userId === this.user().id));
   //inputs
   user = input.required<IUser>();
   //properties
   isAddedNewTask = signal(false);

   AddNewTask(task: ITask) {
      task.userId = this.user().id;
      task.id = new Date().getTime().toString();
      const tasks = [...this.allTasks(), task];
      this.allTasks.set(tasks);
   }
   deleteTask(taskId: string) {
      var tasks = this.allTasks().filter((x) => x.id != taskId);
      this.allTasks.set(tasks);
   }
}
