import { Injectable } from '@angular/core';
import { AppSettings } from 'app/app-settings';
import { IContext } from 'app/lib/icontext';


@Injectable()
export class LocalStorageDbService implements IContext {
  private db: any;

  constructor() {
    const jotbots = window.localStorage.getItem(AppSettings.dbName);
    if (!jotbots) {
      window.localStorage.setItem(AppSettings.dbName, JSON.stringify({}));
    }

    this.db = JSON.parse(window.localStorage.getItem(AppSettings.dbName));
  }

  set(tableName: string): any[] {
    if (!this.db.hasOwnProperty(tableName)) {
      this.db[tableName] = [];
    }

    return this.db[tableName];
  }

  saveChanges(): void {
    window.localStorage.setItem(AppSettings.dbName, JSON.stringify(this.db));
  }

}
