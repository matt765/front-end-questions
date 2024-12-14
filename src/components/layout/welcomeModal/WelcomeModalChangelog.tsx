import { LoaderIcon } from "@/assets/icons/LoaderIcon";
import styles from "./WelcomeModal.module.scss";

interface WelcomeModalChangelogProps {
  changelog: string | null;
}

export const WelcomeModalChangelog = ({
  changelog,
}: WelcomeModalChangelogProps) => {
  return (
    <div className={styles.welcomeModalChangelog}>
      {changelog ? (
        <pre>{changelog}</pre>
      ) : (
        <div className={styles.welcomeModalChangelogLoader}>
          <LoaderIcon />
        </div>
      )}
    </div>
  );
};
