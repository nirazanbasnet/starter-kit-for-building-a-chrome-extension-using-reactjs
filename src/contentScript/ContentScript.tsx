import React, { FunctionComponent } from "react"

export const ContentScript: FunctionComponent = () => {
    return (
        <div className="absolute top-24 left-0 right-0 flex items-center justify-center">
            <div className="bg-white px-8 py-4 rounded-lg shadow-xl text-gray-800">
                This is a content script section
            </div>
        </div>
    )
}
