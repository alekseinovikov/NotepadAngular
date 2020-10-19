import {Component, OnDestroy, OnInit} from '@angular/core';
import {NoteService} from '../note-service-impl.service';
import {Note, NoteItem} from '../models/notes';
import {Observable, Subscription} from 'rxjs';

@Component({
    selector: 'app-note-container',
    templateUrl: './note-container.component.html',
    styleUrls: ['./note-container.component.css']
})
export class NoteContainerComponent implements OnInit, OnDestroy {

    selectedNote$: Observable<Note>;
    noteItems$: Observable<NoteItem[]>;
    selectedNoteId: number;

    constructor(private userService: NoteService) {
    }

    ngOnDestroy(): void {
    }

    ngOnInit(): void {
        this.noteItems$ = this.userService.getNoteItems();
    }

    private loadSelectedNoteNote(): void {
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
