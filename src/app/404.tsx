"use client";

import styles from "../components/common/styles/Errors.module.scss";

const Custom404 = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className={styles.errorContainer}>
      <p className={styles.errorMessage}>{error.message}</p>
      <button onClick={() => reset()} className={styles.errorButton}>
        Try again
      </button>
    </div>
  );
};

export default Custom404;
