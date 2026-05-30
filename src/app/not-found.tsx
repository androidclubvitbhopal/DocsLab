"use client";

import React from "react";
import Link from "next/link";
import { Home, BookOpen } from "lucide-react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/lib/layout.shared";

export default function NotFound() {
  return (
    <HomeLayout {...baseOptions()}>
      <div className="flex-grow flex flex-col items-center justify-center text-center px-6 py-24 relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-fd-primary/5 blur-[80px] pointer-events-none" />

        <div className="max-w-md w-full z-10 flex flex-col items-center">
          {/* Minimal 404 Heading */}
          <h1 className="text-8xl md:text-9xl font-black tracking-tighter text-fd-primary mb-4 select-none animate-pulse">
            404
          </h1>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-fd-foreground mb-4 tracking-tight">
            Looks like this page doesn&apos;t exist.
          </h2>

          {/* Description */}
          <p className="text-base text-fd-muted-foreground mb-8 leading-relaxed max-w-sm">
            The page you&apos;re looking for may have been moved, renamed, or
            never existed.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3.5 w-full justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-fd-primary text-fd-primary-foreground font-semibold rounded-xl hover:bg-fd-primary/90 transition-all active:scale-98 shadow-[0_0_15px_rgba(61,220,132,0.15)] hover:shadow-[0_0_20px_rgba(61,220,132,0.3)] text-sm"
              id="go-home-btn"
            >
              <Home className="h-4 w-4" />
              Go Home
            </Link>
            <Link
              href="/docs"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-accent border border-fd-border font-semibold rounded-xl transition-all active:scale-98 text-sm"
              id="browse-docs-btn"
            >
              <BookOpen className="h-4 w-4" />
              Browse Documentation
            </Link>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}
