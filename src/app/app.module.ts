import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeroComponent } from './hero/hero.component';
import { ImagecolsComponent } from './home-page/imagecols/imagecols.component';
import { MeetTheBakerComponent } from './home-page/meet-the-baker/meet-the-baker.component';
import { TestimonialComponent } from './home-page/testimonial/testimonial.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { ChoicesComponent } from './choices/choices.component';
import { OrderingComponent } from './ordering/ordering.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeroComponent,
    ImagecolsComponent,
    MeetTheBakerComponent,
    TestimonialComponent,
    FooterComponent,
    HomePageComponent,
    AboutComponent,
    ChoicesComponent,
    OrderingComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
