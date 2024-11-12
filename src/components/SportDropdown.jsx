import React, { useEffect } from "react"
import { Select, SelectItem } from "@nextui-org/react"

const SportDropdown = ({ defaultValue }) => {
    const sports = [
        "Football",
        "Basketball",
        "Hockey",
        "Volleyball",
        "Handball",
        "Baseball",
        "Rugby"
    ]

    return (
        <Select
            key={defaultValue || "default-key-sport"}
            label="Sport"
            name="sport"
            variant="flat"
            size="lg"
            placeholder="Choose Sport"
            isRequired
            defaultSelectedKeys={[defaultValue]}
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
