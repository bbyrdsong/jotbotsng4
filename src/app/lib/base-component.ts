import { IUnitOfWork } from './iunitofwork';
import { OnInit } from '@angular/core/core';
export class BaseComponent<T extends any> implements OnInit {
    dbSet: any[];
    model: any;
    showForm = false;

    constructor(private uow: IUnitOfWork, private tableName: string, public sectionTitle: string) { }

    ngOnInit(): void {
        this.model = {};
        this.get();
    }

    get(): void {
        this.dbSet = this.uow[this.tableName].getAll();
    }

    save(event: Event): void {
        this.handleEvent(event);

        if (this.model.id) {
            this.uow[this.tableName].update(this.model);
        } else {
            this.uow[this.tableName].insert(this.model);
        }

        this.get();
        this.showForm = false;
    }

    add(): void {
        this.model = {};
        this.showForm = true;
    }

    edit(model: T, event: Event) {
        this.handleEvent(event);

        this.model = model;
        this.showForm = true;
    }

    delete(model: T, event: Event) {
        this.handleEvent(event);

        this.uow[this.tableName].delete(model.id);
        this.get();
    }

    private handleEvent(event: Event) {
        if (event) {
            event.preventDefault();
        }
    }

}
