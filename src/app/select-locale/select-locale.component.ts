import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Globals } from '../globals/globals'
import { SelectLocaleService } from './service/select-locale.service'
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-select-locale',
  templateUrl: './select-locale.component.html',
  styleUrls: ['./select-locale.component.scss']
})
export class SelectLocaleComponent implements OnInit {

  globals: Globals;
  language: any;
  languages: any;


  constructor(private selectLocaleService: SelectLocaleService, private translate: TranslateService, globals: Globals) {
    this.globals = globals;
  }

  switchLanguage(language: string, value: number) {
    this.globals.idioma = value;
    this.translate.use(language);
  }




  getLanguage() {
    this.selectLocaleService.getLocaleList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(languages => {
      this.languages = languages;
      console.log(this.languages );
    });
  }


  ngOnInit() {
    this.getLanguage();
  }

}
