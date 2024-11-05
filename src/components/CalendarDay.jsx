"use client"

import React from "react"

const CalendarDay = ({ day, events }) => {
    return (
        <button
            className="flex h-32 flex-col items-center rounded-lg border p-5 text-center hover:cursor-pointer hover:bg-slate-300 md:h-40"
            onClick={() => console.log(day)}
        >
            <span>{day}</span>
            {/* Display each event for this day */}
            {events &&
                events.map((event, index) => (
                    <span key={index} className="mt-1 text-xs text-blue-600">
                        {event.originCompetitionName}
                    </span>
                ))}
        </button>
    )
}

export default CalendarDay
