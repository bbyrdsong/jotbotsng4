import { IAuditable } from './iauditable';
import { IIdentity } from './iidentity';

export class BaseModel implements IIdentity, IAuditable {
    id: number;
    name: string;
    description: string;
    createdOn: Date;
    modifiedOn: Date;
}
