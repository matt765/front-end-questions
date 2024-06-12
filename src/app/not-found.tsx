import Link from "next/link";

import styles from "../components/common/styles/Errors.module.scss";

const NotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.notFoundTitle}>404</h1>
      <p className={styles.notFoundMessage}>Oops! Page not found</p>
      <Link href="/" className={styles.notFoundLink}>
        Go to homepage
      </Link>
    </div>
  );
};
export default NotFound;
