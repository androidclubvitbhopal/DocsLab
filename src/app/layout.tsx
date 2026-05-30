// src/app/layout.tsx
import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import { Inter } from "next/font/google";
import { BookmarkProvider } from "@/components/bookmark-provider";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          theme={{
            defaultTheme: "system",
            enableSystem: true,
            attribute: "class",
          }}
        >
          <BookmarkProvider>{children}</BookmarkProvider>
        </RootProvider>
      </body>
    </html>
  );
}
