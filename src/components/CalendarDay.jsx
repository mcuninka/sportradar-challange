"use client"

import React, { useState } from "react"
import Modal from "./Modal"

const CalendarDay = ({ day, events }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedEvent, setSelectedEvent] = useState(null)

    const openModal = e => {
        setIsModalOpen(true)
        setSelectedEvent(e)
    }

    return (
        <>
            <div
                className="flex h-32 flex-col items-center rounded-lg border bg-[#EAB985] p-1 text-center hover:cursor-pointer hover:bg-[#606C38] md:h-40 md:p-5"
                onClick={() => console.log(day)}
            >
                <span>{day}</span>
                {/* Display each event for this day */}
                {events &&
                    events.map((event, index) => (
                        <button
                            key={index}
                            className="mt-1 w-full overflow-hidden text-ellipsis whitespace-nowrap rounded-md bg-[#EAB985] text-xs hover:bg-[#BC6C25]"
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
