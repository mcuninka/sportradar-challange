import React from "react"
import CalendarDay from "./CalendarDay"

const Calendar = ({ events }) => {
    const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1)

    // Function to get events for a specific day
    const getEventsForDay = day => {
        return events.filter(event => {
            const eventDate = new Date(event.dateVenue)
            return eventDate.getDate() === day && eventDate.getMonth() === 0 // 0 for January
        })
    }

    return (
        <div className="w-full text-center text-black">
            <h1 className="mb-4 text-5xl">January</h1>
            <div className="grid grid-cols-7 font-bold">
                {daysOfWeek.map(day => (
                    <div key={day}>{day}</div>
                ))}
            </div>
            <div className="grid grid-cols-7">
                {calendarDays.map(day => (
                    <CalendarDay
                        key={day}
                        day={day}
                        events={getEventsForDay(day)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Calendar
