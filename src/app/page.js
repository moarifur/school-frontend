import React from 'react';
import {Button} from "@/components/ui/button";

const Page = () => {
    return (
        <div>
            <h1 className='bg-blue-500'>Yo</h1>
            <Button className={`bg-blue-500`}>
                <span className={`text-2xl font-sarif`}>Click me</span>

            </Button>
        </div>
    );
};

export default Page;