import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [sincronizedItem, setsincronizedItem] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue))
                    parsedItem = initialValue
                } else {
                    parsedItem = JSON.parse(localStorageItem)
                }
                setItem(parsedItem);
                setLoading(false);
                setsincronizedItem(true);
            } catch (error) {
                setError(error);
            }
        }, 750);
    }, [sincronizedItem]);



    const saveItem = (newItem) => {
        try {
            const stringifiedTodos = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifiedTodos);
            setItem(newItem)
        } catch (error) {
            setError(error)
        }
    };

    const sincronizeItem = () => {
        setLoading(true);
        setsincronizedItem(false);
    }

    return {
        item,
        saveItem,
        loading,
        error,
        sincronizeItem,
    };

}

export { useLocalStorage }
