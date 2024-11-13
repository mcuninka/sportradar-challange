import React from "react"
import CalendarEvent from "./CalendarEvent"
import { useRouter } from "next/navigation"
import { currentDay } from "@/lib/types"

const CalendarDay = ({ day, events, setIsModalOpen, setSelectedEvent }) => {
    const router = useRouter()

    return (
        <div
            onClick={() => router.push(`/add-event/${day}`)}
            className="flex h-24 flex-col items-center overflow-y-auto rounded-lg border bg-white py-1 hover:cursor-pointer hover:bg-secondary md:h-36 md:p-2"
        >
            {/* Display the day number*/}
            <span
                className={`${currentDay === day && "mb-1 rounded-full bg-black px-1 text-xl text-white"} font-semibold text-black`}
            >
                {day}
            </span>

            {/* Display each event for this day */}
            {events &&
                events.map((event, index) => (
                    <CalendarEvent
                        key={index}
                        event={event}
                        setIsModalOpen={setIsModalOpen}
                        setSelectedEvent={setSelectedEvent}
                    />
                ))}
        </div>
    )
}

export default CalendarDay
