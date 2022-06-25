import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularGenerateUsernameComponent } from './angular-generate-username.component';

describe('AngularGenerateUsernameComponent', () => {
  let component: AngularGenerateUsernameComponent;
  let fixture: ComponentFixture<AngularGenerateUsernameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularGenerateUsernameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularGenerateUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
