import React, {useCallback, useMemo, useState} from 'react';
import {createContext, PropsWithChildren} from 'react';
import {TableProps} from '../TableProps';
import {TableColumnsConfiguration} from "../types/TableColumnsConfiguration";
import {TableData} from "../types/TableData";

type TableContextValue =
    TableProps<TableColumnsConfiguration, TableData<TableColumnsConfiguration>[]>
    & {
    sortAsc: (columnId: string) => void;
    sortedBy: string | null;
}

export const TableContext = createContext<TableContextValue>(null as any);

type TableContextProviderProps = PropsWithChildren<TableProps<TableColumnsConfiguration, TableData<TableColumnsConfiguration>[]>>;

const sortAscAlphabet = (columnId: string) => (a: any, b: any) => {
    if (!b[columnId]) {
        return -1;
    }

    if (!a[columnId] && b[columnId]) {
        return 1;
    }

    if (a[columnId] && !b[columnId]) {
        return 0;
    }

    return a[columnId].toLocaleString()
        .localeCompare(b[columnId].toLocaleString())
};

export function TableContextProvider(props: TableContextProviderProps) {
    const [data, setData] = useState(props.data);
    const [sortedBy, setSortedBy] = useState<string | null>(null);

    const sortAsc = useCallback((columnId: string) => {
        setData(prevData => prevData.sort(sortAscAlphabet(columnId)));
        setSortedBy(columnId);
        console.log(data);
    }, [setData, setSortedBy]);

    return (
        <TableContext.Provider value={{
            data,
            columns: props.columns,
            sortAsc,
            sortedBy
        }}>
            {props.children}
        </TableContext.Provider>
    )

}
