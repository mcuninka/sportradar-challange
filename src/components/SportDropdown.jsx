import React from "react"
import { Select, SelectItem } from "@nextui-org/react"

const SportDropdown = () => {
    const sports = [
        "Football",
        "Basketball",
        "Tennis",
        "Volleyball",
        "Handball",
        "Baseball",
        "Rugby",
        "Cricket",
        "Golf",
        "Table Tennis",
        "Formula 1"
    ]
    return (
        <Select
            label="Sport"
            name="sport"
            variant="flat"
            size="lg"
            placeholder="Choose Sport"
            isRequired
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
