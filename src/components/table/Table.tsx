import React, {useMemo} from 'react';
import styled from 'styled-components'
import {TableRow} from './TableRow';
import {TableHeaders} from './TableHeaders';
import {TableDataRows} from './TableDataRows';
import {TableColumnsConfiguration} from './types/TableColumnsConfiguration';
import {TableData} from './types/TableData';
import {TableSummaryHeader} from './TableSummaryHeader';
import {TableProps} from './TableProps';
import {TableContextProvider} from './context/TableContext';
import {TableSummaryRows} from './TableSummaryRows';

type StyledTableProps = {
    readonly display?: 'inline-block';
}

const StyledTable = styled.table<StyledTableProps>`
  display: ${props => props.display || 'inline-table'};
  background-color: white;
  overflow-x: auto;
`;

const StyledTableContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export function Table<T extends TableColumnsConfiguration, U extends TableData<T>[]>(props: TableProps<T, U>) {
    const {columns, data} = props;
    return (
        <TableContextProvider columns={columns} data={data}>
            <StyledTableContainer>
                <StyledTable display={'inline-block'}>
                    <thead>
                    <TableRow>
                        <TableHeaders />
                    </TableRow>
                    </thead>
                    <tbody>
                    <TableDataRows />
                    </tbody>
                </StyledTable>
                <StyledTable>
                    <TableSummaryHeader cellWidth={200}>
                        Summary
                    </TableSummaryHeader>
                    <TableSummaryRows />
                </StyledTable>
            </StyledTableContainer>
        </TableContextProvider>
    )
}


