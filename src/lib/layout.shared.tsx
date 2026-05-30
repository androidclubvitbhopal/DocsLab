// src/lib/layout.shared.tsx
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { appName, gitConfig } from "./shared";
import { BookmarksPanel } from "@/components/bookmarks-panel";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: appName,
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    // Inject the bookmarks panel into the nav actions area
    links: [
      {
        type: "custom",
        children: <BookmarksPanel />,
      },
    ],
  };
}
