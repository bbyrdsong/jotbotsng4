import { LocalStorageDbService } from '../services/local-storage-db.service';
import { QuickNoteModel } from './quick-note-model';
import { BaseRepository } from '../lib/base-repository';
import { Injectable } from '@angular/core';

@Injectable()
export class QuickNoteRepositoryService extends BaseRepository<QuickNoteModel> {
  constructor(context: LocalStorageDbService) {
    super(context, 'quicknotes');
  }
 }
