import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS, IUser } from './user/dummy-users';
import { TasksComponent } from './tasks/tasks.component';
// import { NgFor, NgIf } from '@angular/common';

@Component({
   selector: 'app-root',
   standalone: true,
   imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
   templateUrl: './app.component.html',
   styleUrl: './app.component.css'
})
export class AppComponent {
   selectedUser = signal<IUser>({ avatar: '', id: '', name: '' });
   users = signal<IUser[]>(DUMMY_USERS);

   onSelectUser(userId: string) {
      this.selectedUser.set(this.users().find((user) => user.id === userId));
   }
}
