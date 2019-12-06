import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { ProjectsLatest } from '../class/projects-latest';


@Injectable({
  providedIn: 'root'
})
export class ProjectsLatestService {

  private dbPath = 'slide-carousel-projects';

  projectsLatestRef: AngularFirestoreCollection<ProjectsLatest> = null;

  constructor(private db: AngularFirestore) {
    this.projectsLatestRef = db.collection(this.dbPath);
    console.log(this.projectsLatestRef);
  }



  getProjectsLatestList(): AngularFirestoreCollection<ProjectsLatest> {
    return this.projectsLatestRef;
  }


}
