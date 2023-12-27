import { useState, useEffect } from 'react';
const useOnlineStatus = () => {
    // check if online
    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        window.addEventListener('online', () => setOnlineStatus(true));
        window.addEventListener('offline', () => setOnlineStatus(false));
    }, []);
    return onlineStatus;
}

export default useOnlineStatus;