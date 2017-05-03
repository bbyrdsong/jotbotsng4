import { QuickNoteRepositoryService } from './quick-note/quick-note-repository.service';
import { LocalStorageDbService } from './services/local-storage-db.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { QuickNoteComponent } from './quick-note/quick-note.component';
import { FilterNamePipe } from './shared/filter-name.pipe';
import { SortObjArrByPipe } from './shared/sort-obj-arr-by.pipe';
import { DirectoryComponent } from './directory/directory.component';
import { DirectoryRepositoryService } from './directory/directory-repository.service';

@NgModule({
  declarations: [
    AppComponent,
    QuickNoteComponent,
    FilterNamePipe,
    SortObjArrByPipe,
    DirectoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'quicknotes', component: QuickNoteComponent },
      { path: 'directory', component: DirectoryComponent }
    ])
  ],
  providers: [
    LocalStorageDbService,
    QuickNoteRepositoryService,
    DirectoryRepositoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
