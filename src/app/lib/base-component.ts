import { BaseModel } from './base-model';
import { IRepository } from './irepository';
import { OnInit } from '@angular/core/core';
import { Observable } from 'rxjs/Rx';

export class BaseComponent<T extends BaseModel> implements OnInit {
    dbSet: any[];
    model: any;
    showForm = false;

    constructor(private repository: IRepository<T>, public sectionTitle: string) { }

    ngOnInit(): void {
        this.model = {};
        this.get();
    }

    get(): void {
        this.repository.getAll().subscribe(
            data => this.dbSet = data,
            error => alert(error)
        );
    }

    save(event: Event): void {
        this.handleEvent(event);
        this.repository.save(this.model).subscribe(
            data => console.log(data),
            error => alert(error)
        );

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

        if (confirm('Are you sure you want to delete this record?')) {
            this.repository.delete(model.id).subscribe(
                data => console.log('delete action', data),
                error => alert(error)
            );
            this.get();
        }
    }

    private handleEvent(event: Event) {
        if (event) {
            event.preventDefault();
        }
    }

}
