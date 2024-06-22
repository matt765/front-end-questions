import { LoaderIcon } from "@/assets/icons/LoaderIcon";
import styles from "./styles/Loader.module.scss";
import { useEffect, useState } from "react";

export const Loader = () => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Force SVG animation restart by changing key after mount
    setKey((prevKey) => prevKey + 1);
  }, []);

  return (
    <div className={styles.loaderWrapper} key={key}>
      <div className={styles.loaderIcon}>
        <LoaderIcon />    
      </div>
    </div>
  );
};
