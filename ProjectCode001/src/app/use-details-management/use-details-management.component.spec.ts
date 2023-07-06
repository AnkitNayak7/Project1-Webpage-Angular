import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseDetailsManagementComponent } from './use-details-management.component';

describe('UseDetailsManagementComponent', () => {
  let component: UseDetailsManagementComponent;
  let fixture: ComponentFixture<UseDetailsManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UseDetailsManagementComponent]
    });
    fixture = TestBed.createComponent(UseDetailsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
