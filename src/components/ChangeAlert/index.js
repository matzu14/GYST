import React from "react";
import { withStorageListener } from "./withStorageListener";
import './ChengeAlert.css'

function ChangeAlert({ show, toggleShow }) {
    if (show) {
        return (
        <div className="wrapper">
            <p className="alert-text">New changes</p>
            <button
                className="alert-button"
                onClick={() => toggleShow(false)}
            >
                Reload information
            </button>
        </div>
        )
    } else {
        return null;
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener };