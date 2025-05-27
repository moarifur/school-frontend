import {
    Table as ShadTable,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
} from "@/components/ui/table";

/**
 * Reusable table component
 * @param {Object} props - Component props
 * @param {Array} props.columns - Column definitions
 * @param {Function} props.renderRow - Function to render each row
 * @param {Array} props.data - Data to display
 * @returns {JSX.Element} Data table
 */
const Table = ({ columns, renderRow, data }) => {
    return (
        <ShadTable className="mt-4">
            <TableHeader>
                <TableRow className="hover:bg-transparent">
                    {columns.map((col) => (
                        <TableHead key={col.accessor} className={col.className}>
                            {col.header}
                        </TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>{data.map((item) => renderRow(item))}</TableBody>
        </ShadTable>
    );
};

export default Table;