import React, {useMemo} from 'react';
import styled from 'styled-components'
import {TableRow} from './TableRow';
import {TableHeaders} from './TableHeaders';
import {TableDataRows} from './TableDataRows';
import {TableColumnsConfiguration} from './types/TableColumnsConfiguration';
import {TableData} from './types/TableData';
import {TableCell} from "./TableCell";
import {TableSummaryHeader} from "./TableSummaryHeader";

type TableProps<T extends TableColumnsConfiguration, U extends TableData<T>[]> = {
    readonly columnsConfig: T;
    readonly data: U;
}

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

    const columns = useMemo(() =>
            Object.keys(props.columnsConfig),
        [props.columnsConfig]
    );

    return (
        <StyledTableContainer>
            <StyledTable display={'inline-block'}>
                <thead>
                <TableRow>
                    <TableHeaders columnsConfig={props.columnsConfig}/>
                </TableRow>
                </thead>
                <tbody>
                <TableDataRows columns={columns} data={props.data}/>
                </tbody>
            </StyledTable>
            <StyledTable>
                <TableSummaryHeader cellWidth={200}>
                    Summary
                </TableSummaryHeader>
                <tbody>
                {props.data.map((row) => {
                    return (
                        <TableRow>
                            <TableCell>
                                {Object.values(row).filter(v => Boolean(v)).length}
                            </TableCell>
                        </TableRow>
                    )
                })}
                </tbody>
            </StyledTable>
        </StyledTableContainer>
    )
}
