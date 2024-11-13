import React from "react"
import { Select, SelectItem } from "@nextui-org/react"
import { sports } from "@/lib/types"

const SportDropdown = ({
    label,
    ariaLabel,
    name,
    selectionMode = "single",
    size = "lg",
    placeholder,
    defaultValue,
    isRequired = false,
    onSelectionChange,
    className
}) => {
    return (
        <Select
            key={defaultValue || "default-key-" + label}
            label={label}
            aria-label={ariaLabel}
            name={name}
            selectionMode={selectionMode}
            variant="flat"
            size={size}
            placeholder={placeholder}
            isRequired={isRequired}
            defaultSelectedKeys={[defaultValue]}
            onSelectionChange={onSelectionChange}
            className={className}
        >
            {sports.map(sport => (
                <SelectItem key={sport} className="text-primary">
                    {sport}
                </SelectItem>
            ))}
        </Select>
    )
}

export default SportDropdown
