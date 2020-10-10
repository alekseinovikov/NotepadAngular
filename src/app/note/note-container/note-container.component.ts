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

    selectedNote: Note;
    selectedNote$: Observable<Note>;
    noteItems$: Observable<NoteItem[]>;
    selectedNoteId: number;
    selectedNoteSubscription: Subscription;

    constructor(private userService: NoteService) {
    }

    ngOnDestroy(): void {
        this.unsubscribeSelectedNote();
    }

    ngOnInit(): void {
        this.noteItems$ = this.userService.getNoteItems();
    }

    private loadSelectedNoteNote(): void {
        if (!this.selectedNoteId) {
            return;
        }

        this.unsubscribeSelectedNote();
        this.selectedNoteSubscription = this.userService.getNoteById(this.selectedNoteId)
            .subscribe(value => {
                this.selectedNote = value;
            });
    }

    onSelectedNoteIdChange(id: number): void {
        this.selectedNoteId = id;
        this.loadSelectedNoteNote();
    }

    private unsubscribeSelectedNote(): void {
        if (this.selectedNoteSubscription) {
            this.selectedNoteSubscription.unsubscribe();
        }
    }

}
