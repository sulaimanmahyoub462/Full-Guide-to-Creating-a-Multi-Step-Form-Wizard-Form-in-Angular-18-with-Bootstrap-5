import { Component } from '@angular/core';
import { WizardStep } from '../childs/model';

@Component({
  selector: 'app-wizard-manager-main',
  standalone: true,
  imports: [],
  templateUrl: './wizard-manager-main.component.html',
  styleUrl: './wizard-manager-main.component.scss'
})
export class WizardManagerMainComponent { 

  steps: WizardStep[] = [
    { id: 'accountInfo', label: 'Account Information', isValid: false },
    { id: 'personalDetails', label: 'Personal Details', isValid: false },
    { id: 'profilePicture', label: 'Profile Picture', isValid: false },
    { id: 'preview', label: 'Preview & Confirm', isValid: true },
  ];
  currentStepIndex = 0;

  nextStep() {
    if (this.currentStepIndex < this.steps.length - 1) this.currentStepIndex++;
  }
  previousStep() {
    if (this.currentStepIndex > 0) this.currentStepIndex--;
  }
  
  

}
