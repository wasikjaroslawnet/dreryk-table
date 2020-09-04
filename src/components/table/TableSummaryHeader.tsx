import React, {useRef} from 'react';
import styled from 'styled-components'
import {usePrimaryTableHeaderHeight} from "./hooks/usePrimaryTableHeaderHeight";
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
  display: block;
  height: ${props => `${props.cellHeight}px`};
  max-height: ${props => `${props.cellHeight}px`};
`

const StyledTableSummaryHeader = styled.th<TableSummaryHeaderProps>`
  min-width: ${props => `${props.cellWidth}px`};
  max-width: ${props => `${props.cellWidth}px`};
`;

export function TableSummaryHeader(props: TableSummaryHeaderProps) {
    const ref = useRef<HTMLTableHeaderCellElement>(null);
    const cellHeight = usePrimaryTableHeaderHeight(ref);

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
