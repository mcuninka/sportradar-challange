import React from "react"
import CalendarDay from "./CalendarDay"

const Calendar = ({ events }) => {
    const currentDate = new Date()
    const currentMonth = currentDate.getMonth()
    const currentYear = currentDate.getFullYear()
    const numDays = new Date(currentYear, currentMonth + 1, 0).getDate()
    const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    const calendarDays = Array.from({ length: numDays }, (_, i) => i + 1)

    // Get the first day of the current month 2024 for offset and subtract 1 to start from Monday
    const firstDayOfMonth =
        new Date(`${currentYear}-${currentMonth + 1}-01`).getDay() - 1

    // Function to get events for a specific day
    const getEventsForDay = day => {
        return events.filter(event => {
            const eventDate = new Date(event.dateVenue)
            return (
                eventDate.getDate() === day &&
                eventDate.getMonth() === currentMonth
            )
        })
    }

    return (
        <div className="w-full overflow-y-auto text-center">
            <h1 className="mb-4 text-3xl font-bold sm:text-5xl">
                {currentDate
                    .toLocaleString("default", { month: "long" })
                    .toUpperCase()}
            </h1>
            <div className="mx-auto my-0 max-w-7xl">
                <div className="grid grid-cols-7 font-bold">
                    {daysOfWeek.map(day => (
                        <div key={day}>{day}</div>
                    ))}
                </div>
                <div className="grid grid-cols-7">
                    {/* Add empty divs for week days not from current month */}
                    {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                        <div key={`empty-${index}`}></div>
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
        </div>
    )
}

export default Calendar
