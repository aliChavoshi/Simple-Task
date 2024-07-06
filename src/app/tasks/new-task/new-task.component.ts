import { Component, input, output } from '@angular/core';

@Component({
   selector: 'app-new-task',
   standalone: true,
   imports: [],
   templateUrl: './new-task.component.html',
   styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
   isOpened = input.required<boolean>();
   onCancelAddTask = output<boolean>();

   closeDialog() {
      this.onCancelAddTask.emit(false);
   }
}
