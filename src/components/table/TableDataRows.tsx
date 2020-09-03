import React from 'react';
import {TableData} from "../../types/TableData";
import {TableDataRow} from "./TableDataRow";

type TableDataRowsProps = {
    readonly data: TableData[];
}

export function TableDataRows(props: TableDataRowsProps) {
    return (
        <>
            {props.data.map((data) => {
                return (
                    <TableDataRow data={data} />
                )
            })}
        </>
    )
}
