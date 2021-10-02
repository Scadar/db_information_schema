import React, { useEffect, useMemo, useState } from "react";

import ReactFlow, { ArrowHeadType, Edge, MiniMap, Node, ReactFlowProvider } from "react-flow-renderer";

import FlowTableNode from "./FlowTableNode";
import { useAppSelector } from "../../hooks/useAppSelector";
import { blue } from "@material-ui/core/colors";
import TreeDiagram from "../../utils/dbDiagram/TreeDiagram";
import FlowFinder from "./FlowFinder";
import { getLayoutedElements } from "../../utils/dbDiagram/dagre";
import FlowCrutch from "./FlowCrutch";
import { Button, Grid, makeStyles, TextareaAutosize, useTheme } from "@material-ui/core";
import { ForeignKey, InformationSchema } from "../../models/databaseDiagram";
import { schema } from "../../testData/schema";
import FlowControl from "./FlowControl";
import JsonTypeDialog from "./JsonTypeDialog";

const nodeTypes = {
    selectorNode: FlowTableNode
};

type ConcatFk = {
    fk: ForeignKey,
    label: string
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "100vh"
    },
    mt: {
        marginTop: theme.spacing(2)
    },
    modalButton: {
        position: "fixed",
        top: 8,
        right: 8
    }
}));

const concatenateForeignKeys = (fks: ForeignKey[] | null): ConcatFk[] => {

    if (!fks) {
        return [];
    }
    const result: ConcatFk[] = [];
    fks.forEach(fk => {
        const index = findConcatFkIndex(fk, result);
        if (index !== -1) {
            result[index].label = result[index].label + "; " + getEdgeLabel(fk.columnNames, fk.foreignColumnNames);
        } else {
            result.push({ fk, label: getEdgeLabel(fk.columnNames, fk.foreignColumnNames) });
        }
    });
    return result;
};

const findConcatFkIndex = (fk: ForeignKey, array: ConcatFk[]): number => {
    return array.findIndex(value => value.fk.foreignTableName === fk.foreignTableName && value.fk.tableName === fk.tableName);
};

const getEdgeLabel = (columnNames: string[], foreignColumnNames: string[]): string => {
    return `${ columnNames.map(column => column.toString()) } : ${ foreignColumnNames.map(column => column.toString()) }`;
};

const isInformationSchema = (value: any): value is InformationSchema => {
    const schema = value as InformationSchema;
    if (
        schema.schemaName &&
        schema.tables
    ) {
        const table = schema.tables[0];
        if (
            table &&
            table.name &&
            table.columnsSchema &&
            table.primaryKey
        ) {
            const column = table.columnsSchema[0];
            if (
                column &&
                column.columnName &&
                column.dataType &&
                column.nullable !== null &&
                column.nullable !== undefined &&
                column.tableName &&
                column.updatable !== null &&
                column.updatable !== undefined
            ) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
};

const checkJsonSchema = (strJson: string): InformationSchema | null => {
    try {
        const json = JSON.parse(strJson);
        if (isInformationSchema(json)) {
            return json;
        } else {
            return null;
        }
    } catch (e) {
        return null;
    }
};

const DatabaseDiagram = () => {
    const classes = useStyles();

    const { cords } = useAppSelector(state => state.flowReducer);
    const [jsonSchema, setJsonSchema] = useState<InformationSchema | null>(null);
    const [textarea, setTextarea] = useState<string>("");
    const [jsonIsValid, setJsonIsValid] = useState(false);
    const [elements, setElements] = useState<Array<Node | Edge>>([]);
    const [openModal, setOpenModal] = useState(false);
    const theme = useTheme();

    const getElements = useMemo(() => {
        let tableSchema: Array<Node> = [];
        let edgeSchema: Array<Edge> = [];
        const treeDiagram = new TreeDiagram();

        if (jsonSchema) {
            //Создание схемы ребер и заполнение treeDiagram нодами и связями между нодами
            jsonSchema.tables.forEach(table => {
                const node = treeDiagram.addNode(table.name, table);
                if (table.foreignKeys) {
                    edgeSchema = edgeSchema
                    .concat(
                        concatenateForeignKeys(table.foreignKeys)
                        .map(fkWithLabel => {
                            const label = fkWithLabel.label;
                            const fk = fkWithLabel.fk;
                            const newNode = treeDiagram.addNode(
                                fk.foreignTableName,
                                TreeDiagram.getTableDataByTableName(fk.foreignTableName, jsonSchema.tables)!
                            );
                            node.addChild(newNode);
                            newNode.addParent(node);
                            return {
                                id: fk.name,
                                source: fk.tableName,
                                target: fk.foreignTableName,
                                style: { stroke: blue[800] },
                                labelShowBg: false,
                                labelStyle: { fill: "#fff", paddingInline: 50 },
                                type: "default",
                                label,
                                arrowHeadType: ArrowHeadType.ArrowClosed
                            };
                        }));
                }
            });

            //batch - совокупность всех нод, которые связаны между собой
            const batches = treeDiagram.getBatches();
            // Заполнение схемы нод
            batches.forEach(nodeArray => {
                tableSchema = tableSchema.concat(
                    nodeArray.map(node => {
                        return {
                            id: node.data.name,
                            data: node.data,
                            type: "selectorNode",
                            position: { x: 0, y: 0 }
                        };
                    })
                );
            });

        }

        return [...tableSchema, ...edgeSchema];
    }, [jsonSchema]);

    useEffect(() => {
        if (cords) {
            setElements(getLayoutedElements(getElements, cords));
        } else {
            setElements(getElements);
        }
    }, [jsonSchema, cords, getElements]);

    const useTestJson = () => {
        setJsonSchema(schema);
        setJsonIsValid(true);
    };

    const useCustomJson = () => {
        const infSchema = checkJsonSchema(textarea);
        if (infSchema) {
            setJsonSchema(infSchema);
        }
    };

    const clear = () => {
        setJsonIsValid(false);
        setTextarea("");
        setJsonSchema(null);
    };

    useEffect(() => {
        const infSchema = checkJsonSchema(textarea);
        if (infSchema) {
            setJsonIsValid(true);
        } else {
            setJsonIsValid(false);
        }
    }, [textarea]);

    if (!jsonSchema || !jsonIsValid) {
        return (
            <Grid
                container
                direction={ "column" }
                justifyContent={ "center" }
                alignItems={ "center" }
                style={ { height: "100vh" } }
            >
                <Button variant="outlined" className={ classes.modalButton } onClick={() => setOpenModal(true)}>
                    ТИП JSON`а
                </Button>
                <Grid item className={ classes.mt }>
                    <TextareaAutosize value={ textarea } onChange={ e => setTextarea(e.target.value) } minRows={ 30 }
                                      maxRows={ 30 } style={ { width: 700 } }/>
                </Grid>
                JSON валидный? { jsonIsValid ? "Да" : "Нет" }
                <Grid item className={ classes.mt }>
                    <Button onClick={ useCustomJson } variant={ "outlined" } disabled={ !jsonIsValid }>Использовать
                        кастомный JSON</Button>
                </Grid>
                <Grid item className={ classes.mt }>
                    <Button onClick={ useTestJson } variant="outlined">Использовать тестовый JSON</Button>
                </Grid>
                <JsonTypeDialog open={ openModal } onClose={ () => setOpenModal(false) }/>
            </Grid>
        );
    }

    return (
        <div className={ classes.root }>
            <ReactFlowProvider>
                <ReactFlow
                    elements={ elements }
                    nodeTypes={ nodeTypes }
                    nodesConnectable={ false }
                    elementsSelectable={ false }
                    style={ { background: theme.palette.flow.background } }
                    arrowHeadColor={ theme.palette.flow.arrowColor }
                >
                    <MiniMap
                        style={ { background: theme.palette.flow.background } }
                    />
                </ReactFlow>
                <FlowFinder/>
                <FlowCrutch/>
                <FlowControl clear={ clear }/>
            </ReactFlowProvider>
        </div>

    );
};
export default DatabaseDiagram;