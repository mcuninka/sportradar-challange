"use client"

import React from "react"
import { Link } from "@nextui-org/link"
import { usePathname } from "next/navigation"

const Navbar = () => {
    const pathname = usePathname()
    return (
        <nav className="flex gap-4 p-4">
            <Link href="/">
                <span
                    className={`py-1 text-base hover:text-secondary sm:text-xl ${pathname === "/" ? "text-secondary" : "text-white"}`}
                >
                    Calendar
                </span>
            </Link>
            <Link href="/add-event">
                <span
                    className={`rounded-xl border bg-primary px-2 text-base hover:text-secondary sm:px-3 sm:py-1 sm:text-xl ${pathname === "/add-event" ? "text-secondary" : "text-white"}`}
                >
                    Add Your Event
                </span>
            </Link>
        </nav>
    )
}

export default Navbar
