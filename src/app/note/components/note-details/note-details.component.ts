import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Note} from '../../models/notes';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit, OnChanges {

  @Input() note: Note;

  id: number;
  title: string;
  content: string;

  noteForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    content: new FormControl('')
  });

  constructor() {
  }

  ngOnInit(): void {
    this.updateState(this.note);
  }

  onSubmit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const newNote = changes.note.currentValue;
    this.updateState(newNote);
  }

  private updateState(note: Note): void {
    this.id = note.id;
    this.title = note.title;
    this.content = note.content;

    this.updateForm();
  }

  private updateForm(): void {
    this.noteForm.patchValue({title: this.title, content: this.content});
  }

}
