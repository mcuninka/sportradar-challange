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
                    className={`py-1 text-xl text-white hover:text-secondary ${pathname === "/" && "font-bold"}`}
                >
                    Calendar
                </span>
            </Link>
            <Link href="/add-event">
                <span className="rounded-xl border bg-primary px-3 py-1 text-xl text-secondary">
                    Add Your Event
                </span>
            </Link>
        </nav>
    )
}

export default Navbar