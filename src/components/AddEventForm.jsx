"use client"

import React, { useActionState } from "react"
import InputField from "@/components/InputField"
import { createEvent } from "@/app/api/actions"
import { toast } from "react-toastify"
import { toastMessage } from "@/lib/types"
import SportDropdown from "./SportDropdown"
import { Button } from "@nextui-org/button"

const AddEventForm = ({ day }) => {
    const currentDate = new Date()
    const currentMonth = currentDate.getMonth()
    const currentYear = currentDate.getFullYear()

    const handleFormAction = async (prevState, formData) => {
        try {
            const res = await createEvent(formData)
            if (res.success) {
                toast.success(res.message, toastMessage)
            } else {
                toast.error(res.message, toastMessage)
                return { ...prevState, data: res.data } // Update the inputs with the data that was sent
            }
        } catch (error) {
            console.error("Error adding event: ", error)
            toast.error("Failed to add event", toastMessage)
        }
    }

    const [state, action, isPending] = useActionState(handleFormAction, null)

    return (
        <form
            action={action}
            className="slide-in flex w-full max-w-3xl flex-col text-primary"
        >
            <div className="my-4 grid grid-cols-2 gap-x-3 gap-y-4">
                <SportDropdown
                    label="Sport"
                    name="sport"
                    size="lg"
                    placeholder="Choose Sport"
                    isRequired={true}
                    defaultValue={state?.data?.sport}
                />
                <InputField
                    label="Name"
                    name="name"
                    defaultValue={state?.data?.name}
                />
                <InputField
                    label="Stage"
                    name="stage"
                    defaultValue={state?.data?.stage}
                />
                <InputField
                    label="Stadium"
                    name="stadium"
                    type="text"
                    defaultValue={state?.data?.stadium}
                />
                <InputField
                    label="Date"
                    name="date"
                    type="date"
                    defaultValue={
                        day === "0"
                            ? `${currentYear}-${(currentMonth + 1).toString().padStart(2, "0")}-${currentDate.getDate().toString().padStart(2, "0")}`
                            : `${currentYear}-${(currentMonth + 1).toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`
                    }
                />
                <InputField
                    label="Time"
                    name="time"
                    type="time"
                    defaultValue={state?.data?.time}
                />
                <InputField
                    label="Home team"
                    name="homeTeam"
                    isRequired={false}
                    defaultValue={state?.data?.homeTeam}
                />
                <InputField
                    label="Away team"
                    name="awayTeam"
                    isRequired={false}
                    defaultValue={state?.data?.awayTeam}
                />
                <InputField
                    label="Home team score"
                    name="homeTeamScore"
                    type="number"
                    isRequired={false}
                    defaultValue={state?.data?.homeTeamScore}
                />
                <InputField
                    label="Away team score"
                    name="awayTeamScore"
                    type="number"
                    isRequired={false}
                    defaultValue={state?.data?.awayTeamScore}
                />
            </div>

            <Button
                type="submit"
                isLoading={isPending}
                size="lg"
                className="mb-10 mt-5 w-full bg-secondary font-bold text-white"
            >
                ADD TO THE CALENDAR
            </Button>
        </form>
    )
}

export default AddEventForm
