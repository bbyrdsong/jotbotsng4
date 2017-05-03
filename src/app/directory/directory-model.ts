import { BaseModel } from '../lib/base-model';
export class DirectoryModel extends BaseModel {
    constructor(public name: string, public description,
        public email: string, public phone: string,
        public group: string, public twitter: string,
        public facebook: string) {
            super();
        }
}
