import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserContainerComponent} from './user-container/user-container.component';
import {UserListComponent} from './components/user-list/user-list.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    UserContainerComponent,
    UserListComponent,
    UserDetailsComponent,
  ],
  imports: [
    CommonModule,
    MatSliderModule,
    MatButtonModule
  ],
  exports: [
    UserContainerComponent
  ]
})
export class UserModule {
}
