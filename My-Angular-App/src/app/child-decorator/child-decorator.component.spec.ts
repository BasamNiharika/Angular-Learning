import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDecoratorComponent } from './child-decorator.component';

describe('ChildDecoratorComponent', () => {
  let component: ChildDecoratorComponent;
  let fixture: ComponentFixture<ChildDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildDecoratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
