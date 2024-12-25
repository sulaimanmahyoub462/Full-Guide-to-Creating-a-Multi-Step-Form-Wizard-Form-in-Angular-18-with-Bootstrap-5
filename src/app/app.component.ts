import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WizardManagerMainComponent } from "./wizard-manager-main/wizard-manager-main.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WizardManagerMainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'wizard-manager-example';
}
