import { Component, inject, input, output } from '@angular/core';
import { ITask } from '../tasks.model';
import { CardComponent } from '../../Shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TaskService } from '../task.service';

@Component({
   selector: 'app-task',
   standalone: true,
   imports: [CardComponent, DatePipe],
   templateUrl: './task.component.html',
   styleUrl: './task.component.css'
})
export class TaskComponent {
   private taskService = inject(TaskService);
   task = input.required<ITask>();

   CompleteTask() {
      this.taskService.removeTask(this.task().id);
   }
}
