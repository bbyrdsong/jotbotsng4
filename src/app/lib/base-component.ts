<<<<<<< HEAD
import { IUnitOfWork } from './iunitofwork';
import { OnInit } from '@angular/core/core';
export class BaseComponent<T extends any> implements OnInit {
=======
import { BaseModel } from './base-model';
import { IRepository } from './irepository';
import { OnInit } from '@angular/core/core';
import { Observable } from 'rxjs/Observable';

export class BaseComponent<T extends BaseModel> implements OnInit {
>>>>>>> 566b2d35ef086f0889404870eb5bcd5b58e2d63b
    dbSet: any[];
    model: any;
    showForm = false;

<<<<<<< HEAD
    constructor(private uow: IUnitOfWork, private tableName: string, public sectionTitle: string) { }
=======
    constructor(private repository: IRepository<T>, public sectionTitle: string) { }
>>>>>>> 566b2d35ef086f0889404870eb5bcd5b58e2d63b

    ngOnInit(): void {
        this.model = {};
        this.get();
    }

    get(): void {
<<<<<<< HEAD
        this.dbSet = this.uow[this.tableName].getAll();
=======
        this.repository.getAll().subscribe(
            data => this.dbSet = data,
            error => alert(error)
        );
>>>>>>> 566b2d35ef086f0889404870eb5bcd5b58e2d63b
    }

    save(event: Event): void {
        this.handleEvent(event);

<<<<<<< HEAD
        if (this.model.id) {
            this.uow[this.tableName].update(this.model);
        } else {
            this.uow[this.tableName].insert(this.model);
        }
=======
        this.repository.save(this.model).subscribe(
            data => console.log(data),
            error => alert(error)
        );
>>>>>>> 566b2d35ef086f0889404870eb5bcd5b58e2d63b

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

<<<<<<< HEAD
        this.uow[this.tableName].delete(model.id);
=======
        this.repository.delete(model.id).subscribe(
            data => console.log('delete action', data),
            error => alert(error)
        );
>>>>>>> 566b2d35ef086f0889404870eb5bcd5b58e2d63b
        this.get();
    }

    private handleEvent(event: Event) {
        if (event) {
            event.preventDefault();
        }
    }

}
