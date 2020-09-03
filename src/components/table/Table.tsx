import React from 'react';
import styled from 'styled-components'

export type TableProps = {
    readonly columnsConfig: any;
    readonly data: any;
}

const StyledTable = styled.table``;

export function Table(props: TableProps) {
    return (
        <StyledTable>
            <tr>
                <th>Header</th>
            </tr>
            <tr>
                <td>Row</td>
            </tr>
        </StyledTable>
    )
}
