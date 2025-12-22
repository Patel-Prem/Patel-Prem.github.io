import { useEffect, useState } from "react";

export function useNetworkSpeed() {
    const [isSlow, setIsSlow] = useState(false);

    useEffect(() => {
        const connection =
            navigator.connection ||
            navigator.mozConnection ||
            navigator.webkitConnection;

        if (!connection) return;

        const check = () => {
            const slow =
                connection.effectiveType === "2g" ||
                connection.effectiveType === "slow-2g" ||
                connection.effectiveType === "3g" ||
                connection.downlink < 1.5;

            setIsSlow(slow);
        };

        check();
        connection.addEventListener("change", check);
        return () => connection.removeEventListener("change", check);
    }, []);

    return isSlow;
}
