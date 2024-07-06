import { Component, input, output, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ITask } from '../tasks.model';

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
   title = signal('');
   dueDate = signal('');
   summary = signal('');

   closeDialog() {
      this.onCancelAddTask.emit(false);
   }
   createNewTask() {
      const newTask: ITask = {
         dueDate: this.dueDate(),
         summary: this.summary(),
         title: this.title(),
         id: '',
         userId: ''
      };
      console.log('🚀 ~ NewTaskComponent ~ createNewTask ~ newTask:', newTask);
   }
}
