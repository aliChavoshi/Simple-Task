import { Component, Input, computed, signal } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: any;
  public onSelectUser() {}

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
}
