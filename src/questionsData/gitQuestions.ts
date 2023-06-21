export const gitQuestionsData = [
  {
    id: 6001,
    question: "What is Git?",
    answer:
      "Git is the most commonly used distributed version control system. It tracks the changes you make to files, and you can revert to specific versions. Git stores data as a series of snapshots, instead of a list of changes like most other VCS.",
  },
  {
    id: 6002,
    question: "What is a branch?",
    answer:
      "A branch in Git is a pointer to a specific commit. It allows you to diverge from the main line of development and work on separate code paths. Branches provide a way to isolate changes, experiment with new features, or work on different bug fixes independently without affecting the main codebase.",
  },
  {
    id: 6003,
    question: "What is a commit?",
    answer:
      "In Git, a commit represents a specific version of your project at a given point in time. When you create a commit, Git takes a snapshot of how the files look at that moment and stores a reference to that snapshot. Each commit has a unique checksum generated using the SHA-1 algorithm. It also includes metadata such as the author, commit message, and timestamps.",
  },
  {
    id: 6004,
    question: "What is an untracked file?",
    answer:
      "An untracked file in Git refers to a new or modified file that has not yet been added to the staging area. Git keeps track of changes to tracked files, but untracked files are not included in Git's version control system until they are explicitly added using the git add command.",
  },
  {
    id: 6005,
    question: "What is GitLab?",
    answer:
      "GitLab is a web-based DevOps platform that provides version control, continuous integration/continuous delivery (CI/CD) pipelines, and project management features. It offers a collaborative environment for software development teams, enabling them to manage their code repositories, track issues, and collaborate on projects.",
  },
  {
    id: 6006,
    question: "What are the three possible statuses for changes in Git?",
    answer:
      "The three possible statuses for changes in Git are:\n\n- Modified: Indicates that a file has been modified since the last commit.\n- Tracked: Refers to changes in files that are being tracked by Git.\n- Staged: Represents changes that have been added to the staging area and are ready to be committed.",
  },
  {
    id: 6007,
    question: "How do you resolve conflicts while merging branches?",
    answer:
      "When conflicts occur during a merge operation in Git, you need to manually resolve them. This typically involves identifying the conflicting sections in the affected files and modifying them to create a desired final version that integrates both sets of changes. The resolution process may include editing the conflicting sections, removing conflicting markers, and ensuring the merged code functions correctly. Once the conflicts are resolved, the changes can be staged and committed to finalize the merge.",
  },
  {
    id: 6008,
    question: "What is the purpose of a remote repository in Git?",
    answer:
      "A remote repository in Git is a copy of the project repository that is hosted on a server or a different location. It allows multiple developers to collaborate on the same project by sharing their changes and syncing them with others. Remote repositories enable version control across different machines and facilitate team collaboration in distributed development environments.",
  },
  {
    id: 6009,
    question: "How do you create a new branch in Git?",
    answer:
      "To create a new branch in Git, you can use the git branch command followed by the desired branch name. For example, to create a branch called 'feature-branch', you would run 'git branch feature-branch'. This creates a new branch pointing to the same commit as the current branch. To switch to the new branch, you can use the git checkout command: 'git checkout feature-branch'.",
  },
  {
    id: 6010,
    question: "What is the purpose of rebasing in Git?",
    answer:
      "Rebasing is a Git operation used to integrate changes from one branch onto another. It allows you to apply the commits of one branch on top of another branch, resulting in a linear commit history. Rebasing can be used to incorporate the latest changes from a remote branch into your local branch and keep the commit history clean and concise.",
  },
];
