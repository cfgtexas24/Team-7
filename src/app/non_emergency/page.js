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

export default function NonEmergency() {
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
                        <Link href="/resources">Resources</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink>
                        <Link href="/events">Events</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink>
                        <Link href="/life">Life Lessons</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

            </NavigationMenuList>
            </NavigationMenu>
        );
    }
}