import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ChoicesComponent } from './choices/choices.component';
import { OrderingComponent } from './ordering/ordering.component';




const routes: Routes = [

    {
        path: '',
        component: HomePageComponent
      },
  
    {
      path: 'about',
      component: AboutComponent
    },
    {
      path: 'choices',
      component: ChoicesComponent
    },
    {
      path: 'ordering',
      component: OrderingComponent
    }
    
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  