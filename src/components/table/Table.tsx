import React from 'react';
import styled from 'styled-components'
import {TableRow} from './TableRow';
import {TableColumnsConfiguration} from '../../types/TableColumnsConfiguration';
import {TableCell} from './TableCell';
import {TableHeaders} from './TableHeaders';

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
                    <TableHeaders columnsConfig={props.columnsConfig} />
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
