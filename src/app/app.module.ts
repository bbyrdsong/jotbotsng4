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

@NgModule({
  declarations: [
    AppComponent,
    QuickNoteComponent,
    FilterNamePipe,
    SortObjArrByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'quicknotes', component: QuickNoteComponent }
    ])
  ],
  providers: [
    LocalStorageDbService,
    QuickNoteRepositoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
