import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteEmployeeDetailsComponent } from './route-employee-details.component';

describe('RouteEmployeeDetailsComponent', () => {
  let component: RouteEmployeeDetailsComponent;
  let fixture: ComponentFixture<RouteEmployeeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteEmployeeDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteEmployeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
