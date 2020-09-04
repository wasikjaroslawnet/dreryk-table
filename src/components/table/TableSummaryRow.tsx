import React, {useRef} from 'react';
import {TableRow} from './TableRow';
import {usePrimaryTableRowHeight} from './hooks/usePrimaryTableRowHeight';

type TableSummaryRowProps = React.PropsWithChildren<{
    index: number;
}>;

export function TableSummaryRow(props: TableSummaryRowProps) {
    const ref = useRef<HTMLElement>(null);
    const rowHeight = usePrimaryTableRowHeight(ref, props.index + 1);

    return (
        <TableRow ref={ref} height={rowHeight}>
            {props.children}
        </TableRow>
    )
}
