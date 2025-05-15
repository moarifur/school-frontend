import React from 'react';
import Link from 'next/link'

import Mode from "./navbar/Mode";
import Profile from "./navbar/Profile";
import {SidebarTrigger} from "@/components/ui/sidebar";

const Navbar = () => {
    return (
        <nav className={`p-4 flex items-center justify-between`}>
            {/*------------ Left Side -------------*/}
            <SidebarTrigger/>
            {/*------------ Right Side -------------*/}
            <div className="flex items-center gap-4">
                <Link href={`/`}>Dashboard</Link>
                {/*-----Mode -----*/}
                <Mode />
                {/*-----Profile -----*/}
                <Profile />
            </div>
        </nav>
    );
};

export default Navbar;