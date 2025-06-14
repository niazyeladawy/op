"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight, Menu, X } from "lucide-react"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Container from "./Container"
import { HeartIcon } from "./icons/CustomIcon"
import Image from "next/image"



export function NavbarMenu() {
    const navRef = React.useRef<HTMLDivElement>(null);
    const [menuOpen, setMenuOpen] = React.useState(false);

    React.useEffect(() => {
        function updateHeight() {
            if (navRef.current) {
                const height = navRef.current.offsetHeight;
                // Set CSS variable --navbar-height on the root element (html)
                document.documentElement.style.setProperty("--navbar-height", `${height}px`);
            }
        }

        updateHeight();
        window.addEventListener("resize", updateHeight);
        return () => window.removeEventListener("resize", updateHeight);
    }, []);


    return (
        <NavigationMenu viewport={false} className="w-full z-[9999] sticky top-0 bg-white shadow" ref={navRef}>
            <Container>
                <div className="flex justify-between w-full items-center py-3 relative z-10">
                    <Link href="/" className="text-sm font-medium hover:underline">
                        
                        <Image
                            alt="Property"
                            width={80} height={56}
                            src="/images/logo.svg"
                        />
                    </Link>

                    <NavigationMenuList className="hidden lg:flex">
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href="/docs" className="text-sec font-medium uppercase">rent/buy</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="uppercase text-mute">Area</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid ">

                                    <Link href="/" >home</Link>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="uppercase text-main2">project</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid ">

                                    <Link href="/" >home</Link>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="uppercase text-mute">developer</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid ">

                                    <Link href="/" >home</Link>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href="/docs">Docs</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                    <div className="flex items-center gap-3">
                        <a href="" className="hidden md:flex bg-sec py-2 px-4 text-sm cursor-pointer rounded-full  items-center gap-2 w-fit text-main2 capitalize font-medium">free consultaion <ArrowRight width={16} /> </a>
                        <button className="bg-muted w-8 h-8 flex items-center justify-center rounded-sm text-sec"><HeartIcon width={16} /></button>
                        <button onClick={() => setMenuOpen(!menuOpen)} className={`md:hidden  w-8 h-8 flex items-center justify-center rounded-sm text-black `}>{!menuOpen ? <Menu /> : <X />}</button>
                    </div>
                </div>
                <div className={`md:hidden absolute w-full h-screen top-0 right-0 bg-white duration-300 ${menuOpen ? "translate-x-0" : "translate-x-[-100%]"} `}>
                    <NavigationMenuList className="pt-[100px] px-4 flex-col items-start">
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href="/docs" className="text-sec font-medium uppercase">rent/buy</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="uppercase text-mute">Area</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid ">

                                    <Link href="/" >home</Link>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="uppercase text-main2">project</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid ">

                                    <Link href="/" >home</Link>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="uppercase text-mute">developer</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid ">

                                    <Link href="/" >home</Link>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href="/docs">Docs</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </div>
            </Container>
        </NavigationMenu>
    )
}

// function ListItem({
//     title,
//     children,
//     href,
//     ...props
// }: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
//     return (
//         <li {...props}>
//             <NavigationMenuLink asChild>
//                 <Link href={href}>
//                     <div className="text-sm leading-none font-medium">{title}</div>
//                     <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
//                         {children}
//                     </p>
//                 </Link>
//             </NavigationMenuLink>
//         </li>
//     )
// }
