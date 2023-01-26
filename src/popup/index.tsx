import React from "react";
import { createRoot } from "react-dom/client";
import "../assets/css/tailwind.css";
import Popup from "./Popup";

function init() {
    const appContainer = document.createElement("div");
    document.body.appendChild(appContainer);

    if (!appContainer) {
        throw new Error("Cannot find appContainer");
    }

    const root = createRoot(appContainer);
    root.render(<Popup />);
}

init()