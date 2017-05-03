import { IRepository } from './irepository';
import { BaseModel } from './base-model';
import { IContext } from './icontext';
import { Observable } from 'rxjs/Rx';

export class BaseRepository<T extends BaseModel> implements IRepository<T> {
    private UNDEFINED_ERROR = 'model is undefined';
    private context: IContext;
    private dbSet: T[];

    constructor(context: IContext, tableName: string) {
        this.context = context;
        this.dbSet = context.set(tableName);
    }

    getAll(): Observable<T[]> {
        return Observable.of(this.dbSet);
    }

    get(id: number): Observable<T> {
        const model = this.dbSet.find(obj => obj.id === id);
        return Observable.of(model);
    }

    save(model: T): Observable<T> {
        this.validModelCheck(model);

        if (!model.id) {
            const ids = this.dbSet.length > 0 ? this.dbSet.map(obj => { return obj.id; }) : [0];

            const nextId = (Math.max.apply(null, ids) || 0) + 1;

            model.id = nextId;
            model.createdOn = new Date();
            this.dbSet.push(model);
        } else {
            let storedModel = this.dbSet.find(obj => obj.id === model.id);

            if (storedModel) {
                for (const prop in model) {
                    if (storedModel.hasOwnProperty(prop)) {
                        storedModel[prop] = model[prop];
                    }
                }
                storedModel.modifiedOn = new Date();
            }
        }
        this.context.saveChanges();

        return Observable.of(model);
    }

    delete(id: number): Observable<boolean> {
        const idx = this.dbSet.findIndex(model => model.id === id);
        if (idx === -1) {
            throw new Error(this.UNDEFINED_ERROR);
        }

        this.dbSet.splice(idx, 1);
        this.context.saveChanges();

        return Observable.of(true);
    }

    private validModelCheck(model: T) {
        if (!model) {
            throw new Error(this.UNDEFINED_ERROR);
        }
    }
}
