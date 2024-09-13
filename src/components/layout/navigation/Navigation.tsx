import { useRef, useState } from "react";

import { NavigationButton } from "./NavigationButton";
import styles from "./styles/Navigation.module.scss";
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
  // const [isOverflowing, setIsOverflowing] = useState(false);
  const { isOpen, openModal, closeModal } = useModal();
  const [categoryForSourcesModal, setCategoryForSourcesModal] =
    useState<QuestionCategory>("HTML");

  const containerRef = useRef(null);

  // const isMobile = useMediaQuery("(max-width: 67.5em)");

  // Effect made to ensure navigation scrollbar is correctly displayed
  // useEffect(() => {
  //   const current = containerRef.current;

  //   const mutationObserver = new MutationObserver(() => {
  //     // @ts-ignore
  //     if (current.scrollHeight > current.clientHeight) {
  //       setIsOverflowing(true);
  //     } else {
  //       setIsOverflowing(false);
  //     }
  //   });

  //   if (current) {
  //     mutationObserver.observe(current, { childList: true, subtree: true });
  //   }

  //   return () => {
  //     if (current) {
  //       mutationObserver.disconnect();
  //     }
  //   };
  // }, []);

  const handleSourcesClick = (category: QuestionCategory) => {
    setCategoryForSourcesModal(category);
    openModal();
  };

  return (
    <>
      <div
        // style={{
        //   marginRight: isOverflowing && !isMobile ? "0" : "0.5rem",
        // }}
        ref={containerRef}
        className={`${styles.navigationWrapper} navigationWrapper`}
      >
        {categories.map((category) => (
          <NavigationButton
            key={category}
            questionCategory={category}
            onSourcesClick={() => handleSourcesClick(category)}
          />
        ))}
        <div className={styles.navigationSpaceFiller}></div>
      </div>
      <SourcesModal
        isOpen={isOpen}
        onClose={closeModal}
        categoryForSourcesModal={categoryForSourcesModal}
      />
    </>
  );
};
