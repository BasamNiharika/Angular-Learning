import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratorAssignmentComponent } from './decorator-assignment.component';

describe('DecoratorAssignmentComponent', () => {
  let component: DecoratorAssignmentComponent;
  let fixture: ComponentFixture<DecoratorAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecoratorAssignmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecoratorAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
