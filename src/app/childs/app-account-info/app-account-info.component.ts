import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-app-account-info',
  standalone: true,
  imports: [],
  templateUrl: './app-account-info.component.html',
  styleUrl: './app-account-info.component.scss'
})
export class AppAccountInfoComponent {
  @Input() accountInfo = { username: '', email: '' };
  @Output() accountInfoChange = new EventEmitter<{ username: string; email: string }>();
  @Output() stepValidity = new EventEmitter<boolean>();
  
}
