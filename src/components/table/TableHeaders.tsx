import React from 'react';
import {TableColumnsConfiguration} from '../../types/TableColumnsConfiguration';
import {TableHeader} from './TableHeader';

type TableHeadersProps = {
    readonly columnsConfig: TableColumnsConfiguration;
}

export function TableHeaders(props: TableHeadersProps) {
    return (
        <>
            {props.columnsConfig.map((config) => (
                <TableHeader key={config.name} onClick={() => console.log('sort')}
                             colWidth={config.width}>
                    {config.name}
                </TableHeader>
            ))}
        </>
    )
}
