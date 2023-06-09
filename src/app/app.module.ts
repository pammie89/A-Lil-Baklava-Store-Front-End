import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeroComponent } from './hero/hero.component';
import { ImagecolsComponent } from './home-page/imagecols/imagecols.component';
import { MeetTheBakerComponent } from './home-page/meet-the-baker/meet-the-baker.component';
import { TestimonialComponent } from './home-page/testimonial/testimonial.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';

import { ChoicesComponent } from './choices/choices.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { NoticesComponent } from './notices/notices.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ProductConfirmationComponent } from './product-confirmation/product-confirmation.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';




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
    ChoicesComponent,
    LoginComponent,
    RegisterComponent,
    GalleryComponent,
    ContactComponent,
    NoticesComponent,
    OrderFormComponent,
    ConfirmationComponent,
    AddProductComponent,
    AdminPageComponent,
    ProductConfirmationComponent,
    
   



  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
