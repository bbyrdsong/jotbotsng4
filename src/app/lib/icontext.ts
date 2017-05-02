export interface IContext {
    set(tableName?: string): any[];
    saveChanges(): void;
}
