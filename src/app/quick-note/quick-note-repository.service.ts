import { LocalStorageDbService } from '../services/local-storage-db.service';
import { QuickNote } from './quick-note';
import { BaseRepository } from '../lib/base-repository';
import { Injectable } from '@angular/core';

@Injectable()
export class QuickNoteRepositoryService extends BaseRepository<QuickNote> {
  constructor(context: LocalStorageDbService) {
    super(context, 'quicknotes');
  }
 }
