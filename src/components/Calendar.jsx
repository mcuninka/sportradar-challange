"use client"

import React, { useState } from "react"
import CalendarDay from "./CalendarDay"
import EventPage from "./EventPage"
import Filter from "./Filter"
import { FaFilter } from "react-icons/fa"
import Modal from "./Modal"
import { currentYear, currentMonth, daysOfWeek, monthNames } from "@/lib/types"

const Calendar = ({ events }) => {
    // State for modal visibility and selected event
    const [isEventModalOpen, setIsEventModalOpen] = useState(false)
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)
    const [selectedEvent, setSelectedEvent] = useState(null)
    const [filteredSports, setFilteredSports] = useState(null)

    // Get the number of days in the current month
    const numDays = new Date(currentYear, currentMonth + 1, 0).getDate()
    const calendarDays = Array.from({ length: numDays }, (_, i) => i + 1)

    // Get the first day of the current month 2024 for offset but starting the week from Monday
    const firstDayOfMonth =
        (new Date(currentYear, currentMonth, 1).getDay() + 6) % 7

    // Function to get filtered events for a specific day
    const getEventsForDay = day => {
        return events?.filter(event => {
            const matchesFilteredSports =
                !filteredSports?.length ||
                filteredSports?.some(sport => event.sport === sport)
            const eventDate = new Date(event.dateVenue)
            return (
                eventDate.getDate() === day &&
                eventDate.getMonth() === currentMonth &&
                matchesFilteredSports
            )
        })
    }

    return (
        <>
            <div className="slide-down w-full max-w-7xl overflow-y-auto text-center">
                {/* Responsive filter option */}
                <div
                    className="absolute right-0 top-0 flex h-12 w-[20%] justify-end"
                    aria-label="Filter"
                >
                    <FaFilter
                        onClick={() => setIsFilterModalOpen(true)}
                        className="block sm:hidden"
                    />
                    <Filter
                        filteredSports={filteredSports}
                        setFilteredSports={setFilteredSports}
                        className="hidden w-full text-primary sm:block"
                    />
                </div>
                <h1 className="mb-4 text-3xl font-bold sm:text-5xl">
                    {monthNames[currentMonth].toUpperCase()} {currentYear}
                </h1>
                <div className="mx-auto my-0">
                    <div className="grid grid-cols-7 font-bold">
                        {daysOfWeek.map(day => (
                            <div key={day}>{day}</div>
                        ))}
                    </div>
                    <div className="grid grid-cols-7">
                        {/* Add empty divs for week days not from current month */}
                        {Array.from({ length: firstDayOfMonth }).map(
                            (_, index) => (
                                <div key={`empty-${index}`}></div>
                            )
                        )}
                        {calendarDays.map(day => (
                            <CalendarDay
                                key={day}
                                day={day}
                                events={getEventsForDay(day)}
                                setIsModalOpen={setIsEventModalOpen}
                                setSelectedEvent={setSelectedEvent}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Filter Modal */}
            {isFilterModalOpen && (
                <Modal setIsModalOpen={setIsFilterModalOpen}>
                    <Filter
                        filteredSports={filteredSports}
                        setFilteredSports={setFilteredSports}
                    />
                </Modal>
            )}

            {/* Event Modal */}
            {isEventModalOpen && (
                <Modal setIsModalOpen={setIsEventModalOpen}>
                    <EventPage selectedEvent={selectedEvent} />
                </Modal>
            )}
        </>
    )
}

export default Calendar
