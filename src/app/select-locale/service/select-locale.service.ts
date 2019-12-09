import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


import { SelectLocale } from '../class/select-locale';


@Injectable({
  providedIn: 'root'
})
export class SelectLocaleService {

  private dbPath = 'language';


  languageRef: AngularFirestoreCollection<SelectLocale> = null;

  constructor(private db: AngularFirestore) {
    this.languageRef = db.collection(this.dbPath);
    console.log(this.languageRef);
  }


  getLocaleList(): AngularFirestoreCollection<SelectLocale> {
    return this.languageRef;
  }


}
