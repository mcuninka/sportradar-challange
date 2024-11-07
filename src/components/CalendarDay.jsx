"use client"

import React, { useState } from "react"
import EventModal from "./EventModal"
import { useRouter } from "next/navigation"
import CalendarEvent from "./CalendarEvent"

const CalendarDay = ({ day, events }) => {
    const router = useRouter()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedEvent, setSelectedEvent] = useState(null)

    const getCurrentDay = new Date().getDate()

    return (
        <>
            <div
                className="flex h-24 flex-col items-center rounded-lg border bg-white p-1 text-center hover:cursor-pointer hover:bg-secondary md:h-36 md:p-5"
                onClick={() => router.push("/add-event")}
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
                {/* Modal */}
            </div>
            {isModalOpen && (
                <EventModal
                    selectedEvent={selectedEvent}
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                />
            )}
        </>
    )
}

export default CalendarDay
