<<<<<<< HEAD
=======
import { QuickNoteRepositoryService } from './quick-note/quick-note-repository.service';
import { LocalStorageDbService } from './services/local-storage-db.service';
>>>>>>> 566b2d35ef086f0889404870eb5bcd5b58e2d63b
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
<<<<<<< HEAD

import { AppComponent } from './app.component';
import { QuickNoteComponent } from './quick-note/quick-note.component';
=======
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { QuickNoteComponent } from './quick-note/quick-note.component';
import { FilterNamePipe } from './shared/filter-name.pipe';
import { SortObjArrByPipe } from './shared/sort-obj-arr-by.pipe';
>>>>>>> 566b2d35ef086f0889404870eb5bcd5b58e2d63b

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    QuickNoteComponent
=======
    QuickNoteComponent,
    FilterNamePipe,
    SortObjArrByPipe
>>>>>>> 566b2d35ef086f0889404870eb5bcd5b58e2d63b
  ],
  imports: [
    BrowserModule,
    FormsModule,
<<<<<<< HEAD
    HttpModule
  ],
  providers: [],
=======
    HttpModule,
    RouterModule.forRoot([
      { path: 'quicknotes', component: QuickNoteComponent }
    ])
  ],
  providers: [
    LocalStorageDbService,
    QuickNoteRepositoryService
  ],
>>>>>>> 566b2d35ef086f0889404870eb5bcd5b58e2d63b
  bootstrap: [AppComponent]
})
export class AppModule { }
