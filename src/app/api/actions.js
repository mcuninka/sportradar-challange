"use server"

import { connect } from "@/db/db_config"
import Event from "@/models/Event"

//* Create a new event in the database
export async function createEvent(formData) {
    try {
        // Create a new event object from the form data
        const eventData = Object.fromEntries(formData)

        // Check if all required fields are present
        const requiredProfileFields = [
            { name: "sport", message: "Sport is mandatory" },
            { name: "name", message: "Name is mandatory" },
            { name: "stage", message: "Stage is mandatory" },
            { name: "stadium", message: "Stadium is mandatory" },
            { name: "date", message: "Date is mandatory" },
            { name: "time", message: "Time is mandatory" }
        ]

        const missingField = requiredProfileFields.find(
            ({ name }) => !eventData[name]
        )
        if (missingField) {
            return { success: false, message: missingField.message }
        }

        // Check if the score is entered for both teams
        if (
            (eventData.homeTeamScore && !eventData.awayTeamScore) ||
            (!eventData.homeTeamScore && eventData.awayTeamScore)
        ) {
            return {
                success: false,
                message: "Enter score for both teams",
                data: eventData
            }
        }

        // Check if the score is negative
        if (eventData.homeTeamScore < 0 || eventData.awayTeamScore < 0) {
            return { success: false, message: "Invalid score", data: eventData }
        }

        // Create a new event object
        const newEvent = new Event({
            sport: eventData.sport,
            originCompetitionName: eventData.name,
            stage: { name: eventData.stage },
            stadium: eventData.stadium,
            dateVenue: eventData.date,
            timeVenueUTC: eventData.time,
            homeTeam: { name: eventData.homeTeam },
            awayTeam: { name: eventData.awayTeam },
            result: {
                homeGoals: eventData.homeTeamScore,
                awayGoals: eventData.awayTeamScore
            }
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
