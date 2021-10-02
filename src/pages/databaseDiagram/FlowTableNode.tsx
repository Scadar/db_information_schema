import React, { FC, memo, useMemo } from "react";
import { ColumnSchema, ForeignKey, PrimaryKey, TableSchema } from "../../models/databaseDiagram";
import { Divider, makeStyles, Paper, Typography } from "@material-ui/core";
import { FaTable } from "react-icons/all";
import TableField from "./TableField";
import { Handle, Position } from "react-flow-renderer";

type FlowTableNodeProps = {
    data: TableSchema
}

const useStyles = makeStyles((theme) => ({
    root: {
        "&:hover": {
            boxShadow: theme.shadows[3]
        },
        backgroundColor: theme.palette.flow.tableColor,
        color: "#fff"
    },
    tableName: {
        textAlign: "center",
        display: "flex",
        alignItems: "center"
    },
    divider: {
        backgroundColor: "#8e8e8e",
        width: "100%"
    },
    columns: {
        padding: "4px 10px 4px 10px"
    },
    tableIcon: {
        marginRight: theme.spacing(1)
    },
    checkbox: {
        float: "right"
    },
    tableHeader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "4px 0 4px 0"
    }
}));

type GetFieldProps = {
    pksFields: Array<ColumnSchema>
    otherFields: Array<ColumnSchema>
}

const getFields = (columns: Array<ColumnSchema>, pk: PrimaryKey): GetFieldProps => {
    const pksFields: Array<ColumnSchema> = [];
    const otherFields: Array<ColumnSchema> = [];
    columns.forEach(column => {
        if (pk.columnNames.includes(column.columnName)) {
            pksFields.push(column);
        } else {
            otherFields.push(column);
        }
    });
    return {
        pksFields,
        otherFields
    };
};

const isFK = (column: ColumnSchema, fks: Array<ForeignKey> | null): boolean => {
    if (!fks) {
        return false;
    }
    return fks.map(fk => fk.columnNames)
              .flat()
              .includes(column.columnName);
};

const FlowTableNode: FC<FlowTableNodeProps> = memo(({ data }: FlowTableNodeProps) => {

    const fields = useMemo(() => {
        return getFields(data.columnsSchema, data.primaryKey);
    }, [data.columnsSchema, data.primaryKey]);

    const classes = useStyles();

    return (
        <Paper className={ classes.root }>

            {/*Название таблицы*/ }
            <div className={ classes.tableHeader }>
                <Typography variant="h6" className={ classes.tableName }>
                    <FaTable className={ classes.tableIcon }/>
                    { data.name }
                </Typography>
            </div>


            <Divider className={ classes.divider }/>

            {/*Первичные ключи*/ }
            <div className={ classes.columns }>
                {
                    fields.pksFields.map(column => {
                        return (
                            <TableField
                                key={ column.columnName }
                                column={ column }
                                type={ isFK(column, data.foreignKeys) ? "pkAndFk" : "pk" }
                            />
                        );
                    })
                }
            </div>

            <Divider className={ classes.divider }/>

            {/*Все остальные поля*/ }
            <div className={ classes.columns }>
                {
                    fields.otherFields.map(column => {
                        return (
                            <TableField
                                key={ column.columnName }
                                column={ column }
                                type={ isFK(column, data.foreignKeys) ? "fk" : "default" }
                            />
                        );
                    })
                }
            </div>

            <Handle
                type="source"
                position={ Position.Top }
                style={ { visibility: "hidden" } }
            />
            <Handle
                type="target"
                position={ Position.Bottom }
                style={ { visibility: "hidden" } }
            />
        </Paper>
    );
});

export default FlowTableNode;