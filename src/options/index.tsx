import React from "react";
import { createRoot } from "react-dom/client";
import "../assets/css/tailwind.css";
import Options from "./Options"

function init() {
    const appContainer = document.createElement("div");
    document.body.appendChild(appContainer);

    if (!appContainer) {
        throw new Error("Cannot find appContainer");
    }

    const root = createRoot(appContainer);
    root.render(<Options />);
}

init()