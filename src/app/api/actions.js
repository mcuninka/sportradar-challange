"use server"

export async function createEvent(formData) {
    console.log(formData)
    return { success: true, message: "Event created" }
}
