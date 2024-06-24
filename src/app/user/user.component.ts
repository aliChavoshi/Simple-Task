import { Component, Input, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //using decorators
  //@Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  //using signals
  avatar = input.required<string>();
  name = input.required<string>();
  id = input.required<string>();
  
  select = output<string>();
  //@Output() select = new EventEmitter<string>();

  public onSelectUser(id: string) {
    this.select.emit(id);
  }

  imagePath = computed(() => 'assets/users/' + this.avatar());

  // get imagePath() {
  //   return 'assets/users/' + this.avatar();
  // }
}
