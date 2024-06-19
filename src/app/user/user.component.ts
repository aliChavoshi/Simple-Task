import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

let randomIndex = generateRandomIndex();
function generateRandomIndex() {
  return Math.floor(Math.random() * DUMMY_USERS.length);
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  users = DUMMY_USERS;
  selectedUser = DUMMY_USERS[randomIndex];

  //getter
  public get imagePath(): string {
    return 'assets/users/' + this.selectedUser.avatar;
  }

  public onSelectUser(value: any) {
    randomIndex = generateRandomIndex();
    this.selectedUser = DUMMY_USERS[randomIndex];
  }
}
