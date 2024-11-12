import React from "react"
import { Select, SelectItem } from "@nextui-org/react"
import { FaFilter } from "react-icons/fa"

const Filter = ({ setFilteredSports }) => {
    const sports = [
        "Football",
        "Basketball",
        "Hockey",
        "Volleyball",
        "Handball",
        "Baseball",
        "Rugby"
    ]

    const handleSportsChange = selectedKeys => {
        console.log(selectedKeys)
        setFilteredSports([...selectedKeys])
    }

    return (
        <div className="absolute right-0 top-0 flex h-12 w-[20%] justify-end">
            <FaFilter className="block sm:hidden" />
            <Select
                aria-label="Filter by Sport"
                selectionMode="multiple"
                variant="flat"
                size="md"
                placeholder="Filter Sports"
                onSelectionChange={handleSportsChange}
                className="hidden text-primary sm:block"
            >
                {sports.map(sport => (
                    <SelectItem key={sport} className="text-primary">
                        {sport}
                    </SelectItem>
                ))}
            </Select>
        </div>
    )
}

export default Filter
