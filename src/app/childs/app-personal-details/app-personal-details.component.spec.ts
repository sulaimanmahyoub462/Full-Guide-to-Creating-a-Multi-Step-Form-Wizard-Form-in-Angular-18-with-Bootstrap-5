import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPersonalDetailsComponent } from './app-personal-details.component';

describe('AppPersonalDetailsComponent', () => {
  let component: AppPersonalDetailsComponent;
  let fixture: ComponentFixture<AppPersonalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppPersonalDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppPersonalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
