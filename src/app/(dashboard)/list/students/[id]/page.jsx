"use client";

import {
    Mail,
    Phone,
    Calendar,
    Droplets,
    BookOpen,
    School,
    Clock,
    Users,
    Award,
    FileText
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import BigCalendar from "@/components/widgets/BigCalender";
import Performance from "@/components/widgets/Performance";
import Announcements from "@/components/widgets/Announcements";


/**
 * Single Student View Page
 * Displays detailed information about a student including:
 * - Profile information
 * - Stats cards
 * - Schedule calendar
 * - Performance metrics
 * - Announcements
 * @returns {JSX.Element} The student detail page
 */
const SingleStudentPage = () => {
    // A single student's data
    const studentData = {
        id: 1,
        name: "Cameron Moran",
        email: "student@gmail.com",
        phone: "+1 234 567",
        bloodType: "A+",
        dateOfBirth: "January 2025",
        bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        photo: "https://images.pexels.com/photos/5414817/pexels-photo-5414817.jpeg",
        attendance: 90,
        grade: "6th",
        lessons: 18,
        class: "6A"
    };

    return (
        <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
            {/* LEFT COLUMN */}
            <div className="w-full xl:w-2/3 flex flex-col gap-4">
                {/* TOP SECTION */}
                <div className="flex flex-col lg:flex-row gap-4">
                    {/* STUDENT PROFILE CARD */}
                    <div className="bg-[#C3EBFA] py-6 px-6 rounded-md flex-1 flex gap-4">
                        <div className="w-1/3">
                            <Image
                                src={studentData.photo}
                                alt={studentData.name}
                                width={144}
                                height={144}
                                className="w-36 h-36 rounded-full object-cover"
                                unoptimized
                            />
                        </div>

                        <div className="w-2/3 flex flex-col justify-between gap-4">
                            <h1 className="text-xl font-semibold">{studentData.name}</h1>
                            <p className="text-sm text-gray-500">{studentData.bio}</p>

                            <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                    <Droplets className="h-4 w-4 text-muted-foreground" />
                                    <span>{studentData.bloodType}</span>
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                    <Calendar className="h-4 w-4 text-muted-foreground" />
                                    <span>{studentData.dateOfBirth}</span>
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                    <Mail className="h-4 w-4 text-muted-foreground" />
                                    <span>{studentData.email}</span>
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                    <Phone className="h-4 w-4 text-muted-foreground" />
                                    <span>{studentData.phone}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* STATS CARDS */}
                    <div className="flex-1 flex gap-4 justify-between flex-wrap">
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Clock className="h-5 w-5 text-primary"/>
                            <div>
                                <h2 className="text-xl font-semibold">{studentData.attendance}%</h2>
                                <p className="text-sm text-gray-400">Attendance</p>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <School className="h-5 w-5 text-primary"/>
                            <div>
                                <h2 className="text-xl font-semibold">{studentData.grade}</h2>
                                <p className="text-sm text-gray-400">Grade</p>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <BookOpen className="h-5 w-5 text-primary"/>
                            <div>
                                <h2 className="text-xl font-semibold">{studentData.lessons}</h2>
                                <p className="text-sm text-gray-400">Lessons</p>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Users className="h-5 w-5 text-primary"/>
                            <div>
                                <h2 className="text-xl font-semibold">{studentData.class}</h2>
                                <p className="text-sm text-gray-400">Class</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SCHEDULE SECTION */}
                <div className="bg-white p-4 rounded-md flex-1">
                    <h2 className="text-xl font-semibold mb-4">Student's Schedule</h2>
                    <BigCalendar/>
                </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="w-full xl:w-1/3 flex flex-col gap-4">
                {/* SHORTCUTS */}
                <div className="bg-white p-4 rounded-md">
                    <h2 className="text-xl font-semibold">Shortcuts</h2>
                    <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
                        <Button variant="outline" className="p-3 rounded-md bg-[#EDF9FD]" asChild>
                            <Link href="#">
                                <BookOpen className="h-4 w-4" />
                                Student's Lessons
                            </Link>
                        </Button>
                        <Button variant="outline" className="p-3 rounded-md bg-[#F1F0FF]" asChild>
                            <Link href="#">
                                <Users className="h-4 w-4" />
                                Student's Teachers
                            </Link>
                        </Button>
                        <Button variant="outline" className="p-3 rounded-md bg-pink-50" asChild>
                            <Link href="#">
                                <Calendar className="h-4 w-4" />
                                Student's Exams
                            </Link>
                        </Button>
                        <Button variant="outline" className="p-3 rounded-md bg-[#EDF9FD]" asChild>
                            <Link href="#">
                                <FileText className="h-4 w-4" />
                                Student's Assignments
                            </Link>
                        </Button>
                        <Button variant="outline" className="p-3 rounded-md bg-[#FEFCE8]" asChild>
                            <Link href="#">
                                <Award className="h-4 w-4" />
                                Student's Results
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* PERFORMANCE */}
                <Performance />

                {/* ANNOUNCEMENTS */}
                <Announcements />
            </div>
        </div>
    );
};

export default SingleStudentPage;