<<<<<<< HEAD
=======
import { QuickNote } from './quick-note';
import { QuickNoteRepositoryService } from './quick-note-repository.service';
import { BaseComponent } from '../lib/base-component';
>>>>>>> 566b2d35ef086f0889404870eb5bcd5b58e2d63b
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-note',
  templateUrl: './quick-note.component.html',
  styleUrls: ['./quick-note.component.css']
})
<<<<<<< HEAD
export class QuickNoteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
=======
export class QuickNoteComponent extends BaseComponent<QuickNote> {

  constructor(repository: QuickNoteRepositoryService) {
    super(repository, 'Quick Notes');
>>>>>>> 566b2d35ef086f0889404870eb5bcd5b58e2d63b
  }

}
