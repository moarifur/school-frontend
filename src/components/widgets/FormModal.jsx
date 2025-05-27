"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Edit, Eye } from "lucide-react";

// Lazy-loaded form components
const TeacherForm = dynamic(() => import("./forms/TeacherForm"), {
    loading: () => <p>Loading form...</p>,
});
const StudentForm = dynamic(() => import("./forms/StudentForm"), {
    loading: () => <p>Loading form...</p>,
});

// Form component mapping
const forms = {
    teacher: (type, data) => <TeacherForm type={type} data={data} />,
    student: (type, data) => <StudentForm type={type} data={data} />,
};

/**
 * Modal component for CRUD operations
 * @param {Object} props - Component props
 * @param {string} props.table - Table/entity type
 * @param {string} props.type - Action type (create/update/delete)
 * @param {Object} [props.data] - Data for update operations
 * @param {number} [props.id] - ID for delete operations
 * @returns {JSX.Element} Modal dialog with form
 */
const FormModal = ({ table, type, data, id }) => {
    const [open, setOpen] = useState(false);

    const getButtonVariant = () => {
        switch (type) {
            case "create":
                return "default";
            case "update":
                return "secondary";
            case "delete":
                return "destructive";
            default:
                return "default";
        }
    };

    const getButtonIcon = () => {
        switch (type) {
            case "create":
                return <Plus className="h-4 w-4" />;
            case "update":
                return <Edit className="h-4 w-4" />;
            case "delete":
                return <Trash2 className="h-4 w-4" />;
            default:
                return null;
        }
    };

    const renderForm = () => {
        if (type === "delete" && id) {
            return (
                <div className="p-4 flex flex-col gap-4">
                    <p className="text-center font-medium">
                        All data will be lost. Are you sure you want to delete this {table}?
                    </p>
                    <Button variant="destructive" className="self-center">
                        Confirm Delete
                    </Button>
                </div>
            );
        }

        if (type === "create" || type === "update") {
            return forms[table]?.(type, data) ?? <p>Form not found!</p>;
        }

        return <p>Invalid operation</p>;
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant={getButtonVariant()} size="icon">
                    {getButtonIcon()}
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="capitalize">
                        {type} {table}
                    </DialogTitle>
                </DialogHeader>
                {renderForm()}
            </DialogContent>
        </Dialog>
    );
};

export default FormModal;