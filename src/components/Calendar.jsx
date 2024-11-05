import React from "react"
import CalendarDay from "./CalendarDay"

const Calendar = ({ events }) => {
    const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1)

    // Get the first day of January 2024
    const firstDayOfMonth = new Date("2024-01-01").getDay()

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
                {/* Add empty divs for week days not from current month */}
                {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                    <div
                        key={`empty-${index}`}
                        className="h-32 border md:h-40"
                    ></div>
                ))}
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
