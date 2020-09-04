import React from 'react';
import styled from 'styled-components'

type TableRowProps = React.PropsWithChildren<{
    height?: number;
}>

const StyledTableRow = styled.tr<TableRowProps>`
  height: ${props => props.height ? `${props.height}px` : 'inherit'};
`;

export const TableRow = React.forwardRef<HTMLElement, TableRowProps>((props, ref) => {
    return (
        <StyledTableRow ref={ref as any} height={props.height}>
            {props.children}
        </StyledTableRow>
    )
});
