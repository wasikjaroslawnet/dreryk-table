import React from 'react';
import styled from 'styled-components'
import {TableHeader} from "./TableHeader";

export type TableProps = {
    readonly columnsConfig: any;
    readonly data: any;
}

const StyledTable = styled.table``;

export function Table(props: TableProps) {
    return (
        <StyledTable>
            <tr>
                <TableHeader onClick={() => console.log('sort')}>Header</TableHeader>
            </tr>
            <tr>
                <td>Row</td>
            </tr>
        </StyledTable>
    )
}
