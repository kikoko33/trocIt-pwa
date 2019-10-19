import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { UserService } from './services/user-service';
import { UserListComponent } from './user-list/user-list.component';
import { SignUpComponent } from './pages/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddItemComponent } from './pages/add-item/add-item.component';
import { GiveListComponent } from './give-list/give-list.component';
import { LoginComponent } from './pages/login/login.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ItemService } from './services/item.service';
import { WorldItemsService } from './services/world-items.service';
import { UpdateItemComponent } from './pages/update-item/update-item.component';

import { AlertModule, BsDropdownModule, ModalModule } from 'ngx-bootstrap';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    SignUpComponent,
    AddItemComponent,
    GiveListComponent,
    LoginComponent,
    CatalogComponent,
    UpdateItemComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot()

  ],
  providers: [UserService, ItemService, WorldItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
