import { AdminPageComponent } from './admin-page/admin-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ChoicesComponent } from './choices/choices.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { NoticesComponent } from './notices/notices.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { ProductConfirmationComponent } from './product-confirmation/product-confirmation.component';
import { ProductComponent } from './product/product.component';





const routes: Routes = [
 

    {
        path: '',
        component: HomePageComponent
      },
  
 
    {
      path: 'choices',
      component: ChoicesComponent
    },
   
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'register',
      component: RegisterComponent
    },
    {
      path: 'gallery',
      component: GalleryComponent
    },
    {
      path: 'contact',
      component: ContactComponent
    },
    {
      path: 'notices',
      component: NoticesComponent
    },

    { path: 'order-form', component: OrderFormComponent },

    { path: 'confirmation', component: ConfirmationComponent },
    
    { path: 'admin-page', component: AdminPageComponent },
  
    { path: 'productConfirmation', component: ProductConfirmationComponent },
    
    { path: 'products', component: ProductComponent },
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  