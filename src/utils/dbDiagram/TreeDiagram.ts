import { TableSchema } from "../../models/databaseDiagram";
import TableNode from "./TableNode";

export default class TreeDiagram {

    private readonly allNodes: Array<TableNode>;

    constructor() {
        this.allNodes = [];
    }

    public getSortedNodes(): Array<TableNode> {
        const result: Array<TableNode> = [];

        this.allNodes.forEach(node => {
            if (!node.isInBatch) {
                this.getReverseSortedNodes(node, result);
            }
        });

        return result;
    }

    private getReverseSortedNodes(node: TableNode, array: Array<TableNode>) {
        node.isInBatch = true;
        this.addIfNotIn(node, array);

        const allRelations = node.children
                                 .concat(node.parents);
        allRelations.forEach(node => {
            if (!node.isInBatch) {
                this.getReverseSortedNodes(node, array);
            }
        });
    }

    //Получить все деревья
    public getBatches(): Array<Array<TableNode>> {
        return this.createBatches();
    }

    public static getTableDataByTableName = (tableName: string, tables: TableSchema[]): TableSchema | undefined => {
        return tables.find(table => table.name === tableName);
    };

    //Создание всех деревьев
    private createBatches = (): Array<Array<TableNode>> => {
        const result: Array<Array<TableNode>> = [];

        this.allNodes.forEach(node => {
            if (!node.isInBatch) {
                result.push(this.getNodeBatch(node));
            }
        });

        return result;
    };

    private addIfNotIn(node: TableNode, array: Array<TableNode>): boolean {
        let result = false;
        if (!this.arrayIncludeNode(array, node)) {
            array.push(node);
            result = true;
        }
        return result;
    }

    public getNodeBatch(node: TableNode): Array<TableNode> {
        const result: Array<TableNode> = [];
        this.getReverseNodeBatch(node, result);
        return result;
    }

    private getReverseNodeBatch(node: TableNode, array: Array<TableNode>) {
        node.isInBatch = true;
        this.addIfNotIn(node, array);
        const allRelations = node.children
                                 .concat(node.parents);
        allRelations.forEach(node => {
            if (!node.isInBatch) {
                this.getReverseNodeBatch(node, array);
            }
        });
    }

    private arrayIncludeNode = (array: TableNode[], node: TableNode): boolean => {
        return Boolean(array.find(value => value.name === node.name));
    };

    private getTableNodeByName = (nodeName: string): TableNode | undefined => {
        return this.allNodes.find(value => value.name === nodeName);
    };

    //Если ноды нет - то создать. Если есть - получить
    addNode(nodeName: string, data: TableSchema): TableNode {
        let node = this.getTableNodeByName(nodeName);
        if (!node) {
            node = new TableNode(data.name, data);
            this.allNodes.push(node);
        }
        return node;
    }
}