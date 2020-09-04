import {TableColumnsConfiguration} from "./types/TableColumnsConfiguration";
import {TableData} from "./types/TableData";

export type TableProps<T extends TableColumnsConfiguration, U extends TableData<T>[]> = {
    readonly columns: T;
    readonly data: U;
}
