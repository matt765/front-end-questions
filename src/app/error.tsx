"use client";

import styles from "../components/common/styles/Errors.module.scss";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className={styles.errorContainer}>
      <p className={styles.errorMessage}>Error: {error.message}</p>
      <div className={styles.errorButtonWrapper}>
        <button onClick={() => reset()} className={styles.errorButton}>
          Try again
        </button>
      </div>
    </div>
  );
};
export default Error;
