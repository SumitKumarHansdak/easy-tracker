import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserDetails } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input({ required: true }) user!: UserDetails;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
