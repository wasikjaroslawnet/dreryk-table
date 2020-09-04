import React, {useContext} from 'react';
import {TableData} from './types/TableData';
import {TableRow} from './TableRow';
import {TableCell} from './TableCell';
import {TableContext} from "./context/TableContext";
import {TableColumnsConfiguration} from "./types/TableColumnsConfiguration";

type TableDataRowProps = {
    data: TableData<TableColumnsConfiguration>
};

export function TableDataRow(props: TableDataRowProps) {
    const {columns, sortedBy} = useContext(TableContext);

    return (
        <TableRow>
            <>
                {Object.keys(columns).map((key: string) => {
                    const value = props.data![key];

                    return (
                        <TableCell key={key} highlight={key === sortedBy}>
                            {value}
                        </TableCell>
                    )
                })}
            </>
        </TableRow>
    )
}
