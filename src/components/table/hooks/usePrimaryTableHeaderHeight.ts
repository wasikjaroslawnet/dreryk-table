import {MutableRefObject, useLayoutEffect, useState} from 'react';
import {useFindPrimaryTable} from './useFindPrimaryTable';

export function usePrimaryTableHeaderHeight(ref: MutableRefObject<HTMLTableHeaderCellElement | null>) {
    const [height, setHeight] = useState<number>(0);
    const primaryTable = useFindPrimaryTable(ref);

    useLayoutEffect(() => {
        console.log('hit0')
        if (primaryTable) {
            console.log('hit1');
            const theadElement = primaryTable.getElementsByTagName('tr').item(0);
            if (theadElement) {
                console.log('hit2', theadElement.offsetHeight)
                setHeight(theadElement.offsetHeight);
            }
        }
    }, [primaryTable]);

    return height;
}
