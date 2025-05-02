import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fundamentals2Component } from './fundamentals-2.component';

describe('Fundamentals2Component', () => {
  let component: Fundamentals2Component;
  let fixture: ComponentFixture<Fundamentals2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fundamentals2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fundamentals2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
