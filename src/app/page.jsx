import Calendar from "@/components/Calendar"
import React from "react"
import data from "@/sportData.json"
import { getAllEvents } from "@/app/api/actions"
import { toast } from "react-toastify"
import { toastMessage } from "@/lib/types"

const HomePage = async () => {
    const events = await getAllEvents()
    if (!events.success) {
        toast.error("Error getting events", toastMessage)
    }
    console.log(events.events)

    return <Calendar events={events.events} />
}

export default HomePage
