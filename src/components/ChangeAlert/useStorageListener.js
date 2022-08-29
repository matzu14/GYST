import React from "react";

function useStorageListener(sincronize) {
    const [storageChange, setStorageChange] = React.useState(false);
    window.addEventListener('storage', (change) => {
        if (change.key === 'TODO_V1') {
            console.log(' C H A N G E D ')
            setStorageChange(true);
        }
    });

    const toggleShow = () => {
        sincronize();
        setStorageChange(false);
    };
    return {
        show: storageChange,
        toggleShow,
    };
}


export { useStorageListener };