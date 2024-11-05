import "./globals.css"

export const metadata = {
    title: "Sportradar Calendar",
    description: "Sportradar Calendar Coding Challenge"
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <main className="flex flex-col items-center p-4">
                    {children}
                </main>
            </body>
        </html>
    )
}
