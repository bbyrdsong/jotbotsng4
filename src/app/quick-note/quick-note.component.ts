import { QuickNoteModel } from './quick-note-model';
import { QuickNoteRepositoryService } from './quick-note-repository.service';
import { BaseComponent } from '../lib/base-component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-note',
  templateUrl: './quick-note.component.html',
  styleUrls: ['./quick-note.component.css']
})
export class QuickNoteComponent extends BaseComponent<QuickNoteModel> {

  constructor(repository: QuickNoteRepositoryService) {
    super(repository, 'Quick Notes');
  }

}
