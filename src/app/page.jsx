import Calendar from "@/components/Calendar"
import React from "react"
import { getAllEvents } from "@/app/api/actions"

const HomePage = async () => {
    // Fetch events from server and pass them as props to the Calendar component
    const events = await getAllEvents()
    if (!events.success) {
        console.error("Failed to fetch events")
    }

    return <Calendar events={events?.events} />
}

export default HomePage
