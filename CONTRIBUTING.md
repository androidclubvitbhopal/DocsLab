# Contributing to DocsLab 🚀

First off, thank you for considering contributing to DocsLab! It's people like you that make Android Club VIT Bhopal such a great community. We welcome contributions from everyone, whether you are a beginner making your first pull request or an experienced developer.

This document outlines the process for contributing to DocsLab.

---

## 🛠️ Development Setup

To get started locally, follow these steps:

1. **Fork the repository**
   Click the "Fork" button at the top right of this page to create your own copy of the repository.

2. **Clone your fork**

   ```bash
   git clone https://github.com/<your-username>/DocsLab.git
   cd DocsLab
   ```

3. **Install dependencies**
   We use `npm` as our package manager. Run the following command to install all necessary packages:

   ```bash
   npm install
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The page will automatically update as you edit the files.

5. **Sync with upstream** (Recommended)
   Keep your fork in sync with the original repository by adding it as a remote:
   ```bash
   git remote add upstream https://github.com/androidclubvitbhopal/DocsLab.git
   git fetch upstream
   git merge upstream/main
   ```

---

## 📂 Documentation Structure

DocsLab uses a modern documentation architecture (Next.js + Fumadocs). All content is organized into structured learning tracks inside the `content/docs/` directory:

- 📁 `open-source/` - Guides for open source contribution and Git workflows.
- 📁 `contributor-guide/` - Instructions on how to contribute to this project.
- 📁 `android/` - Android development resources and roadmaps.
- 📁 `web-dev/` - Web development guides.
- 📁 `prompt-engineering/` - Resources for AI prompting.
- 📁 `shortcuts/` - Developer productivity shortcuts.
- 📁 `projects/` - Community project showcases.

When adding new content, find the most appropriate category folder and add your `.mdx` file there. If you're unsure where something belongs, feel free to open an issue to ask!

📖 For detailed instructions on writing documentation with MDX (Markdown + JSX), please read our [Documentation Contribution Guide](./content/docs/contributor-guide/writing-documentation.mdx) or view it live on the [Contributor Hub](https://docs-lab-eta.vercel.app/docs/contributor-guide).

---

## 🌿 Branching Strategy

To keep the repository clean and organized, please follow these branching guidelines:

- Always create a new branch from `main` for your work.
- Do not commit directly to the `main` branch.
- Use descriptive branch names based on what you're working on:
  - `feat/add-new-page` (For new features or documentation pages)
  - `fix/typo-in-readme` (For fixing bugs or typos)
  - `docs/improve-contributor-guide` (For documentation structural changes)

```bash
git checkout -b <type>/<short-description>
```

---

## 📝 Commit Messages

We adhere to the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification. This leads to more readable messages that are easy to follow.

The format is:

```text
<type>[optional scope]: <description>
```

### Allowed Types:

- `feat`: A new feature or a new documentation page
- `fix`: A bug fix or typo correction
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc.)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `chore`: Updating grunt tasks, package manager configs, etc.

**Examples:**

- `docs: update setup instructions in CONTRIBUTING.md`
- `feat(android): add getting started guide for Jetpack Compose`
- `fix: resolve broken links on the prompt engineering page`

---

## 🚀 Pull Request Process

When you are ready to submit your changes, follow these steps:

1. **Push your changes to your fork**:

   ```bash
   git push origin <your-branch-name>
   ```

2. **Open a Pull Request**:
   - Go to the original [DocsLab repository](https://github.com/androidclubvitbhopal/DocsLab).
   - Click on the "Pull requests" tab.
   - Click the "New pull request" button.
   - Select your fork and branch as the source, and the original `main` branch as the destination.

3. **Fill out the PR details**:
   - Use a clear and descriptive title.
   - If your PR resolves an open issue, link it using keywords like `Closes #12` or `Fixes #9` in the description.
   - Provide a summary of the changes you've made.

4. **Review Process**:
   - Maintainers will review your PR.
   - Be open to feedback! You might be asked to make small changes. Simply push the updates to your branch, and the PR will automatically update.
   - Once approved, your changes will be merged into the project. 🎉

---

## 💬 Communication & Support

- We use our **Discord Server** for all project-related discussions.
- If you find a bug or have a suggestion, please [open an issue](https://github.com/androidclubvitbhopal/DocsLab/issues).
- Before starting on a massive change, please open an issue to discuss it with the maintainers to ensure your work aligns with the project goals.

Thank you for contributing! Let's build something awesome together. 🚀
