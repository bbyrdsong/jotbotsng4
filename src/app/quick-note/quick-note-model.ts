import { BaseModel } from '../lib/base-model';
export class QuickNoteModel extends BaseModel {
    constructor(public name: string, public description: string) {
        super();
    }
}
