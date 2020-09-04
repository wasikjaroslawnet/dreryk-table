import React from 'react';
import {TableData} from "./types/TableData";
import {TableDataRow} from "./TableDataRow";

type TableDataRowsProps = {
    readonly columns: Array<string>;
    readonly data: Array<TableData<any>>;
}

export function TableDataRows(props: TableDataRowsProps) {
    return (
        <>
            {props.data.map((data) => {
                return (
                    <TableDataRow columns={props.columns} data={data} />
                )
            })}
        </>
    )
}
