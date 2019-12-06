import { Component, OnInit, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';


import { ProjectsLatestService } from './service/projects-latest.service';



@Component({
  selector: 'app-projects-latest',
  templateUrl: './projects-latest.component.html',
  styleUrls: ['./projects-latest.component.scss']
})
export class ProjectsLatestComponent implements OnInit {


  projectsLatest: any;

  currentLang: string = this.translate.currentLang;


  constructor(private projectsLatestService: ProjectsLatestService, private translate: TranslateService) {

    console.log('Default language:', this.translate.currentLang);

   }

  ngOnInit() {
    this.getProjectsLatestList();
  }

  getProjectsLatestList() {
    this.projectsLatestService.getProjectsLatestList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(projectsLatest => {
      this.projectsLatest = projectsLatest;
      console.log(this.projectsLatest );
    });
  }


  carouselOptions = {
    margin: 25,
    nav: true,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: true
      },
      1000: {
        items: 2,
        nav: true,
        loop: false
      },
      1500: {
        items: 4,
        nav: true,
        loop: false
      }
    }
  }



}
