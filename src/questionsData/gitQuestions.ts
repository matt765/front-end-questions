import { Question } from "@/components/questions/types";

export const gitQuestionsData: Question[] = [
  {
    id: 6001,
    question: "Explain what Git is and its primary purpose.",
    answer: [
      {
        type: "text",
        content:
          "Git is a distributed version control system widely used for tracking changes in source code during software development. Unlike other version control systems, Git stores data as a series of snapshots rather than as a list of changes. This approach allows developers to easily track the history of their project, revert to previous versions, and collaborate with others.",
      },
      {
        type: "code",
        language: "shell",
        content: `// Check the current Git status
$ git status

// View commit history
$ git log`,
      },
    ],
  },
  {
    id: 6002,
    question: "Describe what a branch is in Git and its benefits.",
    answer: [
      {
        type: "text",
        content:
          "A branch in Git is a pointer to a specific commit that allows you to work on different features or fixes independently from the main codebase. Branches enable you to isolate changes, experiment with new ideas, or develop features without affecting the stable version of your project. This makes it easier to manage development workflows, especially in collaborative environments.",
      },
      {
        type: "code",
        language: "typescript",
        content: `// Create a new branch
$ git branch feature-branch

// Switch to the newly created branch
$ git checkout feature-branch`,
      },
      {
        type: "text",
        content:
          "Branches are essential in Git for maintaining multiple lines of development, such as working on different features simultaneously or preparing releases.",
      },
    ],
  },
  {
    id: 6003,
    question: "What is a commit in Git and what information does it contain?",
    answer: [
      {
        type: "text",
        content:
          "A commit in Git represents a snapshot of your project at a specific point in time. When you make a commit, Git records the current state of the files in your repository, along with metadata such as the author, commit message, timestamp, and a unique SHA-1 hash. This commit hash allows you to reference and revert to this specific state whenever needed.",
      },
      {
        type: "code",
        language: "typescript",
        content: `// Create a commit with a message
$ git commit -m "Implement feature X"

// View details of a specific commit
$ git show <commit-hash>`,
      },
      {
        type: "text",
        content:
          "Commits serve as milestones in your project's history, enabling you to track progress, undo changes, and collaborate with others effectively.",
      },
    ],
  },
  {
    id: 6004,
    question: "What is an untracked file in Git?",
    answer: [
      {
        type: "text",
        content:
          "An untracked file in Git refers to a file that exists in your working directory but has not yet been added to the staging area. Git does not include these files in version control until you explicitly add them using the git add command.",
      },
      {
        type: "code",
        language: "typescript",
        content: `// View untracked files
$ git status

// Add an untracked file to the staging area
$ git add filename.txt`,
      },
      {
        type: "text",
        content:
          "Untracked files are useful for seeing which new files are present in your working directory but haven't yet been committed to the repository.",
      },
    ],
  },
  {
    id: 6005,
    question: "Explain what GitLab is and its primary features.",
    answer: [
      {
        type: "text",
        content:
          "GitLab is a web-based DevOps platform that offers version control, continuous integration/continuous delivery (CI/CD) pipelines, and project management features. It provides a collaborative environment for development teams to manage code repositories, track issues, and automate the software development lifecycle.",
      },
      {
        type: "unordered-list",
        content:
          "Version control with Git repositories\nIntegrated CI/CD for automated testing and deployment\nIssue tracking and project management tools\nCode review and merge request capabilities\nSecurity and compliance management",
      },
      {
        type: "text",
        content:
          "GitLab is widely used in both open-source and enterprise environments to streamline software development and enhance collaboration among team members.",
      },
    ],
  },
  {
    id: 6006,
    question: "What are the three possible statuses for changes in Git?",
    answer: [
      {
        type: "text",
        content: "The three possible statuses for changes in Git are:",
      },
      {
        type: "unordered-list",
        content:
          "Modified: Files have been changed but not yet staged\nStaged: Changes have been added to the staging area and are ready to be committed\nUntracked: New files that have not yet been added to the staging area",
      },
      {
        type: "code",
        language: "typescript",
        content: `// Check the status of files in your repository
$ git status`,
      },
      {
        type: "text",
        content:
          "Understanding these statuses helps you manage your changes and prepare them for commits effectively.",
      },
    ],
  },
  {
    id: 6007,
    question: "How do you resolve conflicts while merging branches in Git?",
    answer: [
      {
        type: "text",
        content:
          "To resolve conflicts during a Git merge, you need to manually edit the conflicting files to incorporate the necessary changes from both branches. You can do this directly in the command line or use graphical tools/IDEs that offer merge conflict resolution interfaces. After resolving the conflicts, stage and commit the resolved files.",
      },
      {
        type: "code",
        language: "typescript",
        content: `// Start the merge process
$ git merge feature-branch

// If conflicts arise, edit the conflicting files and resolve them

// After resolving conflicts, add the resolved files to the staging area
$ git add resolved-file.txt

// Complete the merge by committing the changes
$ git commit -m "Resolve merge conflicts"`,
      },
      {
        type: "text",
        content:
          "Proper conflict resolution ensures that your codebase remains functional and that all necessary changes are integrated correctly.",
      },
    ],
  },
  {
    id: 6008,
    question: "What is the purpose of a remote repository in Git?",
    answer: [
      {
        type: "text",
        content:
          "A remote repository in Git is a version of your repository hosted on a server or a different machine, allowing multiple developers to collaborate on the same project. Remote repositories enable version control across different locations, making it easier to share changes and keep your project synchronized.",
      },
      {
        type: "code",
        language: "typescript",
        content: `// Add a remote repository
$ git remote add origin https://github.com/user/repo.git

// Push changes to the remote repository
$ git push origin main`,
      },
      {
        type: "text",
        content:
          "Remote repositories are essential for distributed development, allowing teams to collaborate effectively, share their work, and manage versions across different machines.",
      },
    ],
  },
  {
    id: 6009,
    question: "How do you create and switch to a new branch in Git?",
    answer: [
      {
        type: "text",
        content:
          "To create a new branch in Git, use the git branch command followed by the branch name. You can then switch to the new branch using git checkout or git switch.",
      },
      {
        type: "code",
        language: "typescript",
        content: `// Create a new branch
$ git branch feature-branch

// Switch to the new branch
$ git checkout feature-branch

// Alternatively, create and switch in one command
$ git switch -c feature-branch`,
      },
      {
        type: "text",
        content:
          "Creating branches allows you to work on separate features or fixes without affecting the main codebase, making it easier to manage and merge changes later.",
      },
    ],
  },
  {
    id: 6010,
    question:
      "What is the purpose of rebasing in Git, and how is it different from merging?",
    answer: [
      {
        type: "text",
        content:
          "Rebasing in Git is a way to apply changes from one branch onto another, resulting in a linear commit history. Unlike merging, which creates a new commit to represent the combination of changes, rebasing rewrites the commit history to incorporate changes from one branch onto another, making the history cleaner and easier to follow.",
      },
      {
        type: "code",
        language: "typescript",
        content: `// Rebase the current branch onto main
$ git checkout feature-branch
$ git rebase main

// After resolving any conflicts, continue the rebase
$ git rebase --continue`,
      },
      {
        type: "text",
        content:
          "Rebasing is particularly useful for keeping a project's commit history clean and for integrating the latest changes from the main branch into your feature branches without creating unnecessary merge commits.",
      },
    ],
  },
  {
    id: 6011,
    question: "What is the difference between git merge and git rebase?",
    answer: [
      {
        type: "text",
        content:
          "Both git merge and git rebase are used to integrate changes from one branch into another, but they do so in different ways. git merge creates a new commit that combines the changes from both branches, preserving the history of both. On the other hand, git rebase moves or applies your commits on top of another branch, creating a linear history by avoiding merge commits.",
      },
      {
        type: "code",
        language: "typescript",
        content: `// Merging feature-branch into main
$ git checkout main
$ git merge feature-branch

// Rebasing feature-branch onto main
$ git checkout feature-branch
$ git rebase main`,
      },
      {
        type: "text",
        content:
          "Use git merge when you want to preserve the history of all branches, and git rebase when you prefer a cleaner, linear commit history.",
      },
    ],
  },
  {
    id: 6012,
    question: "How do you revert a commit in Git?",
    answer: [
      {
        type: "text",
        content:
          "To revert a commit in Git, you can use the git revert command, which creates a new commit that undoes the changes introduced by a previous commit. This method is preferred over git reset for undoing changes in a shared history because it doesn't alter the commit history.",
      },
      {
        type: "code",
        language: "typescript",
        content: `// Revert a specific commit by its hash
$ git revert <commit-hash>

$ git revert 7a1f9d2`,
      },
      {
        type: "text",
        content:
          "Reverting is a safe way to undo changes because it preserves the commit history and can be easily traced.",
      },
    ],
  },
  {
    id: 6013,
    question: "How do you stash changes in Git, and why is it useful?",
    answer: [
      {
        type: "text",
        content:
          "Stashing in Git allows you to save your uncommitted changes without committing them, so you can switch branches or perform other operations without losing your work. The git stash command temporarily saves your changes and leaves your working directory clean.",
      },
      {
        type: "code",
        language: "typescript",
        content: `// Stash your changes
$ git stash

// Apply the stashed changes
$ git stash apply

// List all stashes
$ git stash list`,
      },
      {
        type: "text",
        content:
          "Stashing is particularly useful when you need to quickly switch contexts or when you are not ready to commit your changes but want to work on something else.",
      },
    ],
  },
  {
    id: 6014,
    question: "How do you clone a Git repository, and what does it do?",
    answer: [
      {
        type: "text",
        content:
          "Cloning a Git repository means creating a copy of a remote repository on your local machine. The git clone command copies all the data, including the commit history, branches, and tags, from the remote repository to your local system.",
      },
      {
        type: "code",
        language: "typescript",
        content: `// Clone a remote repository
$ git clone https://github.com/user/repo.git

// Clone with a specific branch
$ git clone -b branch-name https://github.com/user/repo.git`,
      },
      {
        type: "text",
        content:
          "Cloning is the first step in contributing to an existing project, as it gives you a complete local version of the repository to work with.",
      },
    ],
  },
  {
    id: 6015,
    question:
      "What is the purpose of git pull, and how does it differ from git fetch?",
    answer: [
      {
        type: "text",
        content:
          "git pull is a command that fetches changes from a remote repository and immediately tries to merge them into your current branch. It is a combination of git fetch, which downloads new data from the remote repository, and git merge, which integrates the changes into your working branch.",
      },
      {
        type: "code",
        language: "typescript",
        content: `// Fetch changes from the remote repository
$ git fetch

// Merge the fetched changes into your current branch
$ git merge origin/main

// Pull in one step
$ git pull origin main`,
      },
      {
        type: "text",
        content:
          "git fetch allows you to review changes before integrating them, while git pull automatically merges them, which can sometimes lead to conflicts. Use git pull when you want to directly update your branch with the latest changes from the remote repository.",
      },
    ],
  },
];
