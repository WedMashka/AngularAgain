import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsNumber2Component } from './applications-number2.component';

describe('ApplicationsNumber2Component', () => {
  let component: ApplicationsNumber2Component;
  let fixture: ComponentFixture<ApplicationsNumber2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationsNumber2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationsNumber2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
