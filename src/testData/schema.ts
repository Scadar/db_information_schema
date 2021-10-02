import { InformationSchema } from "../models/databaseDiagram";

export const schema: InformationSchema = {
    "schemaName": "public",
    "tables": [
        {
            "name": "income",
            "columnsSchema": [
                {
                    "tableSchema": "public",
                    "tableName": "income",
                    "columnName": "point",
                    "ordinalPosition": "2",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "smallint",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 16,
                    "numericPrecisionRadix": 2,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "income",
                    "columnName": "code",
                    "ordinalPosition": "1",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "integer",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 32,
                    "numericPrecisionRadix": 2,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "income",
                    "columnName": "date",
                    "ordinalPosition": "3",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "timestamp without time zone",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 0,
                    "numericPrecisionRadix": 0,
                    "numericScale": 0,
                    "datetimePrecision": 6,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "income",
                    "columnName": "inc",
                    "ordinalPosition": "4",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "numeric",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 12,
                    "numericPrecisionRadix": 10,
                    "numericScale": 2,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                }
            ],
            "primaryKey": {
                "name": "pk_income",
                "tableName": "income",
                "columnNames": [
                    "code"
                ]
            },
            "foreignKeys": null
        },
        {
            "name": "product",
            "columnsSchema": [
                {
                    "tableSchema": "public",
                    "tableName": "product",
                    "columnName": "model",
                    "ordinalPosition": "2",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "character varying",
                    "characterMaximumLength": 50,
                    "characterOctetLength": 200,
                    "numericPrecision": 0,
                    "numericPrecisionRadix": 0,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "product",
                    "columnName": "type",
                    "ordinalPosition": "3",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "character varying",
                    "characterMaximumLength": 50,
                    "characterOctetLength": 200,
                    "numericPrecision": 0,
                    "numericPrecisionRadix": 0,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "product",
                    "columnName": "maker",
                    "ordinalPosition": "1",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "character varying",
                    "characterMaximumLength": 10,
                    "characterOctetLength": 40,
                    "numericPrecision": 0,
                    "numericPrecisionRadix": 0,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                }
            ],
            "primaryKey": {
                "name": "pk_product",
                "tableName": "product",
                "columnNames": [
                    "model"
                ]
            },
            "foreignKeys": null
        },
        {
            "name": "utb",
            "columnsSchema": [
                {
                    "tableSchema": "public",
                    "tableName": "utb",
                    "columnName": "b_vol",
                    "ordinalPosition": "4",
                    "columnDefault": null,
                    "nullable": true,
                    "dataType": "smallint",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 16,
                    "numericPrecisionRadix": 2,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "utb",
                    "columnName": "b_q_id",
                    "ordinalPosition": "2",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "integer",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 32,
                    "numericPrecisionRadix": 2,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "utb",
                    "columnName": "b_v_id",
                    "ordinalPosition": "3",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "integer",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 32,
                    "numericPrecisionRadix": 2,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "utb",
                    "columnName": "b_datetime",
                    "ordinalPosition": "1",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "timestamp without time zone",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 0,
                    "numericPrecisionRadix": 0,
                    "numericScale": 0,
                    "datetimePrecision": 6,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                }
            ],
            "primaryKey": {
                "name": "pk_utb",
                "tableName": "utb",
                "columnNames": [
                    "b_datetime",
                    "b_q_id",
                    "b_v_id"
                ]
            },
            "foreignKeys": [
                {
                    "name": "fk_utb_utq",
                    "tableSchema": "public",
                    "tableName": "utb",
                    "columnNames": [
                        "b_q_id"
                    ],
                    "foreignTableSchema": "public",
                    "foreignTableName": "utq",
                    "foreignColumnNames": [
                        "q_id"
                    ]
                },
                {
                    "name": "fk_utb_utv",
                    "tableSchema": "public",
                    "tableName": "utb",
                    "columnNames": [
                        "b_v_id"
                    ],
                    "foreignTableSchema": "public",
                    "foreignTableName": "utv",
                    "foreignColumnNames": [
                        "v_id"
                    ]
                }
            ]
        },
        {
            "name": "outcome_o",
            "columnsSchema": [
                {
                    "tableSchema": "public",
                    "tableName": "outcome_o",
                    "columnName": "point",
                    "ordinalPosition": "1",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "smallint",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 16,
                    "numericPrecisionRadix": 2,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "outcome_o",
                    "columnName": "date",
                    "ordinalPosition": "2",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "timestamp without time zone",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 0,
                    "numericPrecisionRadix": 0,
                    "numericScale": 0,
                    "datetimePrecision": 6,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "outcome_o",
                    "columnName": "out",
                    "ordinalPosition": "3",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "numeric",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 12,
                    "numericPrecisionRadix": 10,
                    "numericScale": 2,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                }
            ],
            "primaryKey": {
                "name": "pk_outcome_o",
                "tableName": "outcome_o",
                "columnNames": [
                    "date",
                    "point"
                ]
            },
            "foreignKeys": null
        },
        {
            "name": "printer",
            "columnsSchema": [
                {
                    "tableSchema": "public",
                    "tableName": "printer",
                    "columnName": "code",
                    "ordinalPosition": "1",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "integer",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 32,
                    "numericPrecisionRadix": 2,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "printer",
                    "columnName": "price",
                    "ordinalPosition": "5",
                    "columnDefault": null,
                    "nullable": true,
                    "dataType": "numeric",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 12,
                    "numericPrecisionRadix": 10,
                    "numericScale": 2,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "printer",
                    "columnName": "color",
                    "ordinalPosition": "3",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "character",
                    "characterMaximumLength": 1,
                    "characterOctetLength": 4,
                    "numericPrecision": 0,
                    "numericPrecisionRadix": 0,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "printer",
                    "columnName": "model",
                    "ordinalPosition": "2",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "character varying",
                    "characterMaximumLength": 50,
                    "characterOctetLength": 200,
                    "numericPrecision": 0,
                    "numericPrecisionRadix": 0,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "printer",
                    "columnName": "type",
                    "ordinalPosition": "4",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "character varying",
                    "characterMaximumLength": 10,
                    "characterOctetLength": 40,
                    "numericPrecision": 0,
                    "numericPrecisionRadix": 0,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                }
            ],
            "primaryKey": {
                "name": "pk_printer",
                "tableName": "printer",
                "columnNames": [
                    "code"
                ]
            },
            "foreignKeys": [
                {
                    "name": "fk_printer_product",
                    "tableSchema": "public",
                    "tableName": "printer",
                    "columnNames": [
                        "model"
                    ],
                    "foreignTableSchema": "public",
                    "foreignTableName": "product",
                    "foreignColumnNames": [
                        "model"
                    ]
                }
            ]
        },
        {
            "name": "classes",
            "columnsSchema": [
                {
                    "tableSchema": "public",
                    "tableName": "classes",
                    "columnName": "numguns",
                    "ordinalPosition": "4",
                    "columnDefault": null,
                    "nullable": true,
                    "dataType": "smallint",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 16,
                    "numericPrecisionRadix": 2,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "classes",
                    "columnName": "displacement",
                    "ordinalPosition": "6",
                    "columnDefault": null,
                    "nullable": true,
                    "dataType": "integer",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 32,
                    "numericPrecisionRadix": 2,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "classes",
                    "columnName": "bore",
                    "ordinalPosition": "5",
                    "columnDefault": null,
                    "nullable": true,
                    "dataType": "real",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 24,
                    "numericPrecisionRadix": 2,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "classes",
                    "columnName": "class",
                    "ordinalPosition": "1",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "character varying",
                    "characterMaximumLength": 50,
                    "characterOctetLength": 200,
                    "numericPrecision": 0,
                    "numericPrecisionRadix": 0,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "classes",
                    "columnName": "type",
                    "ordinalPosition": "2",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "character varying",
                    "characterMaximumLength": 2,
                    "characterOctetLength": 8,
                    "numericPrecision": 0,
                    "numericPrecisionRadix": 0,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "classes",
                    "columnName": "country",
                    "ordinalPosition": "3",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "character varying",
                    "characterMaximumLength": 20,
                    "characterOctetLength": 80,
                    "numericPrecision": 0,
                    "numericPrecisionRadix": 0,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                }
            ],
            "primaryKey": {
                "name": "pk_classes",
                "tableName": "classes",
                "columnNames": [
                    "class"
                ]
            },
            "foreignKeys": null
        },
        {
            "name": "laptop",
            "columnsSchema": [
                {
                    "tableSchema": "public",
                    "tableName": "laptop",
                    "columnName": "screen",
                    "ordinalPosition": "7",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "smallint",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 16,
                    "numericPrecisionRadix": 2,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "laptop",
                    "columnName": "ram",
                    "ordinalPosition": "4",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "smallint",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 16,
                    "numericPrecisionRadix": 2,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "laptop",
                    "columnName": "speed",
                    "ordinalPosition": "3",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "smallint",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 16,
                    "numericPrecisionRadix": 2,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "laptop",
                    "columnName": "code",
                    "ordinalPosition": "1",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "integer",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 32,
                    "numericPrecisionRadix": 2,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "laptop",
                    "columnName": "hd",
                    "ordinalPosition": "5",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "real",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 24,
                    "numericPrecisionRadix": 2,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "laptop",
                    "columnName": "price",
                    "ordinalPosition": "6",
                    "columnDefault": null,
                    "nullable": true,
                    "dataType": "numeric",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 12,
                    "numericPrecisionRadix": 10,
                    "numericScale": 2,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "laptop",
                    "columnName": "model",
                    "ordinalPosition": "2",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "character varying",
                    "characterMaximumLength": 50,
                    "characterOctetLength": 200,
                    "numericPrecision": 0,
                    "numericPrecisionRadix": 0,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                }
            ],
            "primaryKey": {
                "name": "pk_laptop",
                "tableName": "laptop",
                "columnNames": [
                    "code"
                ]
            },
            "foreignKeys": [
                {
                    "name": "fk_laptop_product",
                    "tableSchema": "public",
                    "tableName": "laptop",
                    "columnNames": [
                        "model"
                    ],
                    "foreignTableSchema": "public",
                    "foreignTableName": "product",
                    "foreignColumnNames": [
                        "model"
                    ]
                }
            ]
        },
        {
            "name": "pass_in_trip",
            "columnsSchema": [
                {
                    "tableSchema": "public",
                    "tableName": "pass_in_trip",
                    "columnName": "trip_no",
                    "ordinalPosition": "1",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "integer",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 32,
                    "numericPrecisionRadix": 2,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "pass_in_trip",
                    "columnName": "id_psg",
                    "ordinalPosition": "3",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "integer",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 32,
                    "numericPrecisionRadix": 2,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "pass_in_trip",
                    "columnName": "date",
                    "ordinalPosition": "2",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "timestamp without time zone",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 0,
                    "numericPrecisionRadix": 0,
                    "numericScale": 0,
                    "datetimePrecision": 6,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "pass_in_trip",
                    "columnName": "place",
                    "ordinalPosition": "4",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "character",
                    "characterMaximumLength": 10,
                    "characterOctetLength": 40,
                    "numericPrecision": 0,
                    "numericPrecisionRadix": 0,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                }
            ],
            "primaryKey": {
                "name": "pk_pt",
                "tableName": "pass_in_trip",
                "columnNames": [
                    "date",
                    "id_psg",
                    "trip_no"
                ]
            },
            "foreignKeys": [
                {
                    "name": "fk_pass_in_trip_passenger",
                    "tableSchema": "public",
                    "tableName": "pass_in_trip",
                    "columnNames": [
                        "id_psg"
                    ],
                    "foreignTableSchema": "public",
                    "foreignTableName": "passenger",
                    "foreignColumnNames": [
                        "id_psg"
                    ]
                },
                {
                    "name": "fk_pass_in_trip_trip",
                    "tableSchema": "public",
                    "tableName": "pass_in_trip",
                    "columnNames": [
                        "trip_no"
                    ],
                    "foreignTableSchema": "public",
                    "foreignTableName": "trip",
                    "foreignColumnNames": [
                        "trip_no"
                    ]
                }
            ]
        },
        {
            "name": "ships",
            "columnsSchema": [
                {
                    "tableSchema": "public",
                    "tableName": "ships",
                    "columnName": "launched",
                    "ordinalPosition": "3",
                    "columnDefault": null,
                    "nullable": true,
                    "dataType": "smallint",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 16,
                    "numericPrecisionRadix": 2,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "ships",
                    "columnName": "name",
                    "ordinalPosition": "1",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "character varying",
                    "characterMaximumLength": 50,
                    "characterOctetLength": 200,
                    "numericPrecision": 0,
                    "numericPrecisionRadix": 0,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "ships",
                    "columnName": "class",
                    "ordinalPosition": "2",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "character varying",
                    "characterMaximumLength": 50,
                    "characterOctetLength": 200,
                    "numericPrecision": 0,
                    "numericPrecisionRadix": 0,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                }
            ],
            "primaryKey": {
                "name": "pk_ships",
                "tableName": "ships",
                "columnNames": [
                    "name"
                ]
            },
            "foreignKeys": [
                {
                    "name": "fk_ships_classes",
                    "tableSchema": "public",
                    "tableName": "ships",
                    "columnNames": [
                        "class"
                    ],
                    "foreignTableSchema": "public",
                    "foreignTableName": "classes",
                    "foreignColumnNames": [
                        "class"
                    ]
                }
            ]
        },
        {
            "name": "trip",
            "columnsSchema": [
                {
                    "tableSchema": "public",
                    "tableName": "trip",
                    "columnName": "id_comp",
                    "ordinalPosition": "2",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "integer",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 32,
                    "numericPrecisionRadix": 2,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "trip",
                    "columnName": "trip_no",
                    "ordinalPosition": "1",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "integer",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 32,
                    "numericPrecisionRadix": 2,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "trip",
                    "columnName": "time_out",
                    "ordinalPosition": "6",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "timestamp without time zone",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 0,
                    "numericPrecisionRadix": 0,
                    "numericScale": 0,
                    "datetimePrecision": 6,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "trip",
                    "columnName": "time_in",
                    "ordinalPosition": "7",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "timestamp without time zone",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 0,
                    "numericPrecisionRadix": 0,
                    "numericScale": 0,
                    "datetimePrecision": 6,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "trip",
                    "columnName": "town_from",
                    "ordinalPosition": "4",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "character",
                    "characterMaximumLength": 25,
                    "characterOctetLength": 100,
                    "numericPrecision": 0,
                    "numericPrecisionRadix": 0,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "trip",
                    "columnName": "plane",
                    "ordinalPosition": "3",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "character",
                    "characterMaximumLength": 10,
                    "characterOctetLength": 40,
                    "numericPrecision": 0,
                    "numericPrecisionRadix": 0,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "trip",
                    "columnName": "town_to",
                    "ordinalPosition": "5",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "character",
                    "characterMaximumLength": 25,
                    "characterOctetLength": 100,
                    "numericPrecision": 0,
                    "numericPrecisionRadix": 0,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                }
            ],
            "primaryKey": {
                "name": "pk_t",
                "tableName": "trip",
                "columnNames": [
                    "trip_no"
                ]
            },
            "foreignKeys": [
                {
                    "name": "fk_trip_company",
                    "tableSchema": "public",
                    "tableName": "trip",
                    "columnNames": [
                        "id_comp"
                    ],
                    "foreignTableSchema": "public",
                    "foreignTableName": "company",
                    "foreignColumnNames": [
                        "id_comp"
                    ]
                }
            ]
        },
        {
            "name": "pc",
            "columnsSchema": [
                {
                    "tableSchema": "public",
                    "tableName": "pc",
                    "columnName": "speed",
                    "ordinalPosition": "3",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "smallint",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 16,
                    "numericPrecisionRadix": 2,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "pc",
                    "columnName": "ram",
                    "ordinalPosition": "4",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "smallint",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 16,
                    "numericPrecisionRadix": 2,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "pc",
                    "columnName": "code",
                    "ordinalPosition": "1",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "integer",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 32,
                    "numericPrecisionRadix": 2,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "pc",
                    "columnName": "hd",
                    "ordinalPosition": "5",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "real",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 24,
                    "numericPrecisionRadix": 2,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "pc",
                    "columnName": "price",
                    "ordinalPosition": "7",
                    "columnDefault": null,
                    "nullable": true,
                    "dataType": "numeric",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 12,
                    "numericPrecisionRadix": 10,
                    "numericScale": 2,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "pc",
                    "columnName": "model",
                    "ordinalPosition": "2",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "character varying",
                    "characterMaximumLength": 50,
                    "characterOctetLength": 200,
                    "numericPrecision": 0,
                    "numericPrecisionRadix": 0,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "pc",
                    "columnName": "cd",
                    "ordinalPosition": "6",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "character varying",
                    "characterMaximumLength": 10,
                    "characterOctetLength": 40,
                    "numericPrecision": 0,
                    "numericPrecisionRadix": 0,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                }
            ],
            "primaryKey": {
                "name": "pk_pc",
                "tableName": "pc",
                "columnNames": [
                    "code"
                ]
            },
            "foreignKeys": [
                {
                    "name": "fk_pc_product",
                    "tableSchema": "public",
                    "tableName": "pc",
                    "columnNames": [
                        "model"
                    ],
                    "foreignTableSchema": "public",
                    "foreignTableName": "product",
                    "foreignColumnNames": [
                        "model"
                    ]
                }
            ]
        },
        {
            "name": "utq",
            "columnsSchema": [
                {
                    "tableSchema": "public",
                    "tableName": "utq",
                    "columnName": "q_id",
                    "ordinalPosition": "1",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "integer",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 32,
                    "numericPrecisionRadix": 2,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "utq",
                    "columnName": "q_name",
                    "ordinalPosition": "2",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "character varying",
                    "characterMaximumLength": 35,
                    "characterOctetLength": 140,
                    "numericPrecision": 0,
                    "numericPrecisionRadix": 0,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                }
            ],
            "primaryKey": {
                "name": "pk_utq",
                "tableName": "utq",
                "columnNames": [
                    "q_id"
                ]
            },
            "foreignKeys": null
        },
        {
            "name": "passenger",
            "columnsSchema": [
                {
                    "tableSchema": "public",
                    "tableName": "passenger",
                    "columnName": "id_psg",
                    "ordinalPosition": "1",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "integer",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 32,
                    "numericPrecisionRadix": 2,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "passenger",
                    "columnName": "name",
                    "ordinalPosition": "2",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "character",
                    "characterMaximumLength": 20,
                    "characterOctetLength": 80,
                    "numericPrecision": 0,
                    "numericPrecisionRadix": 0,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                }
            ],
            "primaryKey": {
                "name": "pk_psg",
                "tableName": "passenger",
                "columnNames": [
                    "id_psg"
                ]
            },
            "foreignKeys": null
        },
        {
            "name": "outcomes",
            "columnsSchema": [
                {
                    "tableSchema": "public",
                    "tableName": "outcomes",
                    "columnName": "ship",
                    "ordinalPosition": "1",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "character varying",
                    "characterMaximumLength": 50,
                    "characterOctetLength": 200,
                    "numericPrecision": 0,
                    "numericPrecisionRadix": 0,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "outcomes",
                    "columnName": "battle",
                    "ordinalPosition": "2",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "character varying",
                    "characterMaximumLength": 20,
                    "characterOctetLength": 80,
                    "numericPrecision": 0,
                    "numericPrecisionRadix": 0,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "outcomes",
                    "columnName": "result",
                    "ordinalPosition": "3",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "character varying",
                    "characterMaximumLength": 10,
                    "characterOctetLength": 40,
                    "numericPrecision": 0,
                    "numericPrecisionRadix": 0,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                }
            ],
            "primaryKey": {
                "name": "pk_outcomes",
                "tableName": "outcomes",
                "columnNames": [
                    "battle",
                    "ship"
                ]
            },
            "foreignKeys": [
                {
                    "name": "fk_outcomes_battles",
                    "tableSchema": "public",
                    "tableName": "outcomes",
                    "columnNames": [
                        "battle"
                    ],
                    "foreignTableSchema": "public",
                    "foreignTableName": "battles",
                    "foreignColumnNames": [
                        "name"
                    ]
                }
            ]
        },
        {
            "name": "utv",
            "columnsSchema": [
                {
                    "tableSchema": "public",
                    "tableName": "utv",
                    "columnName": "v_id",
                    "ordinalPosition": "1",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "integer",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 32,
                    "numericPrecisionRadix": 2,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "utv",
                    "columnName": "v_name",
                    "ordinalPosition": "2",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "character varying",
                    "characterMaximumLength": 35,
                    "characterOctetLength": 140,
                    "numericPrecision": 0,
                    "numericPrecisionRadix": 0,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "utv",
                    "columnName": "v_color",
                    "ordinalPosition": "3",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "character",
                    "characterMaximumLength": 1,
                    "characterOctetLength": 4,
                    "numericPrecision": 0,
                    "numericPrecisionRadix": 0,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                }
            ],
            "primaryKey": {
                "name": "pk_utv",
                "tableName": "utv",
                "columnNames": [
                    "v_id"
                ]
            },
            "foreignKeys": null
        },
        {
            "name": "flyway_schema_history",
            "columnsSchema": [
                {
                    "tableSchema": "public",
                    "tableName": "flyway_schema_history",
                    "columnName": "installed_rank",
                    "ordinalPosition": "1",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "integer",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 32,
                    "numericPrecisionRadix": 2,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "flyway_schema_history",
                    "columnName": "checksum",
                    "ordinalPosition": "6",
                    "columnDefault": null,
                    "nullable": true,
                    "dataType": "integer",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 32,
                    "numericPrecisionRadix": 2,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "flyway_schema_history",
                    "columnName": "execution_time",
                    "ordinalPosition": "9",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "integer",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 32,
                    "numericPrecisionRadix": 2,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "flyway_schema_history",
                    "columnName": "success",
                    "ordinalPosition": "10",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "boolean",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 0,
                    "numericPrecisionRadix": 0,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "flyway_schema_history",
                    "columnName": "installed_on",
                    "ordinalPosition": "8",
                    "columnDefault": "now()",
                    "nullable": false,
                    "dataType": "timestamp without time zone",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 0,
                    "numericPrecisionRadix": 0,
                    "numericScale": 0,
                    "datetimePrecision": 6,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "flyway_schema_history",
                    "columnName": "installed_by",
                    "ordinalPosition": "7",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "character varying",
                    "characterMaximumLength": 100,
                    "characterOctetLength": 400,
                    "numericPrecision": 0,
                    "numericPrecisionRadix": 0,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "flyway_schema_history",
                    "columnName": "script",
                    "ordinalPosition": "5",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "character varying",
                    "characterMaximumLength": 1000,
                    "characterOctetLength": 4000,
                    "numericPrecision": 0,
                    "numericPrecisionRadix": 0,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "flyway_schema_history",
                    "columnName": "type",
                    "ordinalPosition": "4",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "character varying",
                    "characterMaximumLength": 20,
                    "characterOctetLength": 80,
                    "numericPrecision": 0,
                    "numericPrecisionRadix": 0,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "flyway_schema_history",
                    "columnName": "description",
                    "ordinalPosition": "3",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "character varying",
                    "characterMaximumLength": 200,
                    "characterOctetLength": 800,
                    "numericPrecision": 0,
                    "numericPrecisionRadix": 0,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "flyway_schema_history",
                    "columnName": "version",
                    "ordinalPosition": "2",
                    "columnDefault": null,
                    "nullable": true,
                    "dataType": "character varying",
                    "characterMaximumLength": 50,
                    "characterOctetLength": 200,
                    "numericPrecision": 0,
                    "numericPrecisionRadix": 0,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                }
            ],
            "primaryKey": {
                "name": "flyway_schema_history_pk",
                "tableName": "flyway_schema_history",
                "columnNames": [
                    "installed_rank"
                ]
            },
            "foreignKeys": null
        },
        {
            "name": "company",
            "columnsSchema": [
                {
                    "tableSchema": "public",
                    "tableName": "company",
                    "columnName": "id_comp",
                    "ordinalPosition": "1",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "integer",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 32,
                    "numericPrecisionRadix": 2,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "company",
                    "columnName": "name",
                    "ordinalPosition": "2",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "character",
                    "characterMaximumLength": 10,
                    "characterOctetLength": 40,
                    "numericPrecision": 0,
                    "numericPrecisionRadix": 0,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                }
            ],
            "primaryKey": {
                "name": "pk2",
                "tableName": "company",
                "columnNames": [
                    "id_comp"
                ]
            },
            "foreignKeys": null
        },
        {
            "name": "battles",
            "columnsSchema": [
                {
                    "tableSchema": "public",
                    "tableName": "battles",
                    "columnName": "date",
                    "ordinalPosition": "2",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "timestamp without time zone",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 0,
                    "numericPrecisionRadix": 0,
                    "numericScale": 0,
                    "datetimePrecision": 6,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "battles",
                    "columnName": "name",
                    "ordinalPosition": "1",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "character varying",
                    "characterMaximumLength": 20,
                    "characterOctetLength": 80,
                    "numericPrecision": 0,
                    "numericPrecisionRadix": 0,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                }
            ],
            "primaryKey": {
                "name": "pk_battles",
                "tableName": "battles",
                "columnNames": [
                    "name"
                ]
            },
            "foreignKeys": null
        },
        {
            "name": "outcome",
            "columnsSchema": [
                {
                    "tableSchema": "public",
                    "tableName": "outcome",
                    "columnName": "point",
                    "ordinalPosition": "2",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "smallint",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 16,
                    "numericPrecisionRadix": 2,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "outcome",
                    "columnName": "code",
                    "ordinalPosition": "1",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "integer",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 32,
                    "numericPrecisionRadix": 2,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "outcome",
                    "columnName": "date",
                    "ordinalPosition": "3",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "timestamp without time zone",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 0,
                    "numericPrecisionRadix": 0,
                    "numericScale": 0,
                    "datetimePrecision": 6,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "outcome",
                    "columnName": "out",
                    "ordinalPosition": "4",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "numeric",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 12,
                    "numericPrecisionRadix": 10,
                    "numericScale": 2,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                }
            ],
            "primaryKey": {
                "name": "pk_outcome",
                "tableName": "outcome",
                "columnNames": [
                    "code"
                ]
            },
            "foreignKeys": null
        },
        {
            "name": "income_o",
            "columnsSchema": [
                {
                    "tableSchema": "public",
                    "tableName": "income_o",
                    "columnName": "point",
                    "ordinalPosition": "1",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "smallint",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 16,
                    "numericPrecisionRadix": 2,
                    "numericScale": 0,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "income_o",
                    "columnName": "date",
                    "ordinalPosition": "2",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "timestamp without time zone",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 0,
                    "numericPrecisionRadix": 0,
                    "numericScale": 0,
                    "datetimePrecision": 6,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                },
                {
                    "tableSchema": "public",
                    "tableName": "income_o",
                    "columnName": "inc",
                    "ordinalPosition": "3",
                    "columnDefault": null,
                    "nullable": false,
                    "dataType": "numeric",
                    "characterMaximumLength": 0,
                    "characterOctetLength": 0,
                    "numericPrecision": 12,
                    "numericPrecisionRadix": 10,
                    "numericScale": 2,
                    "datetimePrecision": 0,
                    "intervalType": null,
                    "intervalPrecision": 0,
                    "updatable": true
                }
            ],
            "primaryKey": {
                "name": "pk_income_o",
                "tableName": "income_o",
                "columnNames": [
                    "date",
                    "point"
                ]
            },
            "foreignKeys": null
        }
    ]
}