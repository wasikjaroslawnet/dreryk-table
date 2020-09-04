import React, {useContext} from 'react';
import {TableDataRow} from './TableDataRow';
import {TableContext} from './context/TableContext';

export function TableDataRows() {
    const {data} = useContext(TableContext);

    return (
        <>
            {data.map((cellData, i) => {
                return (
                    <TableDataRow key={i} index={i} data={cellData} />
                )
            })}
        </>
    )
}
