"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Bookmark, X, ExternalLink, Trash2, BookmarkX } from "lucide-react";
import { useBookmarks, type BookmarkedPage } from "./bookmark-provider";
import { cn } from "@/lib/cn";
import Link from "next/link";

function timeAgo(ms: number): string {
  const seconds = Math.floor((Date.now() - ms) / 1000);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

function BookmarkItem({
  bookmark,
  onRemove,
  onClose,
}: {
  bookmark: BookmarkedPage;
  onRemove: (url: string) => void;
  onClose: () => void;
}) {
  return (
    <div className="group relative flex flex-col gap-1 rounded-lg border border-fd-border bg-fd-card p-3 transition-colors hover:border-fd-primary/30 hover:bg-fd-card/80">
      <div className="flex items-start justify-between gap-2">
        <Link
          href={bookmark.url}
          onClick={onClose}
          className="flex-1 min-w-0 text-sm font-medium text-fd-foreground hover:text-fd-primary transition-colors leading-snug line-clamp-2"
        >
          {bookmark.title}
        </Link>
        <button
          onClick={() => onRemove(bookmark.url)}
          aria-label="Remove bookmark"
          className="shrink-0 rounded p-0.5 text-fd-muted-foreground opacity-0 group-hover:opacity-100 hover:text-destructive transition-all"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>

      {bookmark.description && (
        <p className="text-xs text-fd-muted-foreground line-clamp-2 leading-relaxed">
          {bookmark.description}
        </p>
      )}

      <div className="flex items-center justify-between mt-1">
        <span className="text-xs text-fd-muted-foreground/60">
          {timeAgo(bookmark.savedAt)}
        </span>
        <Link
          href={bookmark.url}
          onClick={onClose}
          className="flex items-center gap-1 text-xs text-fd-muted-foreground hover:text-fd-primary transition-colors"
          aria-label="Open guide"
        >
          <ExternalLink className="h-3 w-3" />
          <span>Open</span>
        </Link>
      </div>
    </div>
  );
}

export function BookmarksPanel() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { bookmarks, removeBookmark, clearAll } = useBookmarks();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const count = bookmarks.length;

  const panelContent = (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          aria-hidden
        />
      )}

      {/* Drawer panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Saved guides"
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-full max-w-sm",
          "flex flex-col bg-fd-background border-l border-fd-border shadow-2xl",
          "transition-transform duration-300 ease-in-out",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-fd-border">
          <div className="flex items-center gap-2">
            <Bookmark className="h-4 w-4 text-fd-primary fill-fd-primary" />
            <h2 className="text-sm font-semibold">Saved Guides</h2>
            {count > 0 && (
              <span className="rounded-full bg-fd-muted px-1.5 py-0.5 text-xs text-fd-muted-foreground font-medium">
                {count}
              </span>
            )}
          </div>
          <div className="flex items-center gap-1">
            {count > 0 && (
              <button
                onClick={clearAll}
                title="Clear all bookmarks"
                className="rounded p-1.5 text-xs text-fd-muted-foreground hover:text-destructive hover:bg-fd-accent transition-colors flex items-center gap-1"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            )}
            <button
              onClick={() => setOpen(false)}
              aria-label="Close saved guides panel"
              className="rounded p-1.5 text-fd-muted-foreground hover:text-fd-foreground hover:bg-fd-accent transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto overscroll-contain p-4">
          {count === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-3 text-center py-12">
              <BookmarkX className="h-10 w-10 text-fd-muted-foreground/40" />
              <div>
                <p className="text-sm font-medium text-fd-foreground">
                  No saved guides yet
                </p>
                <p className="text-xs text-fd-muted-foreground mt-1 max-w-[200px]">
                  Click the Save button on any guide to bookmark it for later.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              {bookmarks.map((bookmark) => (
                <BookmarkItem
                  key={bookmark.url}
                  bookmark={bookmark}
                  onRemove={removeBookmark}
                  onClose={() => setOpen(false)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {count > 0 && (
          <div className="border-t border-fd-border px-4 py-2.5">
            <p className="text-xs text-fd-muted-foreground text-center">
              Saved locally in your browser
            </p>
          </div>
        )}
      </div>
    </>
  );

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setOpen(true)}
        aria-label={`Saved guides (${count})`}
        title="Saved guides"
        className={cn(
          "relative inline-flex items-center justify-center rounded-md p-2",
          "text-fd-muted-foreground hover:text-fd-foreground",
          "hover:bg-fd-accent transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-primary/50",
        )}
      >
        <Bookmark className="h-4 w-4" />
        {count > 0 && (
          <span
            aria-hidden
            className={cn(
              "absolute -top-0.5 -right-0.5 min-w-[16px] h-4 px-1",
              "flex items-center justify-center rounded-full",
              "bg-fd-primary text-fd-primary-foreground text-[10px] font-bold leading-none",
            )}
          >
            {count > 99 ? "99+" : count}
          </span>
        )}
      </button>

      {/* Render the panel in a portal if mounted */}
      {mounted && createPortal(panelContent, document.body)}
    </>
  );
}
