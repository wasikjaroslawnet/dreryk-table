import {MutableRefObject, useLayoutEffect, useState} from 'react';
import {useFindPrimaryTable} from './useFindPrimaryTable';

export function usePrimaryTableRowHeight(ref: MutableRefObject<HTMLElement | null>, index: number) {
    const [height, setHeight] = useState<number>(0);
    const primaryTable = useFindPrimaryTable(ref);

    useLayoutEffect(() => {
        if (primaryTable) {
            const theadElement = primaryTable.getElementsByTagName('tr').item(index);
            if (theadElement) {
                setHeight(theadElement.offsetHeight);
            }
        }
    }, [primaryTable]);

    return height;
}
