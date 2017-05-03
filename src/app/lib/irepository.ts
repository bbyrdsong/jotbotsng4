import { BaseModel } from './base-model';
<<<<<<< HEAD

export interface IRepository<T extends BaseModel> {
    getAll(): T[];
    get(id: number): T;
    insert(model: T): T;
    update(model: T): void;
    delete(id: number): void;
=======
import { Observable } from 'rxjs/Observable';

export interface IRepository<T extends BaseModel> {
    getAll(): Observable<T[]>;
    get(id: number): Observable<T>;
    save(model: T): Observable<T>;
    delete(id: number): Observable<boolean>;
>>>>>>> 566b2d35ef086f0889404870eb5bcd5b58e2d63b
}
