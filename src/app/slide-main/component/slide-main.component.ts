import { Component, OnInit, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { CarouselConfig } from 'ngx-bootstrap/carousel';


import { SlideMainService } from '../service/slide-main.service';




@Component({
  selector: 'app-slide-main',
  templateUrl: './slide-main.component.html',
  styleUrls: ['./slide-main.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }
  ]
})
export class SlideMainComponent implements OnInit {

  slideMain: any;


  constructor(private slideMainService: SlideMainService) { }

  ngOnInit() {
    this.getSlideMainList();
  }

  getSlideMainList() {
    this.slideMainService.getSlideMainList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(slideMain => {
      console.log(this.slideMain);
      this.slideMain = slideMain;
    });
  }

}
