import { Component, input, output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
   selector: 'app-new-task',
   standalone: true,
   imports: [FormsModule],
   templateUrl: './new-task.component.html',
   styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
   isOpened = input.required<boolean>();
   onCancelAddTask = output<boolean>();
   //create new a task
   title = '';
   dueDate = '';
   summary = '';

   closeDialog() {
      this.onCancelAddTask.emit(false);
   }
   createNewTask() {
      throw new Error('Method not implemented.');
   }
}
