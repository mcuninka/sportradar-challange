import React, { useEffect } from "react"

const Modal = ({ setIsModalOpen, children }) => {
    // Close modal when pressing the Escape key
    useEffect(() => {
        const handleEscape = event => {
            if (event.key === "Escape") {
                setIsModalOpen(false)
            }
        }

        document.addEventListener("keydown", handleEscape)
        return () => document.removeEventListener("keydown", handleEscape)
    }, [setIsModalOpen])

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative mx-4 w-full max-w-md rounded-lg bg-white p-6 text-center text-primary shadow-lg">
                {children}
                <button
                    className="absolute right-0 top-0 p-2 font-bold hover:text-secondary"
                    onClick={() => setIsModalOpen(false)}
                    aria-label="Close modal"
                >
                    ✕
                </button>
                <button
                    className="mt-4 w-full rounded-md border border-black p-1 text-black hover:bg-red-500 hover:text-white"
                    onClick={() => setIsModalOpen(false)}
                >
                    Close
                </button>
            </div>
        </div>
    )
}

export default Modal
