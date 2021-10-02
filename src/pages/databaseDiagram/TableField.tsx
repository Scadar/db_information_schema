import React, { FC } from "react";
import { makeStyles } from "@material-ui/core";
import { red, yellow } from "@material-ui/core/colors";
import IconWithDot from "../../components/UI/IconWithDot";
import { MdVpnKey, RiDatabase2Line } from "react-icons/all";
import { ColumnSchema } from "../../models/databaseDiagram";

const useStyles = makeStyles((theme) => ({
    field: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "8px 0 8px 0"
    },
    dataTypeName: {
        marginLeft: theme.spacing(2),
        color: "#8e8e8e"
    },
    foreignKey: {
        color: theme.palette.primary.light,
        marginRight: theme.spacing(1)
    },
    primaryKey: {
        color: yellow[500],
        marginRight: theme.spacing(1)
    },
    fieldName: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    fieldIcon: {
        color: red[400],
        marginRight: theme.spacing(1)
    },
    pkAndFkKey: {
        marginRight: theme.spacing(1)
    },
    nameAndType: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexGrow: 1
    }
}));

type TableFieldProps = {
    column: ColumnSchema
    type: "pk" | "fk" | "pkAndFk" | "default"
}

const reformatDataType = (column: ColumnSchema) => {
    if (column.dataType.includes("timestamp")) {
        return "timestamp";
    }
    if (column.dataType.includes("character varying")) {
        return `varchar(${ column.characterMaximumLength })`;
    }
    if (column.dataType.includes("character")) {
        return `char(${ column.characterMaximumLength })`;
    }
    if (column.dataType.includes("numeric")) {
        return `numeric(${ column.numericPrecision },${ column.numericScale })`;
    }
    return column.dataType;
};

const TableField: FC<TableFieldProps> = ({ column, type }) => {
    const classes = useStyles();
    return (
        <div className={ classes.field }>
            <div className={ classes.nameAndType }>
                <div className={ classes.fieldName }>
                    {
                        type === "pkAndFk"
                            ?
                            <IconWithDot withDot={ !column.nullable }>
                                {/*TODO вынести иконку с градиентом в компонент*/ }
                                <svg width="0" height="0">
                                    <linearGradient id="key-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0" stopColor="#ffeb3b"/>
                                        <stop offset="65%" stopColor="#7986cb"/>
                                        <stop offset="100%" stopColor="#7986cb"/>
                                    </linearGradient>
                                </svg>
                                <MdVpnKey style={ { fill: "url(#key-gradient)" } } className={ classes.pkAndFkKey }/>
                            </IconWithDot>
                            :
                            type === "pk"
                                ?
                                <IconWithDot withDot={ !column.nullable }>
                                    <MdVpnKey className={ classes.primaryKey }/>
                                </IconWithDot>
                                : type === "fk"
                                    ?
                                    <IconWithDot withDot={ !column.nullable }>
                                        <MdVpnKey className={ classes.foreignKey }/>
                                    </IconWithDot>
                                    :
                                    <IconWithDot withDot={ !column.nullable }>
                                        <RiDatabase2Line className={ classes.fieldIcon }/>
                                    </IconWithDot>
                    }
                    <div>
                        { column.columnName }
                    </div>
                </div>
                <div className={ classes.dataTypeName }>
                    { reformatDataType(column) }
                </div>
            </div>
        </div>
    );
};

export default TableField;