"use client";

import { Bookmark } from "lucide-react";
import { useBookmarks } from "./bookmark-provider";
import { cn } from "@/lib/cn";
import { usePathname } from "next/navigation";

interface BookmarkButtonProps {
  title: string;
  description?: string;
  /** Override the URL; defaults to current pathname */
  url?: string;
  className?: string;
}

export function BookmarkButton({
  title,
  description,
  url,
  className,
}: BookmarkButtonProps) {
  const pathname = usePathname();
  const resolvedUrl = url ?? pathname;

  const { isBookmarked, toggleBookmark } = useBookmarks();
  const saved = isBookmarked(resolvedUrl);

  const handleClick = () => {
    toggleBookmark({
      url: resolvedUrl,
      title,
      description,
      savedAt: Date.now(),
    });
  };

  return (
    <button
      onClick={handleClick}
      aria-label={saved ? "Remove bookmark" : "Save for later"}
      title={saved ? "Remove bookmark" : "Save for later"}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-medium transition-all duration-150",
        "border border-fd-border bg-fd-background",
        "hover:border-fd-primary/60 hover:bg-fd-primary/5",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-primary/50",
        saved
          ? "text-fd-primary border-fd-primary/40 bg-fd-primary/8"
          : "text-fd-muted-foreground",
        className,
      )}
    >
      <Bookmark
        className={cn(
          "h-4 w-4 transition-all duration-150",
          saved ? "fill-fd-primary stroke-fd-primary" : "fill-none",
        )}
      />
      <span className="select-none">{saved ? "Saved" : "Save"}</span>
    </button>
  );
}
