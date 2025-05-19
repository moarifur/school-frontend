"use client"

import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    Home,
    Users,
    User,
    User2,
    BookOpen,
    Layers,
    FileText,
    PenTool,
    Calendar,
    MessageSquare,
    Megaphone,
    Settings,
    LogOut,
    ChevronUp,
    ChevronDown,
    Inbox,
    Search,
    Menu,
    Plus,
    Minus
} from 'lucide-react';

// UI Components
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarSeparator,
} from '../ui/sidebar';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu';

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";


// Role for access control (mock role here – replace with dynamic auth logic)
// "admin", "teacher", "student", "parent"
const role = "admin"

/**
 * Sidebar navigation structure with access control based on user role.
 * Replace `role` with your dynamic user role from context or auth logic.
 */
const menuItems = [
    {
        title: 'MENU',
        items: [
            { icon: Home, label: 'Home', href: '/', visible: ['admin', 'teacher', 'student', 'parent'] },
            { icon: Users, label: 'Teachers', href: '/list/teachers', visible: ['admin', 'teacher'] },
            { icon: User, label: 'Students', href: '/list/students', visible: ['admin', 'teacher'] },
            { icon: User2, label: 'Parents', href: '/list/parents', visible: ['admin', 'teacher'] },
            { icon: BookOpen, label: 'Subjects', href: '/list/subjects', visible: ['admin'] },
            { icon: Layers, label: 'Classes', href: '/list/classes', visible: ['admin', 'teacher'] },
            { icon: FileText, label: 'Lessons', href: '/list/lessons', visible: ['admin', 'teacher'] },
            { icon: PenTool, label: 'Exams', href: '/list/exams', visible: ['admin', 'teacher', 'student', 'parent'] },
            { icon: Inbox, label: 'Assignments', href: '/list/assignments', visible: ['admin', 'teacher', 'student', 'parent'] },
            { icon: Search, label: 'Results', href: '/list/results', visible: ['admin', 'teacher', 'student', 'parent'] },
            { icon: Calendar, label: 'Attendance', href: '/list/attendance', visible: ['admin', 'teacher', 'student', 'parent'] },
            { icon: Calendar, label: 'Events', href: '/list/events', visible: ['admin', 'teacher', 'student', 'parent'] },
            { icon: MessageSquare, label: 'Messages', href: '/list/messages', visible: ['admin', 'teacher', 'student', 'parent'] },
            { icon: Megaphone, label: 'Announcements', href: '/list/announcements', visible: ['admin', 'teacher', 'student', 'parent'] },
        ],
    },
    // {
    //     title: 'OTHER',
    //     items: [
    //         { icon: User, label: 'Profile', href: '/profile', visible: ['admin', 'teacher', 'student', 'parent'] },
    //         { icon: Settings, label: 'Settings', href: '/settings', visible: ['admin', 'teacher', 'student', 'parent'] },
    //         { icon: LogOut, label: 'Logout', href: '/logout', visible: ['admin', 'teacher', 'student', 'parent'] },
    //     ],
    // },
];

const AppSidebar = () => {
    return (
        <Sidebar collapsible="icon" side={`left`} className={`bg-amber-700`}>
            {/* Brand/Logo Section */}
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href="/">
                                <Image src="/logo.svg" alt="logo" width={50} height={50} />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarSeparator className="ml-auto" />

            {/* Main Navigation Content */}
            <SidebarContent>
                {menuItems.map(section => (
                    <SidebarGroup key={section.title}>
                        <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {section.items
                                    .filter((item) => item.visible.includes(role))
                                    .map((item) => (
                                        <SidebarMenuItem key={item.label}>
                                            <SidebarMenuButton asChild>
                                                <Link href={item.href} className="flex items-center gap-2">
                                                    <item.icon className="w-[1.2rem] h-[1.2rem]" />
                                                    <span className="hidden lg:inline">{item.label}</span>
                                                </Link>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                ))}
            </SidebarContent>

            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        {/* User Profile Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    <User2 className="w-[1.2rem] h-[1.2rem]" />
                                    <span className="hidden lg:inline">John Doe</span>
                                    <ChevronUp className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <User className="h-[1.2rem] w-[1.2rem] mr-2" />
                                    Profile
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Settings className="h-[1.2rem] w-[1.2rem] mr-2" />
                                    Settings
                                </DropdownMenuItem>
                                <DropdownMenuItem variant="destructive">
                                    <LogOut className="h-[1.2rem] w-[1.2rem] mr-2" />
                                    Logout
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
};


export default AppSidebar;
