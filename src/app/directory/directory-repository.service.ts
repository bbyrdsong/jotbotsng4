import { LocalStorageDbService } from '../services/local-storage-db.service';
import { BaseRepository } from '../lib/base-repository';
import { Injectable } from '@angular/core';
import { DirectoryModel } from './directory-model';

@Injectable()
export class DirectoryRepositoryService extends BaseRepository<DirectoryModel> {

  constructor(context: LocalStorageDbService) {
    super(context, 'directory');
   }

}
