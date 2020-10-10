import {Injectable} from '@angular/core';
import {Note, NoteItem} from './models/notes';
import {from, Observable, of} from 'rxjs';
import {map, toArray} from 'rxjs/operators';

export abstract class NoteService {
  abstract getNoteById(id: number): Observable<Note>;

  abstract getNoteItems(): Observable<NoteItem[]>;
}

@Injectable({
  providedIn: 'root'
})
export class NoteServiceImpl implements NoteService {

  private notes: Note[] = [
    {id: 1, title: 'first', content: 'first content'},
    {id: 2, title: 'second', content: 'second content'},
    {id: 3, title: 'third', content: 'third content'}];


  constructor() {
  }

  public getNoteItems(): Observable<NoteItem[]> {
    return from(this.notes).pipe(
      map(value => this.convert(value)),
      toArray());
  }

  public getNoteById(id: number): Observable<Note> {
    const foundNote = this.notes.find(x => x.id === id);
    return of(foundNote);
  }

  private convert(note: Note): NoteItem {
    return {id: note.id, title: note.title};
  }

}
