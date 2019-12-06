
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


import { SlideMain } from '../class/slide-main';


@Injectable({
  providedIn: 'root'
})
export class SlideMainService {

  private dbPath = 'slide-main';

  slideMainRef: AngularFirestoreCollection<SlideMain> = null;


  constructor(private db: AngularFirestore) {
    this.slideMainRef = db.collection(this.dbPath);
    console.log(this.slideMainRef);
   }


   getSlideMainList(): AngularFirestoreCollection<SlideMain> {
    return this.slideMainRef;
  }

}
