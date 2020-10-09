import {Component, Input, OnInit, Output} from '@angular/core';
import {NoteItem} from '../../models/notes';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  @Input() noteItems$: Observable<NoteItem[]>;
  @Output() selectedNoteId: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelectedNoteChange(noteIds: number[]): void {
    this.selectedNoteId = noteIds[0];
  }

}
