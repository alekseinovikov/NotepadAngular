import {Component, OnInit} from '@angular/core';
import {NoteService} from '../note-service-impl.service';
import {Note, NoteItem} from '../models/notes';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-note-container',
    templateUrl: './note-container.component.html',
    styleUrls: ['./note-container.component.css']
})
export class NoteContainerComponent implements OnInit {

    selectedNote$: Observable<Note>;
    noteItems$: Observable<NoteItem[]>;
    selectedNoteId: number;

    constructor(private userService: NoteService) {
    }

    ngOnInit(): void {
        this.noteItems$ = this.userService.getNoteItems();
    }

    loadSelectedNoteNote(): void {
        if (!this.selectedNoteId) {
            return;
        }

        this.selectedNote$ = this.userService.getNoteById(this.selectedNoteId);
    }

    onSelectedNoteIdChange(id: number): void {
        this.selectedNoteId = id;
        this.loadSelectedNoteNote();
    }

}
