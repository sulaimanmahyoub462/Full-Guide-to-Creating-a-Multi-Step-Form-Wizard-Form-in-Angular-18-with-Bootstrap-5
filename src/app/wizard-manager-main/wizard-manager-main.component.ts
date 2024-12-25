import { Component } from '@angular/core';
import { UserProfile, WizardStep } from '../childs/model';
import {NgFor, NgIf, NgSwitch, NgSwitchCase} from '@angular/common';
import { AppAccountInfoComponent } from "../childs/app-account-info/app-account-info.component";
 import { AppPreviewComponent } from "../childs/app-preview/app-preview.component";
import { AppPersonalDetailsComponent } from "../childs/app-personal-details/app-personal-details.component";
import {AppProfilePictureComponent} from "../childs/app-profile-picture/app-profile-picture.component";

@Component({
  selector: 'wizard-manager',
  standalone: true,
  imports: [NgFor, NgIf, NgSwitch, AppAccountInfoComponent, AppPreviewComponent, AppPersonalDetailsComponent, AppProfilePictureComponent, NgSwitchCase],
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



  userProfile: UserProfile = {
    accountInfo: { username: '', email: '' },
    personalDetails: {firstName: '',lastName: '', dateOfBirth: ''},
    profilePicture: { file: new File( [],''), urlDisplay: '' },
  };
  get isLastStep(): boolean {
    return this.currentStepIndex === this.steps.length - 1;
  }

  get isFirstStep(): boolean {
    return this.currentStepIndex === 0;
  }

  nextStep(): void {
    if (this.steps[this.currentStepIndex].isValid) {
      this.currentStepIndex++;
    }
  }

  previousStep(): void {
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
    }
  }

  onStepValidityChange(isValid: boolean): void {
    this.steps[this.currentStepIndex].isValid = isValid;
  }

  onSubmit(): void {
    console.log('User Profile Submitted:', this.userProfile);
    alert('Profile submitted successfully!');
  }
}
