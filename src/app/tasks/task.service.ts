import { Injectable, signal } from '@angular/core';
import { dummyTasks, ITask } from './tasks.model';

@Injectable({
   providedIn: 'root'
})
export class TaskService {
   tasks = signal(dummyTasks);

   constructor() {}

   getUserTasks(userId: string) {
      return this.tasks().filter((x) => x.userId === userId);
   }
   getTasks() {
      return this.tasks();
   }
   addTask(task: ITask, userId: string) {
      task.id = new Date().getTime().toString();
      task.userId = userId;
      const tasks = [...this.tasks(), task];
      this.tasks.set(tasks);
   }
   removeTask(id: string) {
      const tasks = this.tasks().filter((x) => x.id !== id);
      this.tasks.set(tasks);
   }
}
