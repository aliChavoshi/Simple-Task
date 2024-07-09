import { Component, input, output, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ITask } from '../tasks.model';
import { CardComponent } from "../../Shared/card/card.component";

@Component({
   selector: 'app-new-task',
   standalone: true,
   imports: [FormsModule, CardComponent],

   templateUrl: './new-task.component.html',
   styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
   //outputs and inputs
   isOpened = input.required<boolean>();
   onCancelAddTask = output<boolean>();
   add = output<ITask>();
   //create new a task
   title = signal('');
   dueDate = signal('');
   summary = signal('');

   closeDialog() {
      this.onCancelAddTask.emit(false);
   }
   onSubmit() {
      const newTask: ITask = {
         dueDate: this.dueDate(),
         summary: this.summary(),
         title: this.title(),
         id: 't4',
         userId: ''
      };
      this.add.emit(newTask);
      this.onCancelAddTask.emit(false);
   }
}
