import { useEffect, useState } from "react";
import Loader from "./Loader";
import { useNetworkSpeed } from "../../hooks/useNetworkSpeed";

export default function SmartSuspenseFallback() {
  const isSlowNetwork = useNetworkSpeed();
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (!isSlowNetwork) return;

    const timer = setTimeout(() => {
      setShowLoader(true);
    }, 400); // show loader ONLY if loading takes time

    return () => clearTimeout(timer);
  }, [isSlowNetwork]);

  if (!showLoader) return null;

  return <Loader />;
}
