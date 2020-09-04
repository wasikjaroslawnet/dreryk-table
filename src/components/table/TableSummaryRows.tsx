import React, {useContext} from 'react';
import {TableRow} from './TableRow';
import {TableCell} from './TableCell';
import {TableContext} from './context/TableContext';
import {sumDollars} from "./stategies/summary/sumDollars";

export function TableSummaryRows() {
    const {data} = useContext(TableContext);

    return (
        <tbody>
            {data.map((row) => {
                const values = Object.values(row);

                return (
                    <TableRow>
                        <TableCell>
                            {sumDollars(values)}
                        </TableCell>
                    </TableRow>
                )
            })}
        </tbody>
    )
}
