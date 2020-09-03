import React from 'react';
import {TableData} from '../../types/TableData';
import {TableRow} from './TableRow';
import {TableCell} from './TableCell';

export type TableDataRowProps = {
    readonly data: TableData;
}

export function TableDataRow(props: TableDataRowProps) {
    return (
        <TableRow>
            <>
                {Object.keys(props.data).map((key) => {
                    const value = props.data[key];

                    return (
                        <TableCell key={key}>
                            {value}
                        </TableCell>
                    )
                })}
            </>
            </TableRow>
    )
}
