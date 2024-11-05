import "./globals.css"
import Navbar from "@/components/Navbar"
import { Providers } from "./providers"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const metadata = {
    title: "Sportradar Calendar",
    description: "Sportradar Calendar Coding Challenge"
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    <Navbar />
                    <main className="flex flex-col items-center px-4">
                        {children}
                    </main>
                    <ToastContainer />
                </Providers>
            </body>
        </html>
    )
}
