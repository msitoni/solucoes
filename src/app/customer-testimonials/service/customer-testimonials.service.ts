import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


import { CustomerTestimonials } from '../class/customer-testimonials';

@Injectable({
  providedIn: 'root'
})
export class CustomerTestimonialsService {

  constructor(private db: AngularFirestore) {
    this.customerTestimonialsRef = db.collection(this.dbPath);
  }

  private dbPath = 'customer-testimonials';

  customerTestimonialsRef: AngularFirestoreCollection<CustomerTestimonials> = null;

  getCustomerTestimonialstList(): AngularFirestoreCollection<CustomerTestimonials> {
    return this.customerTestimonialsRef;
  }

}
