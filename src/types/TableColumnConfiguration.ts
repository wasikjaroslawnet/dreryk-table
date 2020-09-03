/**
 * Describes configurations of a single column.
 */
export type TableColumnConfiguration = {
    /**
     * The name displayed in the column header.
     */
    readonly name: string;

    /**
     * Defines the column width in pixels.
     * The width should be a positive number.
     */
    readonly width: number;
}
