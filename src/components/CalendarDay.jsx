import React from "react"
import CalendarEvent from "./CalendarEvent"
import Link from "next/link"
import { useRouter } from "next/navigation"

const CalendarDay = ({ day, events, setIsModalOpen, setSelectedEvent }) => {
    const router = useRouter()
    const getCurrentDay = new Date().getDate()

    return (
        <div
            onClick={() => router.push(`/add-event/${day}`)}
            className="flex h-24 flex-col items-center rounded-lg border bg-white p-1 text-center hover:cursor-pointer hover:bg-secondary md:h-36 md:p-5"
        >
            <span
                className={`${getCurrentDay === day && "rounded-full bg-black px-2 text-xl text-white"} font-semibold text-black`}
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
