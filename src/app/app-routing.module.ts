import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { SignUpComponent } from './pages/signup/signup.component';
import { AddItemComponent } from './pages/add-item/add-item.component';
import { GiveListComponent } from './give-list/give-list.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { UpdateItemComponent } from './pages/update-item/update-item.component';
import { NotificationComponent } from './pages/notification/notification.component';



const routes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'full'
  },
  {
    path: 'notification', component: NotificationComponent, pathMatch: 'full'
  },
  {
    path: 'users', component: UserListComponent
  },
  {
    path: 'signup', component: SignUpComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'additem', component: AddItemComponent
  },
  {
    path: 'updateitem', component: UpdateItemComponent
  },
  {
    path: 'items', component: CatalogComponent
  },
  {
    path: 'myitems', component: GiveListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
