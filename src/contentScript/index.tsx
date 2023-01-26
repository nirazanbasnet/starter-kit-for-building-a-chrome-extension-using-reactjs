import React from "react"
import { createRoot } from "react-dom/client"
import "../assets/css/tailwind.css"
import { ContentScript } from "./ContentScript";


async function init() {
    const appContainer = document.createElement("div");
    document.body.appendChild(appContainer);

    if (!appContainer) {
        throw new Error("Cannot find appContainer");
    }

    const root = createRoot(appContainer);
    root.render(<ContentScript  />)
}

init()
