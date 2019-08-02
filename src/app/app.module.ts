import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavigacijaComponent } from './navigacija/navigacija.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterPipesComponent } from './footer-pipes/footer-pipes.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NaslovPipesComponent } from './naslov-pipes/naslov-pipes.component';
import { ServicesService } from './services.service';
import { ServicesPipesComponent } from './services-pipes/services-pipes.component';
import { AboutPipesComponent } from './about-pipes/about-pipes.component';
import { AboutService } from './about.service';


@NgModule({
  declarations: [
    AppComponent,
    NavigacijaComponent,
    HomeComponent,
    ServicesComponent,
    AboutComponent,
    ContactComponent,
    FooterPipesComponent,
    ContactFormComponent,
    NaslovPipesComponent,
    ServicesPipesComponent,
    AboutPipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'services',
        component: ServicesComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      }
    ])
  ],
  providers: [ServicesService, AboutService],
  bootstrap: [AppComponent, NavigacijaComponent]
})
export class AppModule { }
