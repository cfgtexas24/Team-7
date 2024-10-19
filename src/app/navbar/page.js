"use client";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from '@/components/ui/navigation-menu';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export function Navbar() {
    const [isMounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!isMounted) {
        return (
            <div>
                ...
            </div>
        );
    }

    else {
        return (
            <NavigationMenu class="content-center w-full">
            <NavigationMenuList>

                <NavigationMenuItem>
                    <NavigationMenuLink>
                        <Link href="/emergency">Resources</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink>
                        <Link href="/emergency">Events</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink>
                        <Link href="/emergency">Life Lessons</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

            </NavigationMenuList>
            </NavigationMenu>
        );
    }
}