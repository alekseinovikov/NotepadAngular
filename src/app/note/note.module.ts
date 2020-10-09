import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NoteContainerComponent} from './note-container/note-container.component';
import {NoteListComponent} from './components/note-list/note-list.component';
import {NoteDetailsComponent} from './components/note-details/note-details.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {NoteService, NoteServiceImpl} from './note-service-impl.service';


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
    MatSidenavModule
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
