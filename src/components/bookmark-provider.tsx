"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";

export interface BookmarkedPage {
  url: string;
  title: string;
  description?: string;
  savedAt: number;
}

interface BookmarkContextValue {
  bookmarks: BookmarkedPage[];
  isBookmarked: (url: string) => boolean;
  addBookmark: (page: BookmarkedPage) => void;
  removeBookmark: (url: string) => void;
  toggleBookmark: (page: BookmarkedPage) => void;
  clearAll: () => void;
}

const BookmarkContext = createContext<BookmarkContextValue | null>(null);

const STORAGE_KEY = "docslab_bookmarks";

export function BookmarkProvider({ children }: { children: ReactNode }) {
  const [bookmarks, setBookmarks] = useState<BookmarkedPage[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setBookmarks(JSON.parse(stored));
      }
    } catch {
      // ignore parse errors
    }
    setHydrated(true);
  }, []);

  // Persist to localStorage whenever bookmarks change (after hydration)
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
    } catch {
      // ignore storage errors
    }
  }, [bookmarks, hydrated]);

  const isBookmarked = useCallback(
    (url: string) => bookmarks.some((b: BookmarkedPage) => b.url === url),
    [bookmarks],
  );

  const addBookmark = useCallback((page: BookmarkedPage) => {
    setBookmarks((prev: BookmarkedPage[]) => {
      if (prev.some((b: BookmarkedPage) => b.url === page.url)) return prev;
      return [page, ...prev];
    });
  }, []);

  const removeBookmark = useCallback((url: string) => {
    setBookmarks((prev: BookmarkedPage[]) =>
      prev.filter((b: BookmarkedPage) => b.url !== url),
    );
  }, []);

  const toggleBookmark = useCallback(
    (page: BookmarkedPage) => {
      if (isBookmarked(page.url)) {
        removeBookmark(page.url);
      } else {
        addBookmark(page);
      }
    },
    [isBookmarked, addBookmark, removeBookmark],
  );

  const clearAll = useCallback(() => setBookmarks([]), []);

  return (
    <BookmarkContext.Provider
      value={{
        bookmarks,
        isBookmarked,
        addBookmark,
        removeBookmark,
        toggleBookmark,
        clearAll,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}

export function useBookmarks() {
  const ctx = useContext(BookmarkContext);
  if (!ctx)
    throw new Error("useBookmarks must be used within BookmarkProvider");
  return ctx;
}
