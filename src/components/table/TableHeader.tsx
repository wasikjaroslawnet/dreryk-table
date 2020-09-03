import React from 'react';
import styled from 'styled-components'

export type TableHeaderProps = React.PropsWithChildren<{
    readonly onClick: (e: React.MouseEvent<HTMLTableHeaderCellElement>) => void;
}>

const StyledTableHeader = styled.th``;

export function TableHeader(props: TableHeaderProps) {
    return (
        <StyledTableHeader onClick={props.onClick}>
            {props.children}
        </StyledTableHeader>
    )
}
