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
    readonly highlight: boolean;
}>

const StyledTableHeader = styled.th<TableHeaderProps>`
  min-width: ${props => `${props.colWidth}px`};
  width: ${props => `${props.colWidth}px`};
  max-width: ${props => `${props.colWidth}px`};
  //noinspection CssInvalidPropertyValue Works with chrome/firefox/edge
  overflow-wrap: anywhere;
  cursor: pointer;
  background-color: ${props => props.highlight ? 'lightgray' : 'inherit'};
  border-bottom: 2px solid black;
`;

export function TableHeader(props: TableHeaderProps) {
    if (props.colWidth <= 0) {
        throw new Error(`The column width must be a positive numerical value. (${props.colWidth})`);
    }

    return (
        <StyledTableHeader {...props}>
            {props.children}
        </StyledTableHeader>
    )
}
