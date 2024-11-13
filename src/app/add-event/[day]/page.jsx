import AddEventForm from "@/components/AddEventForm"
import React from "react"

const addEventPage = async ({ params }) => {
    const day = (await params).day

    return (
        <>
            <h1 className="mb-4 text-3xl font-bold sm:text-5xl">ADD EVENT</h1>
            <AddEventForm day={day} />
        </>
    )
}

export default addEventPage
