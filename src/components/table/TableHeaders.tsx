import React, {useContext} from 'react';
import {TableHeader} from './TableHeader';
import {TableContext} from './context/TableContext';

export function TableHeaders() {
    const {columns, sortAsc, sortedBy} = useContext(TableContext);

    return (
        <>
            {Object.keys(columns).map((key: string) => {
                const config = columns[key];

                return (
                    <TableHeader
                        key={key}
                        onClick={() => sortAsc(key)}
                        colWidth={config.width}
                        highlight={sortedBy === key}>
                        {config.name}
                    </TableHeader>
                )
            })}
        </>
    )
}
