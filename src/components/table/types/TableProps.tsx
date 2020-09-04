import {TableColumnsConfiguration} from "./TableColumnsConfiguration";
import {TableData} from "./TableData";

export type TableProps<T extends TableColumnsConfiguration, U extends TableData<T>[]> = {
    readonly columns: T;
    readonly data: U;
}
