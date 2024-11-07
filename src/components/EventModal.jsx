import React, { useEffect } from "react"

const EventModal = ({ selectedEvent, setIsModalOpen }) => {
    useEffect(() => {
        const handleEscape = event => {
            if (event.key === "Escape") {
                setIsModalOpen(false)
            }
        }

        document.addEventListener("keydown", handleEscape)
        return () => document.removeEventListener("keydown", handleEscape)
    }, [setIsModalOpen])

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative mx-4 w-full max-w-md rounded-lg bg-white p-6 text-primary shadow-lg">
                <h1 className="text-2xl">
                    {selectedEvent.originCompetitionName}
                </h1>
                <p className="mb-2">{selectedEvent.stage.name}</p>
                <p>{selectedEvent.dateVenue}</p>
                <p>{selectedEvent.timeVenueUTC}</p>
                <p>
                    {selectedEvent.homeTeam?.name || "TBA"} -{" "}
                    {selectedEvent.awayTeam?.name || "TBA"}
                </p>
                <p>
                    {selectedEvent.result?.homeGoals} -{" "}
                    {selectedEvent.result?.awayGoals}
                </p>
                <button
                    className="absolute right-0 top-0 p-2 font-bold hover:text-secondary"
                    onClick={() => setIsModalOpen(false)}
                    aria-label="Close modal"
                >
                    ✕
                </button>
                <button
                    className="mt-4 w-full rounded-md border border-black p-1 text-black hover:bg-red-500 hover:text-white"
                    onClick={() => setIsModalOpen(false)}
                >
                    Close
                </button>
            </div>
        </div>
    )
}

export default EventModal
