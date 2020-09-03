import React from 'react';
import styled from 'styled-components'
import {TableHeader} from './TableHeader';
import {TableRow} from './TableRow';
import {TableColumnsConfiguration} from '../../types/TableColumnsConfiguration';
import {TableCell} from './TableCell';

export type TableProps = {
    readonly columnsConfig: TableColumnsConfiguration;
    readonly data: any;
}

const StyledTable = styled.table``;

export function Table(props: TableProps) {
    return (
        <StyledTable>
            <thead>
                <TableRow>
                    <TableHeader colWidth={100} onClick={() => console.log('sort')}>Header</TableHeader>
                    <TableHeader colWidth={200} onClick={() => console.log('sort')}>Header 2</TableHeader>
                </TableRow>
            </thead>
            <tbody>
                <TableRow>
                    <TableCell>Cell 1</TableCell>
                    <TableCell>Cell 2</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Cell 1</TableCell>
                    <TableCell>Cell 2</TableCell>
                </TableRow>
            </tbody>
        </StyledTable>
    )
}
