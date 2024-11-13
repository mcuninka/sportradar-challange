import React from "react"

const CalendarEvent = ({ event, setIsModalOpen, setSelectedEvent }) => {
    const openModal = e => {
        setIsModalOpen(true)
        setSelectedEvent(e)
    }

    return (
        <button
            className="mb-[0.1rem] w-full overflow-clip text-ellipsis whitespace-nowrap rounded-md bg-primary py-0 text-xs hover:font-bold sm:mb-1 sm:py-1 sm:text-sm"
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
