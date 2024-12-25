import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProfilePictureComponent } from './app-profile-picture.component';

describe('AppProfilePictureComponent', () => {
  let component: AppProfilePictureComponent;
  let fixture: ComponentFixture<AppProfilePictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppProfilePictureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppProfilePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
