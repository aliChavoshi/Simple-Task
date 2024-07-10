import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ITask } from '../tasks.model';
import { CardComponent } from '../../Shared/card/card.component';
import { TaskService } from '../task.service';

@Component({
   selector: 'app-new-task',
   standalone: true,
   imports: [FormsModule, CardComponent],

   templateUrl: './new-task.component.html',
   styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
   private taskService = inject(TaskService);
   //outputs and inputs
   userId = input.required<string>();
   close = output<boolean>();
   //create new a task
   title = signal('');
   dueDate = signal('');
   summary = signal('');

   closeDialog() {
      this.close.emit(false);
   }
   onSubmit() {
      const newTask: ITask = {
         dueDate: this.dueDate(),
         summary: this.summary(),
         title: this.title(),
         id: new Date().getTime().toString(),
         userId: this.userId()
      };
      this.taskService.addTask(newTask, this.userId());
      this.close.emit(false);
   }
}
