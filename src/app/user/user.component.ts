import { Component, computed, signal } from '@angular/core';
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
  users = signal(DUMMY_USERS);
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  imagePath = computed(() => {
    return 'assets/users/' + this.selectedUser().avatar;
  });
  //getter
  // public get imagePath(): string {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }
  public onSelectUser() {
    randomIndex = generateRandomIndex();
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
