import React from "react"

const EventPage = ({ selectedEvent }) => {
    return (
        <>
            <h1 className="text-2xl">{selectedEvent.originCompetitionName}</h1>
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
        </>
    )
}

export default EventPage
