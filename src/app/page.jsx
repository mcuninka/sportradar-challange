import Calendar from "@/components/Calendar"
import React from "react"
import data from "@/sportData.json"

const HomePage = () => {
    return <Calendar events={data.data} />
}

export default HomePage
