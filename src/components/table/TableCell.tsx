import React from 'react';
import styled from 'styled-components'

export type TableCellProps = React.PropsWithChildren<{
    readonly highlight?: boolean;
}>

const StyledTableCell = styled.td<TableCellProps>`
  background-color: ${props => props.highlight ? 'lightgray' : 'inherit'};
`;

export function TableCell(props: TableCellProps) {
    return (
        <StyledTableCell {...props}>
            {props.children}
        </StyledTableCell>
    )
}
