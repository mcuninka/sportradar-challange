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
    selectedKeys,
    isRequired = false,
    onSelectionChange,
    className
}) => {
    return (
        <Select
            key={
                selectionMode === "single" &&
                (selectedKeys || "default-key-" + label)
            } // Add a key to the select to force re-render to set the default value
            label={label}
            aria-label={ariaLabel}
            name={name}
            selectionMode={selectionMode}
            variant="flat"
            size={size}
            placeholder={placeholder}
            isRequired={isRequired}
            defaultSelectedKeys={selectedKeys}
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
