import { IRepository } from './irepository';
import { BaseModel } from './base-model';
import { IContext } from './icontext';

export class BaseRepository<T extends BaseModel> implements IRepository<T> {
    private UNDEFINED_ERROR = 'model is undefined';
    private context: IContext;
    private dbSet: T[];

    constructor(context: IContext, tableName: string) {
        this.context = context;
        this.dbSet = context.set(tableName);
    }

    getAll(): T[] {
        return this.dbSet;
    }

    get(id: number): T {
        return this.dbSet.find(model => model.id === id);
    }

    insert(model: T): T {
        this.validModelCheck(model);

        const ids = this.dbSet.length > 0 ? this.dbSet.map(obj => { return obj.id; }) : [0];

        const nextId = (Math.max.apply(null, ids) || 0) + 1;

        model.id = nextId;
        model.createdOn = new Date();
        this.dbSet.push(model);
        this.context.saveChanges();

        return model;
    }

    update(model: T): void {
        this.validModelCheck(model);

        let storedModel = this.dbSet.find(obj => obj.id === model.id);

        if (storedModel) {
            for (const prop in model) {
                if (storedModel.hasOwnProperty(prop)) {
                    storedModel[prop] = model[prop];
                }
            }
            storedModel.modifiedOn = new Date();
            this.context.saveChanges();
        }
    }

    delete(id: number): void {
        const idx = this.dbSet.findIndex(model => model.id === id);
        if (idx === -1) {
            throw new Error(this.UNDEFINED_ERROR);
        }

        this.dbSet.splice(idx, 1);
        this.context.saveChanges();
    }

    private validModelCheck(model: T) {
        if (!model) {
            throw new Error(this.UNDEFINED_ERROR);
        }
    }
}
