<div align="center">
  <img src="https://res.cloudinary.com/dcauyzkfh/image/upload/v1779991112/DocsLab_Banner_v1lsi4.png" alt="DocsLab Banner" width="100%" />

  <h1>DocsLab</h1>
  <p>The ultimate open-source developer knowledge hub for students and contributors.</p>

  <p>
    <a href="https://nextjs.org"><img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" alt="Next.js" /></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" /></a>
    <a href="https://github.com/androidclubvitbhopal/DocsLab/stargazers"><img src="https://img.shields.io/badge/Open%20Source-%E2%9D%A4-3DDC84?style=for-the-badge" alt="Open Source Love" /></a>
    <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="License" /></a>
    <a href="https://github.com/androidclubvitbhopal/DocsLab/pulls"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge" alt="PRs Welcome" /></a>
    <a href="https://github.com/androidclubvitbhopal/DocsLab/actions"><img src="https://img.shields.io/github/actions/workflow/status/androidclubvitbhopal/DocsLab/ci.yml?style=for-the-badge" alt="Build Status" /></a>
  </p>

  <p>
    <a href="#getting-started"><strong>Documentation</strong></a> ·
    <a href="CONTRIBUTING.md"><strong>Contributing Guide</strong></a> ·
    <a href="#community--support"><strong>Discord</strong></a> ·
    <a href="https://github.com/androidclubvitbhopal/DocsLab/issues"><strong>Open Issues</strong></a>
  </p>
</div>

---

## 📖 About The Project

DocsLab is an open-source initiative built by **Android Club VIT Bhopal**.

Our primary goal is to preserve, organize, and share high-quality technical knowledge. By building a comprehensive student developer ecosystem, we want to help beginners take their first steps into open source while providing advanced resources for experienced developers. Whether you're learning to center a `div`, mastering prompt engineering, or making your first pull request, DocsLab is here to help.

## ✨ Features

- 📘 **Open-source contributor guides:** Learn Git, GitHub, and OSS etiquette.
- 🤖 **Prompt engineering resources:** Unlock the power of LLMs.
- 📱 **Android development docs:** Master native and cross-platform mobile dev.
- 🌐 **Web development docs:** React, Next.js, and modern tooling.
- ⌨️ **GitHub workflows & shortcuts:** Boost your productivity.
- 📄 **MDX-powered documentation:** Rich, interactive content.
- 🔍 **Search support:** Find what you need instantly.
- 🌙 **Dark mode:** Beautiful themes tailored for developers.
- 📱 **Responsive design:** Flawless experience on all devices.
- 🤝 **Community-driven content:** Built by students, for students.

## 🛠 Tech Stack

### Frontend

- **[Next.js 15](https://nextjs.org/)** - React framework for the web
- **[TypeScript](https://www.typescriptlang.org/)** - Strongly typed JavaScript
- **[TailwindCSS v4](https://tailwindcss.com/)** - Utility-first CSS framework

### Documentation

- **[Fumadocs](https://fumadocs.dev/)** - Next-generation documentation framework
- **[MDX](https://mdxjs.com/)** - Markdown for the component era

### Tooling

- **ESLint & Prettier** - Code quality and formatting
- **Husky & Lint-Staged** - Git hooks automation
- **GitHub Actions** - Robust CI/CD pipelines

## 📁 Project Structure

```txt
.
├── .github/             # GitHub Actions workflows and issue templates
├── content/             # MDX documentation files and collections
├── public/              # Static assets (images, fonts, etc.)
├── src/                 # Application source code (Next.js app router)
│   ├── app/             # App routing and layouts
│   ├── components/      # Reusable UI components
│   └── lib/             # Utility functions and shared config
├── package.json         # Project dependencies and scripts
└── README.md            # You are here!
```

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Git](https://git-scm.com/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/androidclubvitbhopal/DocsLab.git
   cd DocsLab
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

## 🤝 Contribution Guide

We ❤️ contributions! Whether it's a typo fix, a new tutorial, or a feature enhancement, your help is welcome.

1. **Fork the repository** to your GitHub account.
2. **Create a branch** for your feature or bug fix:
   ```bash
   git checkout -b feat/your-awesome-feature
   ```
3. **Commit your changes** following [Conventional Commits](https://www.conventionalcommits.org/):
   ```bash
   git commit -m "feat: added prompt engineering guide"
   ```
4. **Push your branch** to your fork:
   ```bash
   git push origin feat/your-awesome-feature
   ```
5. **Open a Pull Request** against our `main` branch.

<details>
<summary>💡 Looking for a place to start?</summary>
<br />
Check out our <a href="https://github.com/androidclubvitbhopal/DocsLab/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22">good first issues</a> or filter by the <code>beginner</code> label. Please review our <a href="CONTRIBUTING.md">CONTRIBUTING.md</a> for full guidelines on contribution etiquette.
</details>

## 📚 Documentation Sections

Our knowledge base is divided into several key areas:

- **[Open Source](/content/docs/open-source)** - Get started with OSS.
- **[Prompt Engineering](/content/docs/prompt-engineering)** - Learn to communicate with AI.
- **[Android](/content/docs/android)** - Guides and tutorials for mobile development.
- **[Web Development](/content/docs/web-dev)** - Frontend and backend web technologies.
- **[Shortcuts](/content/docs/shortcuts)** - IDE and tool productivity tips.
- **[Contributor Guides](/content/docs/contributor-guide)** - How to write and publish docs.

## ⚙️ GitHub Workflow

To maintain high code and content quality, we enforce the following workflows:

- **CI Checks:** Every PR runs through automated formatting, linting, type-checking, and MDX validation.
- **Branch Protections:** The `main` branch is protected. Code can only be merged via Pull Requests.
- **PR Reviews:** At least one maintainer review is required before merging.
- **Conventional Commits:** We enforce semantic commit messages via Husky hooks.

## 💬 Community & Support

Join our community to ask questions, share your work, and connect with other developers!

- 👾 **Discord:** [Join our Server](#) _(Link coming soon)_
- 💡 **GitHub Discussions:** [Ask questions or share ideas](https://github.com/androidclubvitbhopal/DocsLab/discussions)
- 🐛 **Issues:** [Report bugs or request features](https://github.com/androidclubvitbhopal/DocsLab/issues)
- 🏢 **Organization:** [Android Club VIT Bhopal](https://github.com/androidclubvitbhopal)

## 🗺 Roadmap

We have exciting plans for the future of DocsLab:

- AI-powered docs search and chat
- Interactive in-browser coding tutorials
- Structured learning tracks and pathways
- Contributor leaderboard
- Community articles and blog posts
- Enhanced search improvements

## 💎 Contributors

A massive thank you to everyone who has contributed to this project!

<a href="https://github.com/androidclubvitbhopal/DocsLab/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=androidclubvitbhopal/DocsLab" alt="Contributors" />
</a>

## 📜 License

This project is licensed under the [MIT License](LICENSE).

## 🛡 Maintainers

| <a href="https://github.com/androidclubvitbhopal"><img src="https://avatars.githubusercontent.com/u/108920198?v=4" width="50" height="50" style="border-radius: 50%" /></a> |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                       **Android Club VITB Core Team**                                                                       |

---

<div align="center">
  <p>Built with ❤️ by Android Club VIT Bhopal</p>
</div>
