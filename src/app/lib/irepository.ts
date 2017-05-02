import { BaseModel } from './base-model';

export interface IRepository<T extends BaseModel> {
    getAll(): T[];
    get(id: number): T;
    insert(model: T): T;
    update(model: T): void;
    delete(id: number): void;
}
