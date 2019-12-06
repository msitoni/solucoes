import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';


import { CustomerTestimonialsService } from './service/customer-testimonials.service'

@Component({
  selector: 'app-customer-testimonials',
  templateUrl: './customer-testimonials.component.html',
  styleUrls: ['./customer-testimonials.component.scss']
})
export class CustomerTestimonialsComponent implements OnInit {

  customerTestimonials: any;


  constructor(private customerTestimonialsService: CustomerTestimonialsService) { }

  ngOnInit() {
    this.getCustomerTestimonialList();
  }


  getCustomerTestimonialList() {
    this.customerTestimonialsService.getCustomerTestimonialstList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(customerTestimonials => {
      this.customerTestimonials = customerTestimonials;
      console.log(this.customerTestimonials );
    });
  }



  carouselCustomer = {
    margin: 25,
    nav: true,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
        nav: true
      },
      600: {
        items: 2,
        nav: true
      },
      1000: {
        items: 2,
        nav: true,
        loop: false
      },
      1500: {
        items: 2,
        nav: true,
        loop: false
      }
    }
  }



}
