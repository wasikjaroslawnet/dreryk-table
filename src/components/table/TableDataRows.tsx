import React, {useContext, useMemo} from 'react';
import {TableDataRow} from './TableDataRow';
import {TableContext} from './context/TableContext';

export function TableDataRows() {
    const {data} = useContext(TableContext);

    return (
        <>
            {data.map((cellData) => {
                return (
                    <TableDataRow data={cellData} />
                )
            })}
        </>
    )
}
