import React from "react";
import { useStorageListener } from "./useStorageListener";
import './ChengeAlert.css'

function ChangeAlert({ sincronize }) {
    const { show, toggleShow } = useStorageListener(sincronize);
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

export { ChangeAlert };