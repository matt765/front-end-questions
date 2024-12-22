import useConsoleStore from "@/store/consoleStore";
import useLayoutStore from "@/store/layoutStore";
import { useQuestionStore } from "@/store/questionStore";
import { useSettingsStore } from "@/store/settingsStore";
import { useTimerStore } from "@/store/timerStore";

export const resetAppState = () => {
  useConsoleStore.setState({
    isConsoleOpen: false,
    consoleCode: "",
  });

  useLayoutStore.setState({
    isNavVisible: true,
    isMobileNavVisible: false,
  });

  useQuestionStore.setState({
    HTML: [],
    CSS: [],
    JavaScript: [],
    TypeScript: [],
    React: [],
    Git: [],
    Optimization: [],
    General: [],
    Components: [],
    Algorithms: [],
    HTMLCheckboxes: [],
    CSSCheckboxes: [],
    JavaScriptCheckboxes: [],
    TypeScriptCheckboxes: [],
    ReactCheckboxes: [],
    GitCheckboxes: [],
    OptimizationCheckboxes: [],
    GeneralCheckboxes: [],
    AlgorithmsCheckboxes: [],
    ComponentsCheckboxes: [],
    showOnlySelected: {
      HTML: false,
      CSS: false,
      JavaScript: false,
      TypeScript: false,
      React: false,
      Git: false,
      Optimization: false,
      General: false,
      Algorithms: false,
      Components: false,
    },
    isLoading: false,
  });

  useSettingsStore.setState({
    isTimerInTopBar: false,
    isTimerSoundEnabled: false,
    isTimerInfiniteEnabled: false,
    isArrowNavigationEnabled: false,
    isConsoleEnabled: false,
    isConsoleVisibleOnAllTabs: false,
    isAnswerBackgroundVisible: false,
    isSettingsDrawerOpen: false,
  });

  useTimerStore.setState({
    time: 25 * 60,
    isRunning: false,
    isStudyMode: true,
    isPomodoroModalOpen: false,
  });
};
