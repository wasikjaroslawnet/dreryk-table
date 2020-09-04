import React from 'react';
import styled from 'styled-components'

type TableHeaderProps = React.PropsWithChildren<{
    /**
     * Event handler for user click event on table header.
     */
    readonly onClick?: (e: React.MouseEvent<HTMLTableHeaderCellElement>) => void;
    /**
     * The width of the column expressed in pixels.
     */
    readonly colWidth: number;
}>

type StyledTableHeaderProps = Pick<TableHeaderProps, 'colWidth'>;

const StyledTableHeader = styled.th<StyledTableHeaderProps>`
  min-width: ${props => `${props.colWidth}px`};
  max-width: ${props => `${props.colWidth}px`};
  overflow-wrap: anywhere;
`;

export function TableHeader(props: TableHeaderProps) {
    if (props.colWidth <= 0) {
        throw new Error(`The column width must be a positive numerical value. (${props.colWidth})`);
    }

    return (
        <StyledTableHeader colWidth={props.colWidth} onClick={props.onClick}>
            {props.children}
        </StyledTableHeader>
    )
}
