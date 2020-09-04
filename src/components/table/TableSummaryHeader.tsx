import React, {useRef} from 'react';
import styled from 'styled-components'
import {usePrimaryTableRowHeight} from './hooks/usePrimaryTableRowHeight';
import {TableRow} from "./TableRow";

type TableSummaryHeaderProps = React.PropsWithChildren<{
    /**
     * The width of the column expressed in pixels.
     */
    readonly cellWidth: number;
}>

type StyledTableHeadProps = {
    readonly cellHeight: number;
}

const StyledTableHead = styled.thead<StyledTableHeadProps>`
  height: ${props => `${props.cellHeight}px`};
  max-height: ${props => `${props.cellHeight}px`};
`

const StyledTableSummaryHeader = styled.th<TableSummaryHeaderProps>`
  min-width: ${props => `${props.cellWidth}px`};
  max-width: ${props => `${props.cellWidth}px`};
  border-bottom: 2px solid black;
`;

export function TableSummaryHeader(props: TableSummaryHeaderProps) {
    const ref = useRef<HTMLTableHeaderCellElement>(null);
    const cellHeight = usePrimaryTableRowHeight(ref, 0);

    if (props.cellWidth <= 0) {
        throw new Error(`The column width must be a positive numerical value. (${props.cellWidth})`);
    }

    return (
        <StyledTableHead cellHeight={cellHeight}>
            <TableRow>
                <StyledTableSummaryHeader cellWidth={props.cellWidth} ref={ref}>
                    {props.children}
                </StyledTableSummaryHeader>
            </TableRow>
        </StyledTableHead>

    )
}
