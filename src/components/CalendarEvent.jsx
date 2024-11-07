import React from "react"

const CalendarEvent = ({ event, setIsModalOpen, setSelectedEvent }) => {
    const openModal = e => {
        setIsModalOpen(true)
        setSelectedEvent(e)
    }

    return (
        <button
            className="mt-1 w-full overflow-hidden text-ellipsis whitespace-nowrap rounded-md bg-primary text-xs hover:font-bold"
            onClick={e => {
                e.stopPropagation()
                openModal(event)
            }}
        >
            {event.originCompetitionName}
        </button>
    )
}

export default CalendarEvent
