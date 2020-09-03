import React from 'react';
import {TableColumnsConfiguration} from '../../types/TableColumnsConfiguration';
import {TableHeader} from './TableHeader';

type TableHeadersProps = {
    readonly columnsConfig: TableColumnsConfiguration;
}

export function TableHeaders(props: TableHeadersProps) {
    return (
        <>
            {Object.keys(props.columnsConfig).map((key) => {
                const config = props.columnsConfig[key];

                return (
                    <TableHeader key={key} onClick={() => console.log('sort')}
                                 colWidth={config.width}>
                        {config.name}
                    </TableHeader>
                )
            })}
        </>
    )
}
