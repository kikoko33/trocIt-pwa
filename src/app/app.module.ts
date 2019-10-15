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

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    SignUpComponent,
    AddItemComponent,
    GiveListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
