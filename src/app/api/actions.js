"use server"

import { connect } from "@/db/db_config"
import Event from "@/models/Event"
import { select } from "@nextui-org/react"

//* Create a new event in the database
export async function createEvent(formData) {
    try {
        // Create a new event object from the form data
        const eventData = Object.fromEntries(formData)
        const newEvent = new Event({
            sport: eventData.sport,
            originCompetitionName: eventData.name,
            stage: { name: eventData.stage },
            stadium: eventData.stadium,
            dateVenue: eventData.date,
            timeVenueUTC: eventData.time,
            homeTeam: { name: eventData.homeTeam },
            awayTeam: { name: eventData.awayTeam }
        })

        // Connect to the database and save the event
        await connect()
        await newEvent.save()
        return { success: true, message: "Event created" }
    } catch (error) {
        console.error("Error creating event: ", error)
        return { success: false, message: "Event creation failed" }
    }
}

//* Get all events from the database
export async function getAllEvents() {
    try {
        await connect()
        const events = await Event.find().select("-_id").lean()
        return { success: true, events }
    } catch (error) {
        console.error("Error getting events: ", error)
        return { success: false, message: "Error getting events" }
    }
}
