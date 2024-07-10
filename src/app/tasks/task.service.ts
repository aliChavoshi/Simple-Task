import { effect, Injectable, signal } from '@angular/core';
import { dummyTasks, ITask } from './tasks.model';

@Injectable({
   providedIn: 'root'
})
export class TaskService {
   tasks = signal<ITask[]>(this.dummyTasks());
   saveInLocalStorage = effect(() => {
      localStorage.setItem('tasks', JSON.stringify(this.tasks()));
   });

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

   private dummyTasks(): ITask[] {
      if (localStorage.getItem('tasks')) {
         const stringData = localStorage.getItem('tasks');
         const tasks = JSON.parse(stringData) as ITask[];
         return tasks;
      }
      return dummyTasks;
   }
}
