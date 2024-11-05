import React from "react"
import { useFormStatus } from "react-dom"
import { Button } from "@nextui-org/button"

const SubmitButton = ({ children, className }) => {
    const { pending } = useFormStatus()

    return (
        <Button
            size="lg"
            type="submit"
            isLoading={pending}
            className={className}
        >
            {children}
        </Button>
    )
}

export default SubmitButton
