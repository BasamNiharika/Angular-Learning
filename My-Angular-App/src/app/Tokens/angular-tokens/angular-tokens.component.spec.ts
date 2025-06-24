import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTokensComponent } from './angular-tokens.component';

describe('AngularTokensComponent', () => {
  let component: AngularTokensComponent;
  let fixture: ComponentFixture<AngularTokensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularTokensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularTokensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
