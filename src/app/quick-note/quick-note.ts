import { BaseModel } from '../lib/base-model';
export class QuickNote extends BaseModel {
    constructor(public name: string, public description: string) {
        super();
    }
}
