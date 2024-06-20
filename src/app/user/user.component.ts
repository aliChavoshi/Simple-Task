import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //using decorators
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  //using signals
  avatar = input.required<string>();
  name = input.required<string>();

  public onSelectUser() {}

  imagePath = computed(() => 'assets/users/' + this.avatar());

  // get imagePath() {
  //   return 'assets/users/' + this.avatar();
  // }
}
