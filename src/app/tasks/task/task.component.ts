import { Component, input } from '@angular/core';
import { ITask } from '../tasks.model';

@Component({
   selector: 'app-task',
   standalone: true,
   imports: [],
   templateUrl: './task.component.html',
   styleUrl: './task.component.css'
})
export class TaskComponent {
   task = input.required<ITask>();
}
