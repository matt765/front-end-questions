import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const useLayout = () => {
  const [routeChangeCount, setRouteChangeCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setRouteChangeCount((count) => count + 1);
    };
    const handleRouteChangeComplete = () => {
      setRouteChangeCount((count) => Math.max(0, count - 1));
    };
    const handleRouteChangeError = () => {
      setRouteChangeCount((count) => Math.max(0, count - 1));
    };
    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    router.events.on("routeChangeError", handleRouteChangeError);
    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
      router.events.off("routeChangeError", handleRouteChangeError);
    };
  }, []);

  return {
    isRouteChanging: routeChangeCount > 0,
  };
};
