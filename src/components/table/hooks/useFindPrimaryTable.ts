import {MutableRefObject, useLayoutEffect, useState} from "react";

export function useFindPrimaryTable(ref: MutableRefObject<HTMLElement | null>) {
    const [primaryTable, setPrimaryTable] = useState<HTMLTableElement | null>(null);

    useLayoutEffect(() => {
        if(!ref.current) {
            return;
        }

        let parentTable: HTMLElement = ref.current.parentElement!;
        while(!(parentTable instanceof HTMLTableElement)) {
            parentTable = parentTable.parentElement!;
        }

        setPrimaryTable(parentTable.previousSibling as HTMLTableElement);

    }, [ref]);

    return primaryTable;
}
