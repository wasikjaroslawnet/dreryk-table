import React from 'react';
import styled from 'styled-components'
import {TableRow} from './TableRow';
import {TableHeaders} from './TableHeaders';
import {TableDataRows} from './TableDataRows';
import {TableColumnsConfiguration} from '../../types/TableColumnsConfiguration';
import {TableData} from '../../types/TableData';

export type TableProps<T extends TableData> = {
    readonly columnsConfig: TableColumnsConfiguration;
    readonly data: TableData[];
}

const StyledTable = styled.table``;

export function Table<T extends TableData>(props: TableProps<T>) {
    return (
        <StyledTable>
            <thead>
                <TableRow>
                    <TableHeaders columnsConfig={props.columnsConfig} />
                </TableRow>
            </thead>
            <tbody>
                <TableDataRows data={props.data} />
            </tbody>
        </StyledTable>
    )
}
