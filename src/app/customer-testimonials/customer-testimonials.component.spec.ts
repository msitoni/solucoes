import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTestimonialsComponent } from './customer-testimonials.component';

describe('CustomerTestimonialsComponent', () => {
  let component: CustomerTestimonialsComponent;
  let fixture: ComponentFixture<CustomerTestimonialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerTestimonialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
