import React from 'react';
import styled from 'styled-components'

export type TableRowProps = React.PropsWithChildren<{}>

const StyledTableRow = styled.td``;

export function TableRow(props: TableRowProps) {
    return (
        <StyledTableRow>
            {props.children}
        </StyledTableRow>
    )
}
