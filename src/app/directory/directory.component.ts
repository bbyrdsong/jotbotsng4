import { DirectoryRepositoryService } from './directory-repository.service';
import { BaseComponent } from '../lib/base-component';
import { Component } from '@angular/core';
import { DirectoryModel } from './directory-model';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent extends BaseComponent<DirectoryModel> {

  constructor(repository: DirectoryRepositoryService) {
    super(repository, 'Directory');
   }

}
