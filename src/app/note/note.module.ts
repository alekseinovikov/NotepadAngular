import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NoteContainerComponent} from './note-container/note-container.component';
import {NoteListComponent} from './components/note-list/note-list.component';
import {NoteDetailsComponent} from './components/note-details/note-details.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {NoteService, NoteServiceImpl} from './note-service-impl.service';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    NoteContainerComponent,
    NoteListComponent,
    NoteDetailsComponent,
  ],
  imports: [
    CommonModule,
    MatSliderModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    FormsModule,
    MatInputModule,
    MatSidenavModule,
    ReactiveFormsModule
  ],
  exports: [
    NoteContainerComponent
  ],
  providers: [
    {provide: NoteService, useClass: NoteServiceImpl}
  ]
})
export class NoteModule {
}
