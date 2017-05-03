import { BaseModel } from './base-model';
import { Observable } from 'rxjs/Observable';

export interface IRepository<T extends BaseModel> {
    getAll(): Observable<T[]>;
    get(id: number): Observable<T>;
    save(model: T): Observable<T>;
    delete(id: number): Observable<boolean>;
}
