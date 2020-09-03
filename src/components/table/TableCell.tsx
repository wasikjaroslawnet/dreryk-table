import React from 'react';
import styled from 'styled-components'

export type TableCellProps = React.PropsWithChildren<{}>

const StyledTableCell = styled.td``;

export function TableCell(props: TableCellProps) {
    return (
        <StyledTableCell>
            {props.children}
        </StyledTableCell>
    )
}
