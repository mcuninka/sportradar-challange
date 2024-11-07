"use client"

import React from "react"
import InputField from "@/components/InputField"
import SubmitButton from "@/components/SubmitButton"
import { createEvent } from "@/app/api/actions"
import { toast } from "react-toastify"
import { toastMessage } from "@/lib/types"
import SportDropdown from "./SportDropdown"

const AddEventForm = () => {
    const handleSubmit = async formData => {
        const res = await createEvent(formData)
        if (res.success) {
            toast.success(res.message, toastMessage)
        }
    }

    return (
        <form
            action={handleSubmit}
            className="flex w-full max-w-3xl flex-col text-primary"
        >
            <div className="my-4 grid grid-cols-2 gap-x-3 gap-y-4">
                <SportDropdown />
                <InputField label="Name" name="name" type="text" />
                <InputField label="Stage" name="stage" type="text" />
                <InputField label="Stadium" name="stadium" type="text" />
                <InputField label="Date" name="date" type="date" />
                <InputField label="Time" name="time" type="time" />
                <InputField label="Home team" name="homeTeam" type="text" />
                <InputField label="Away team" name="awayTeam" type="text" />
            </div>

            <SubmitButton className="mb-10 mt-5 w-full bg-black text-white">
                Add event
            </SubmitButton>
        </form>
    )
}

export default AddEventForm
