import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAccountInfoComponent } from './app-account-info.component';

describe('AppAccountInfoComponent', () => {
  let component: AppAccountInfoComponent;
  let fixture: ComponentFixture<AppAccountInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppAccountInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppAccountInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
