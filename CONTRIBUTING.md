# Contributing to DocsLab

First off, thank you for considering contributing to DocsLab! It's people like you that make Android Club VITB such a great community.

## Development Setup

1. **Fork** the repo on GitHub.
2. **Clone** the project to your own machine.
3. **Install dependencies:** `npm install`
4. **Run the dev server:** `npm run dev`

## Documentation Structure

DocsLab is organized into structured learning tracks inside the `content/docs/` directory:

- `open-source/`
- `contributor-guide/`
- `android/`
- `web-dev/`
- `prompt-engineering/`
- `shortcuts/`
- `projects/`

When adding new content, find the most appropriate category folder and add your `.mdx` file there. If you're unsure, feel free to ask in an issue.

For detailed instructions on writing documentation with MDX, please read our [Documentation Contribution Guide](./content/docs/contributor-guide/writing-documentation.mdx) or view it live on the [Contributor Hub](https://docslab.vercel.app/docs/contributor-guide).

## Branching Strategy

- Always create a new branch from `main` for your work.
- Use descriptive branch names: `feat/add-new-page`, `fix/typo-in-readme`.

## Commit Messages

We use Conventional Commits. The format is:
`<type>[optional scope]: <description>`

Types:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: A code change that neither fixes a bug nor adds a feature

Example: `docs: update setup instructions`

## Pull Requests

- Fill out the PR template.
- Ensure all CI checks pass.
- Request review from maintainers.
