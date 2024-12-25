import { Component, Input } from '@angular/core';
import { UserProfile } from '../model';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [],
  templateUrl: './app-preview.component.html',
  styleUrl: './app-preview.component.scss'
})
export class AppPreviewComponent {
  @Input() userProfile: UserProfile | any;
}
