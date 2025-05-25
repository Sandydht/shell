import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorModuleFederationComponent } from './error-module-federation.component';

describe('ErrorModuleFederationComponent', () => {
  let component: ErrorModuleFederationComponent;
  let fixture: ComponentFixture<ErrorModuleFederationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorModuleFederationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorModuleFederationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
