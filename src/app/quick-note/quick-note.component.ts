import { QuickNote } from './quick-note';
import { QuickNoteRepositoryService } from './quick-note-repository.service';
import { BaseComponent } from '../lib/base-component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-note',
  templateUrl: './quick-note.component.html',
  styleUrls: ['./quick-note.component.css']
})
export class QuickNoteComponent extends BaseComponent<QuickNote> {

  constructor(repository: QuickNoteRepositoryService) {
    super(repository, 'Quick Notes');
  }

}
