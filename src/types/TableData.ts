/**
 * The type of data type the column takes.
 */
export type TableData<T> = {
    /**
     * In this case the type is analogous to partial type.
     * In order to force the data for each field to be required,
     * remove undefined from union type.
     */
    readonly [key in keyof T]: string;
}
