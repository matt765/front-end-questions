import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const useLayout = () => {
  const [isRouteChanging, setIsRouteChanging] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsRouteChanging(true);
    };
    const handleRouteChangeComplete = () => {
      setIsRouteChanging(false);
    };
    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, []);

  return {
    isRouteChanging,
  };
};

export default useLayout;
