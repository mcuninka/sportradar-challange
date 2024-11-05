import React from "react"
import { Input } from "@nextui-org/input"

const InputField = ({ label, name, type, isRequired = false }) => {
    return (
        <Input
            label={label}
            type={type}
            name={name}
            id={name}
            isRequired={isRequired}
            required={isRequired}
            variant="flat"
            size="lg"
        />
    )
}

export default InputField
