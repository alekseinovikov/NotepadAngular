import { TestBed } from '@angular/core/testing';

import { NoteServiceImpl } from './note-service-impl.service';

describe('UserService', () => {
  let service: NoteServiceImpl;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteServiceImpl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
