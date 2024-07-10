import { Component, input, output } from '@angular/core';
import { ITask } from '../tasks.model';
import { CardComponent } from '../../Shared/card/card.component';
import { DatePipe } from '@angular/common';

@Component({
   selector: 'app-task',
   standalone: true,
   imports: [CardComponent, DatePipe],
   templateUrl: './task.component.html',
   styleUrl: './task.component.css'
})
export class TaskComponent {
   task = input.required<ITask>();
   deleteTask = output<string>();
   CompleteTask() {
      this.deleteTask.emit(this.task().id);
   }
}
