import mongoose from "mongoose"

const { Schema } = mongoose
const eventSchema = new Schema(
    {
        sport: { type: String },
        season: { type: String },
        status: { type: String },
        timeVenueUTC: { type: String },
        dateVenue: { type: String },
        stadium: { type: String },
        homeTeam: { type: Object },
        awayTeam: { type: Object },
        result: { type: Object },
        stage: { type: Object },
        group: { type: String },
        originCompetitionId: { type: String },
        originCompetitionName: { type: String }
    },
    {
        timestamps: true
    }
)

const Event = mongoose.models.Event || mongoose.model("Event", eventSchema)

export default Event
