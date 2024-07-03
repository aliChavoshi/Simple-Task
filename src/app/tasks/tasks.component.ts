import { Component, OnChanges, SimpleChanges, computed, input, signal } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { IUser } from '../user/dummy-users';
import { ITask, dummyTasks } from './dummy-tasks';

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
