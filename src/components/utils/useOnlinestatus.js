import { useState, useEffect } from "react";

const useOnlinestatus = () => {

    const [onlinestatus, setonlinestatus] = useState(navigator.onLine);

    useEffect(() => {

        const handleOffline = () => {
            setonlinestatus(false);
        };

        const handleOnline = () => {
            setonlinestatus(true);
        };

        window.addEventListener("offline", handleOffline);
        window.addEventListener("online", handleOnline);

        // cleanup function
        return () => {
            window.removeEventListener("offline", handleOffline);
            window.removeEventListener("online", handleOnline);
        };

    }, []);

    return onlinestatus;
};

export default useOnlinestatus;
