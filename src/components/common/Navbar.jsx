"use client"

import React from 'react';
import Link from 'next/link'
import {ArrowLeftToLine} from 'lucide-react';
import Mode from "./navbar/Mode";
import Profile from "./navbar/Profile";
import {useSidebar} from "@/components/ui/sidebar";

const Navbar = () => {
    const {toggleSidebar} = useSidebar()
    return (
        <nav className={`p-4 flex items-center justify-between`}>
            {/*------------ Left Side -------------*/}
            <span className="border border-gray-200 rounded-md p-1">
                <ArrowLeftToLine onClick={toggleSidebar} className={`text-gray-400 w-4 h-4`}/>
            </span>
            Menu
            {/*<SidebarTrigger/>*/}
            {/*------------ Right Side -------------*/}
            <div className="flex items-center gap-4">
                <Link href={`/`}>Dashboard</Link>
                {/*-----Mode -----*/}
                <Mode/>
                {/*-----Profile -----*/}
                <Profile/>
            </div>
        </nav>
    );
};

export default Navbar;