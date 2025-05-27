import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

/**
 * Search input component for tables
 * @returns {JSX.Element} Search input with icon
 */
const TableSearch = () => {
    return (
        <div className="relative w-full md:w-auto">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
                type="text"
                placeholder="Search..."
                className="w-full md:w-[200px] pl-8"
            />
        </div>
    );
};

export default TableSearch;