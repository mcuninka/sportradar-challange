"use client"

import { NextUIProvider } from "@nextui-org/react"

// Providers fro NextUI components
export function Providers({ children }) {
    return <NextUIProvider>{children}</NextUIProvider>
}
