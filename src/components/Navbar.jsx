"use client"

import React from "react"
import { Link } from "@nextui-org/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

const Navbar = () => {
    const pathname = usePathname()
    return (
        <nav className="flex items-center justify-between p-4 font-bold">
            <Link href="/" className="h-8 w-28 sm:w-40">
                <Image
                    src={"/logo.svg"}
                    alt="logo"
                    fill
                    className="object-fill"
                    priority
                />
            </Link>
            <div className="ml-auto flex gap-2 sm:gap-5">
                <Link href="/">
                    <span
                        className={`py-1 text-base hover:text-secondary sm:text-xl ${pathname === "/" ? "text-secondary" : "text-white"}`}
                    >
                        Calendar
                    </span>
                </Link>
                <Link href="/add-event/0">
                    <span
                        className={`rounded-xl border bg-primary px-2 text-base hover:text-secondary sm:px-3 sm:py-1 sm:text-xl ${pathname.includes("/add-event") ? "text-secondary" : "text-white"}`}
                    >
                        Add Your Event
                    </span>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
