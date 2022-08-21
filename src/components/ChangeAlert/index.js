import React from "react";
import { withStorageListener } from "./withStorageListener";
import './ChengeAlert.css'

function ChangeAlert({ show, toggleShow }) {
    if (show) {
        return (
            <div className="wrapper-bg">
                <div className="wrapper">
                    <p className="alert-text">
                        Look like you have changes
                        in another tab or window,
                        you need to reload
                    </p>
                    <button
                        className="alert-button"
                        onClick={() => toggleShow(false)}
                    >
                        Reload
                    </button>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener };