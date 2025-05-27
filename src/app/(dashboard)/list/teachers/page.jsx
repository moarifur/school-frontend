import { Filter, ListOrdered, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import TableSearch from "@/components/widgets/TableSearch";
import Table from "@/components/widgets/Table";
import Pagination from "@/components/widgets/Pagination";

// Role will be dynamic later
let role = "teacher";

// List of teachers data
const teachersData = [
    {
        id: 1,
        teacherId: "1234567890",
        name: "John Doe",
        email: "john@doe.com",
        photo:
            "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: ["Math", "Geometry"],
        classes: ["1B", "2A", "3C"],
        address: "123 Main St, Anytown, USA",
    },
    {
        id: 2,
        teacherId: "1234567890",
        name: "Jane Doe",
        email: "jane@doe.com",
        photo:
            "https://images.pexels.com/photos/936126/pexels-photo-936126.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: ["Physics", "Chemistry"],
        classes: ["5A", "4B", "3C"],
        address: "123 Main St, Anytown, USA",
    },
    {
        id: 3,
        teacherId: "1234567890",
        name: "Mike Geller",
        email: "mike@geller.com",
        photo:
            "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: ["Biology"],
        classes: ["5A", "4B", "3C"],
        address: "123 Main St, Anytown, USA",
    },
    {
        id: 4,
        teacherId: "1234567890",
        name: "Jay French",
        email: "jay@gmail.com",
        photo:
            "https://images.pexels.com/photos/1187765/pexels-photo-1187765.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: ["History"],
        classes: ["5A", "4B", "3C"],
        address: "123 Main St, Anytown, USA",
    },
    {
        id: 5,
        teacherId: "1234567890",
        name: "Jane Smith",
        email: "jane@gmail.com",
        photo:
            "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: ["Music", "History"],
        classes: ["5A", "4B", "3C"],
        address: "123 Main St, Anytown, USA",
    },
    {
        id: 6,
        teacherId: "1234567890",
        name: "Anna Santiago",
        email: "anna@gmail.com",
        photo:
            "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: ["Physics"],
        classes: ["5A", "4B", "3C"],
        address: "123 Main St, Anytown, USA",
    },
    {
        id: 7,
        teacherId: "1234567890",
        name: "Allen Black",
        email: "allen@black.com",
        photo:
            "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: ["English", "Spanish"],
        classes: ["5A", "4B", "3C"],
        address: "123 Main St, Anytown, USA",
    },
    {
        id: 8,
        teacherId: "1234567890",
        name: "Ophelia Castro",
        email: "ophelia@castro.com",
        photo:
            "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: ["Math", "Geometry"],
        classes: ["5A", "4B", "3C"],
        address: "123 Main St, Anytown, USA",
    },
    {
        id: 9,
        teacherId: "1234567890",
        name: "Derek Briggs",
        email: "derek@briggs.com",
        photo:
            "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: ["Literature", "English"],
        classes: ["5A", "4B", "3C"],
        address: "123 Main St, Anytown, USA",
    },
    {
        id: 10,
        teacherId: "1234567890",
        name: "John Glover",
        email: "john@glover.com",
        photo:
            "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: ["Biology"],
        classes: ["5A", "4B", "3C"],
        address: "123 Main St, Anytown, USA",
    },
]

/**
 * Column configuration for teachers table
 */
const columns = [
    {
        header: "Info",
        accessor: "info",
    },
    {
        header: "Teacher ID",
        accessor: "teacherId",
        className: "hidden md:table-cell",
    },
    {
        header: "Subjects",
        accessor: "subjects",
        className: "hidden md:table-cell",
    },
    {
        header: "Classes",
        accessor: "classes",
        className: "hidden md:table-cell",
    },
    {
        header: "Phone",
        accessor: "phone",
        className: "hidden lg:table-cell",
    },
    {
        header: "Address",
        accessor: "address",
        className: "hidden lg:table-cell",
    },
    {
        header: "Actions",
        accessor: "action",
    },
];

/**
 * Teachers list page component
 * @returns {JSX.Element} Page with teachers table and controls
 */
const TeacherListPage = () => {
    /**
     * Render a teacher row
     * @param {Object} item - Teacher data
     * @returns {JSX.Element} Table row
     */
    const renderRow = (item) => (
        <tr
            key={item.id}
            className="border-b hover:bg-secondary/50 even:bg-muted/50"
        >
            <td className="p-4">
                <div className="flex items-center gap-4">
                    <Image
                        src={item.photo}
                        alt={item.name}
                        width={40}
                        height={40}
                        className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                        <h3 className="font-semibold">{item.name}</h3>
                        {item.email && (
                            <p className="text-sm text-muted-foreground">{item.email}</p>
                        )}
                    </div>
                </div>
            </td>
            <td className="hidden md:table-cell">{item.teacherId}</td>
            <td className="hidden md:table-cell">{item.subjects.join(", ")}</td>
            <td className="hidden md:table-cell">{item.classes.join(", ")}</td>
            <td className="hidden lg:table-cell">{item.phone}</td>
            <td className="hidden lg:table-cell">{item.address}</td>
            <td>
                <div className="flex items-center gap-2">
                    <Link href={`/list/teachers/${item.id}`}>
                        <Button variant="secondary" size="icon">
                            <Eye className="h-4 w-4" />
                        </Button>
                    </Link>
                    {/*{role === "admin" && (*/}
                    {/*    <FormModal table="teacher" type="delete" id={item.id} />*/}
                    {/*)}*/}
                </div>
            </td>
        </tr>
    );

    return (
        <div className="bg-background p-4 rounded-lg flex-1 m-4 mt-0">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <h1 className="text-2xl font-semibold">All Teachers</h1>

                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <TableSearch />

                    <div className="flex items-center gap-2 self-end md:self-auto">
                        <Button variant="outline" size="icon">
                            <Filter className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon">
                            <ListOrdered className="h-4 w-4" />
                        </Button>

                        {/*{role === "admin" && (*/}
                        {/*    <FormModal table="teacher" type="create" />*/}
                        {/*)}*/}
                    </div>
                </div>
            </div>

            <Table columns={columns} renderRow={renderRow} data={teachersData} />

            <Pagination />
        </div>
    );
};

export default TeacherListPage;