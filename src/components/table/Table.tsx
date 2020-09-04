import React, {useMemo} from 'react';
import styled from 'styled-components'
import {TableRow} from './TableRow';
import {TableHeaders} from './TableHeaders';
import {TableDataRows} from './TableDataRows';
import {TableColumnsConfiguration} from '../../types/TableColumnsConfiguration';
import {TableData} from '../../types/TableData';

type TableProps<T extends TableColumnsConfiguration, U extends TableData<T>[]> = {
    readonly columnsConfig: T;
    readonly data: U;
}

const StyledTable = styled.table`
  background-color: white;
`;

export function Table<T extends TableColumnsConfiguration, U extends TableData<T>[]>(props: TableProps<T, U>) {
    const columns = useMemo(() =>
        Object.keys(props.columnsConfig),
        [props.columnsConfig]
    );

    return (
        <StyledTable>
            <thead>
            <TableRow>
                <TableHeaders columnsConfig={props.columnsConfig} />
            </TableRow>
            </thead>
            <tbody>
                <TableDataRows columns={columns} data={props.data} />
            </tbody>
        </StyledTable>
    )
}
