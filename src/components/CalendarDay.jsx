"use client"

import React, { useState } from "react"
import Modal from "./Modal"

const CalendarDay = ({ day, events }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedEvent, setSelectedEvent] = useState(null)

    const getCurrentDay = new Date().getDate()

    const openModal = e => {
        setIsModalOpen(true)
        setSelectedEvent(e)
    }

    return (
        <>
            <div className="flex h-32 flex-col items-center rounded-lg border bg-white p-1 text-center hover:cursor-pointer hover:bg-secondary md:h-36 md:p-5">
                <span
                    className={`${getCurrentDay === day && "rounded-full bg-black px-2 text-xl text-white"} font-semibold text-black`}
                >
                    {day}
                </span>
                {/* Display each event for this day */}
                {events &&
                    events.map((event, index) => (
                        <button
                            key={index}
                            className="mt-1 w-full overflow-hidden text-ellipsis whitespace-nowrap rounded-md bg-primary text-xs hover:font-bold"
                            onClick={() => openModal(event)}
                        >
                            {event.originCompetitionName}
                        </button>
                    ))}
                {/* Modal */}
            </div>
            {isModalOpen && (
                <Modal
                    selectedEvent={selectedEvent}
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                />
            )}
        </>
    )
}

export default CalendarDay
