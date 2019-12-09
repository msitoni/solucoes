import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';


import { CustomerService } from '../customer/service/customer.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customers: any;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.getCustomerList();
  }


  getCustomerList() {
    this.customerService.getCustomerList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(customers => {
      this.customers = customers;
      console.log(this.customers );
    });
  }



  carouselCustomerGallery = {
    margin: 25,
    nav: false,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
        nav: true
      },
      600: {
        items: 5,
        nav: true
      },
      1000: {
        items: 5,
        nav: true,
        loop: false
      },
      1500: {
        items: 5,
        nav: true,
        loop: false
      }
    }
  }



}
