import React from 'react';

import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {LogOut, Settings, User} from "lucide-react";

const Profile = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    <AvatarImage
                        src="https://img.freepik.com/vetores-premium/avatar-de-uma-jovem-mulher-de-negocios-inteligente_851009-121.jpg"
                        width="30px"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <User className={`h-[1.2rem] w-[1.2rem] mr-2`}/>
                    Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Settings className={`h-[1.2rem] w-[1.2rem] mr-2`}/>
                    Settings
                </DropdownMenuItem>
                <DropdownMenuItem variant={`destructive`}>
                    <LogOut className={`h-[1.2rem] w-[1.2rem] mr-2`}/>
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default Profile;