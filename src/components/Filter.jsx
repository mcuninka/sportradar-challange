import React from "react"
import SportDropdown from "./SportDropdown"

const Filter = ({ filteredSports, setFilteredSports, className }) => {
    const handleSportsChange = selectedKeys => {
        setFilteredSports([...selectedKeys])
    }

    return (
        <SportDropdown
            ariaLabel="Filter Sports"
            selectionMode="multiple"
            size="md"
            placeholder="Filter Sports"
            selectedKeys={filteredSports}
            onSelectionChange={handleSportsChange}
            className={className}
        />
    )
}

export default Filter
