import React from 'react';
import {TableData} from '../../types/TableData';
import {TableRow} from './TableRow';
import {TableCell} from './TableCell';

export type TableDataRowProps = {
    readonly columns: ReadonlyArray<string>;
    readonly data: TableData<any>;
}

export function TableDataRow(props: TableDataRowProps) {
    return (
        <TableRow>
            <>
                {props.columns.map((column) => {
                    const value = props.data[column];

                    return (
                        <TableCell key={column}>
                            {value}
                        </TableCell>
                    )
                })}
            </>
        </TableRow>
    )
}
