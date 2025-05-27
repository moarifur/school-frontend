import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Pagination component for navigating through table pages
 * @returns {JSX.Element} Pagination controls with page numbers
 */
const Pagination = () => {
    return (
        <div className="p-4 flex items-center justify-between">
            <Button variant="outline" disabled className="gap-1">
                <ChevronLeft className="h-4 w-4" />
                Prev
            </Button>

            <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                    1
                </Button>
                <Button variant="outline" size="sm">
                    2
                </Button>
                <Button variant="outline" size="sm">
                    3
                </Button>
                <span className="mx-1">...</span>
                <Button variant="outline" size="sm">
                    10
                </Button>
            </div>

            <Button variant="outline" className="gap-1">
                Next
                <ChevronRight className="h-4 w-4" />
            </Button>
        </div>
    );
};

export default Pagination;