import { Component, input } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
   selector: 'app-tasks',
   standalone: true,
   templateUrl: './tasks.component.html',
   styleUrl: './tasks.component.css',
   imports: [TaskComponent]
})
export class TasksComponent {
   name = input.required<string>();
}
