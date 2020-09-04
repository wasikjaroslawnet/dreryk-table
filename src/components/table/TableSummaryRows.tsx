import React, {useContext} from 'react';
import {TableCell} from './TableCell';
import {TableContext} from './context/TableContext';
import {sumDollars} from './stategies/summary/sumDollars';
import {TableSummaryRow} from './TableSummaryRow';

export function TableSummaryRows() {
    const {data} = useContext(TableContext);

    return (
        <tbody>
            {data.map((row, i) => {
                const values = Object.values(row);

                return (
                    <TableSummaryRow key={i} index={i}>
                        <TableCell>
                            {sumDollars(values)}
                        </TableCell>
                    </TableSummaryRow>
                )
            })}
        </tbody>
    )
}
