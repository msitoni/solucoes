import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// third party imports
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OwlModule } from 'ngx-owl-carousel';


import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SocialNetworkComponent } from './social-network/social-network.component';
import { SelectLocaleComponent } from './select-locale/select-locale.component';
import { SlideMainComponent } from './slide-main/component/slide-main.component';
import { AboutComponent } from './about/about.component';
import { MenuProjectsLatestComponent } from './menu-projects-latest/menu-projects-latest.component';
import { ProjectsLatestComponent } from './projects-latest/projects-latest.component';
import { GalleryGroupComponent } from './gallery-group/gallery-group.component';
import { CustomerTestimonialsComponent } from './customer-testimonials/customer-testimonials.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SocialNetworkComponent,
    SelectLocaleComponent,
    SlideMainComponent,
    AboutComponent,
    MenuProjectsLatestComponent,
    ProjectsLatestComponent,
    GalleryGroupComponent,
    CustomerTestimonialsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FontAwesomeModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    CarouselModule.forRoot(),
    OwlModule
  ],
  providers: [{ provide: FirestoreSettingsToken, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }
