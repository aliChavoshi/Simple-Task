import { Component, Input, computed, input, output } from '@angular/core';
import { IUser } from './dummy-users';

@Component({
   selector: 'app-user',
   standalone: true,
   imports: [],
   templateUrl: './user.component.html',
   styleUrl: './user.component.css'
})
export class UserComponent {
   //using decorators
   //@Input({ required: true }) avatar!: string;
   // @Input({ required: true }) name!: string;
   //@Output() select = new EventEmitter<string>();

   //using signals
   user = input.required<IUser>();
   select = output<string>();

   public onSelectUser(id: string) {
      this.select.emit(id);
   }

   imagePath = computed(() => 'assets/users/' + this.user().avatar);
}
