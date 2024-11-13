import React from "react"
import { Input } from "@nextui-org/input"

const InputField = ({
    label,
    name,
    type = "text",
    defaultValue,
    isRequired = true
}) => {
    return (
        <Input
            key={defaultValue || "default-key-" + name}
            label={label}
            type={type}
            name={name}
            id={name}
            defaultValue={defaultValue}
            isRequired={isRequired}
            required={isRequired}
            variant="flat"
            size="lg"
        />
    )
}

export default InputField
