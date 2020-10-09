export interface NoteItem {
  id: number;
  title: string;
}

export interface Note extends NoteItem {
  content: string;
}
