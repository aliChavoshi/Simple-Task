import { Component, Input, computed, input, output } from '@angular/core';
import { IUser } from './users.model';

@Component({
   selector: 'app-user',
   standalone: true,
   imports: [],
   templateUrl: './user.component.html',
   styleUrl: './user.component.css'
})
export class UserComponent {
   isSelected = input.required<boolean>();
   user = input.required<IUser>();
   selectedUserId = output<string>();

   public onSelectUser(id: string) {
      this.selectedUserId.emit(id);
   }

   imagePath = computed(() => 'assets/users/' + this.user().avatar);
}
