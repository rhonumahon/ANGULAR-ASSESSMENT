import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule } from '@angular/router';
import { PhonePipe } from './phone.pipe';
import { UserComponent } from './user/user.component';
import { FriendsComponent } from './user/friends/friends.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes = [
  {
    path: 'sampleApp',
    component: UserListComponent
  },
  {
    path: 'sampleApp/add',
    component: UserComponent
  },
  {
    path: 'sampleApp/:id/view',
    component: UserComponent
  },
  

]
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    PhonePipe,
    UserComponent,
    FriendsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,  
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
