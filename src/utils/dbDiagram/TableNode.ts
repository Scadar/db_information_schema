import { TableSchema } from "../../models/databaseDiagram";

export default class TableNode {
    private readonly _name: string;
    private readonly _children: Array<TableNode>;
    private readonly _parents: Array<TableNode>;
    private readonly _data: TableSchema;
    private _isInBatch: boolean;

    constructor(name: string, data: TableSchema) {
        this._name = name;
        this._data = data;
        this._children = new Array<TableNode>();
        this._parents = new Array<TableNode>();
        this._isInBatch = false;
    }
    public addChild(child: TableNode) {
        this._children.push(child);
    }

    public addParent(child: TableNode) {
        this._parents.push(child);
    }

    get name(): string {
        return this._name;
    }

    get data(): TableSchema {
        return this._data;
    }

    get children(): Array<TableNode> {
        return this._children;
    }

    get parents(): Array<TableNode> {
        return this._parents;
    }

    get isInBatch(): boolean {
        return this._isInBatch;
    }

    set isInBatch(value: boolean) {
        this._isInBatch = value;
    }
}