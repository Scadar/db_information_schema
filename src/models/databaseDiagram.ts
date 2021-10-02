export type ColumnSchema = {
    tableSchema: string
    tableName: string
    columnName: string
    intervalType: string | null
    ordinalPosition: string | null
    columnDefault: string | null
    nullable: boolean
    updatable: boolean
    dataType: string
    characterMaximumLength: number | null
    characterOctetLength: number | null
    numericPrecision: number | null
    numericPrecisionRadix: number | null
    numericScale: number | null
    datetimePrecision: number | null
    intervalPrecision: number | null
}

export type ForeignKey = {
    name: string
    tableSchema: string
    tableName: string
    columnNames: string[]
    foreignTableSchema: string
    foreignTableName: string
    foreignColumnNames: string[]
}

export type PrimaryKey = {
    name: string
    tableName: string
    columnNames: string[]
}

export type TableSchema = {
    name: string
    columnsSchema: Array<ColumnSchema>
    primaryKey: PrimaryKey
    foreignKeys: Array<ForeignKey> | null
    layer?: number
}

export type InformationSchema = {
    schemaName: string
    tables: Array<TableSchema>
}