import { useEffect, useRef, useState } from "react";

import { NavigationButton } from "./NavigationButton";
import styles from "./styles/Navigation.module.scss";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useModal } from "@/hooks/useModal";
import { QuestionCategory } from "@/store/questionStore";
import { SourcesModal } from "./SourcesModal";

const categories: QuestionCategory[] = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Git",
  "Optimization",
  "General",
];

export const Navigation = () => {
  const [isChange, setIsChange] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const { isOpen, openModal, closeModal } = useModal();
  const [categoryForSourcesModal, setCategoryForSourcesModal] =
    useState<QuestionCategory>("HTML");

  const containerRef = useRef(null);

  const isMobile = useMediaQuery("(max-width: 67.5em)");

  useEffect(() => {
    const current = containerRef.current;

    const mutationObserver = new MutationObserver(() => {
      // @ts-ignore
      if (current.scrollHeight > current.clientHeight) {
        setIsOverflowing(true);
      } else {
        setIsOverflowing(false);
      }
    });

    if (current) {
      mutationObserver.observe(current, { childList: true, subtree: true });
    }

    return () => {
      if (current) {
        mutationObserver.disconnect();
      }
    };
  }, []);

  const handleSourcesClick = (category: QuestionCategory) => {
    setCategoryForSourcesModal(category);
    openModal();
  };

  return (
    <div
      style={{
        marginRight: isOverflowing && !isMobile ? "0" : "0.5rem",
      }}
      ref={containerRef}
      className={styles.navigationWrapper}
    >
      {categories.map((category) => (
        <NavigationButton
          key={category}
          questionCategory={category}
          isChange={isChange}
          setIsChange={setIsChange}
          onSourcesClick={() => handleSourcesClick(category)}
        />
      ))}
      <div className={styles.navigationSpaceFiller}></div>
      <SourcesModal
        isOpen={isOpen}
        onClose={closeModal}
        categoryForSourcesModal={categoryForSourcesModal}
      />
    </div>
  );
};
