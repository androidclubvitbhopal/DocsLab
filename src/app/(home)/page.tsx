import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-32 bg-fd-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-fd-primary/10 to-transparent pointer-events-none" />
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-fd-foreground z-10">
          Docs<span className="text-fd-primary">Lab</span>
        </h1>
        <p className="text-xl md:text-2xl text-fd-muted-foreground max-w-2xl mb-10 z-10">
          The ultimate open-source developer knowledge hub for students and
          contributors of Android Club VITB.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 z-10">
          <Link
            href="/docs/open-source"
            className="px-8 py-3 bg-fd-primary text-fd-primary-foreground font-semibold rounded-lg hover:bg-fd-primary/90 transition-colors shadow-lg"
          >
            Start Contributing
          </Link>
          <Link
            href="/docs/android"
            className="px-8 py-3 bg-fd-secondary text-fd-secondary-foreground font-semibold rounded-lg hover:bg-fd-secondary/80 transition-colors"
          >
            Read the Docs
          </Link>
        </div>
      </section>

      {/* Featured Learning Tracks */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Learning Tracks</h2>
          <p className="text-fd-muted-foreground text-lg">
            Master modern development with our curated guides.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Android Development",
              desc: "Master native and cross-platform Android dev.",
              link: "/docs/android",
            },
            {
              title: "Web Development",
              desc: "Learn React, Next.js, and modern web tools.",
              link: "/docs/web-dev",
            },
            {
              title: "Prompt Engineering",
              desc: "Unlock the power of LLMs and generative AI.",
              link: "/docs/prompt-engineering",
            },
          ].map((track, i) => (
            <Link key={i} href={track.link} className="block group">
              <div className="p-6 rounded-2xl border border-fd-border bg-fd-card hover:border-fd-primary transition-colors h-full">
                <h3 className="text-xl font-bold mb-2 group-hover:text-fd-primary transition-colors">
                  {track.title}
                </h3>
                <p className="text-fd-muted-foreground">{track.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 px-4 bg-fd-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join the Community</h2>
          <p className="text-xl text-fd-muted-foreground mb-10">
            Android Club VITB is driven by students, for students. We welcome
            contributions of all levels.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://github.com/Android-Club-VITB"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-fd-card border border-fd-border font-semibold rounded-lg hover:bg-fd-accent transition-colors"
            >
              GitHub Organization
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-fd-card border border-fd-border font-semibold rounded-lg hover:bg-fd-accent transition-colors opacity-50 cursor-not-allowed"
            >
              Discord Community (Coming Soon)
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
