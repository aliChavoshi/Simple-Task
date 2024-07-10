import { Component, computed, input, signal } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { IUser } from '../user/users.model';
import { ITask, dummyTasks } from './tasks.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { CardComponent } from '../Shared/card/card.component';
import { TaskService } from './task.service';

@Component({
   selector: 'app-tasks',
   standalone: true,
   templateUrl: './tasks.component.html',
   styleUrl: './tasks.component.css',
   imports: [TaskComponent, NewTaskComponent, CardComponent]
})
export class TasksComponent {
   constructor(private taskService: TaskService) {}
   //all data
   allTasks = signal<ITask[]>(this.taskService.getTasks());
   taskOfUser = computed(() => this.taskService.getUserTasks(this.user().id));
   //inputs
   user = input.required<IUser>();
   //properties
   isAddedNewTask = signal(false);

   AddNewTask(task: ITask) {
      this.taskService.addTask(task, this.user().id);
   }
   deleteTask(taskId: string) {
      this.taskService.removeTask(taskId);
   }
}
