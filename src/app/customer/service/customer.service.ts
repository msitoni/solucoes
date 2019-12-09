import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


import { Customer } from './../class/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private dbPath = 'customer-gallery';

  constructor(private db: AngularFirestore) {
    this.customerRef = db.collection(this.dbPath);
  }

  customerRef: AngularFirestoreCollection<Customer> = null;

  getCustomerList(): AngularFirestoreCollection<Customer> {
    return this.customerRef;
  }

}
