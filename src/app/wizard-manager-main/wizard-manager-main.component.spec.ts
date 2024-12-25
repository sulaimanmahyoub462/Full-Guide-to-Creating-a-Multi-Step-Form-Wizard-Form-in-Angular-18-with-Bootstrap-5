import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardManagerMainComponent } from './wizard-manager-main.component';

describe('WizardManagerMainComponent', () => {
  let component: WizardManagerMainComponent;
  let fixture: ComponentFixture<WizardManagerMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WizardManagerMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WizardManagerMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
