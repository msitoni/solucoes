import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-select-locale',
  templateUrl: './select-locale.component.html',
  styleUrls: ['./select-locale.component.scss']
})
export class SelectLocaleComponent implements OnInit {


  constructor(private translate: TranslateService) {
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    console.log("IDIOMA ", this.translate.currentLang );
  }

  ngOnInit() {
  }

}
