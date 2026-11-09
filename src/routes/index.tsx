import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Stack } from "@/components/sections/stack";
import { Timeline } from "@/components/sections/timeline";
import { PortfolioFolders } from "@/components/sections/portfolio-folders";
import { Awards } from "@/components/sections/awards";
import { Work } from "@/components/sections/work";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { SEO, getIdentitySchema, seoUrl } from "@/config/seo";
import { LanguageProvider, useLanguage } from "@/i18n/language";
import { useEntrance } from "@/lib/entrance";
import { useImageProtection } from "@/hooks/use-image-protection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SEO.title },
      { name: "description", content: SEO.description },
      { name: "author", content: "Ahmed Khaled Hussein" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: SEO.title },
      { property: "og:description", content: SEO.description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: seoUrl() },
      { property: "og:site_name", content: "Ahmed Khaled Hussein" },
      { property: "og:locale", content: "ar_EG" },
      { property: "og:image", content: seoUrl(SEO.imagePath) },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Ahmed Khaled Hussein — official portrait" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SEO.title },
      { name: "twitter:description", content: SEO.description },
      { name: "twitter:image", content: seoUrl(SEO.imagePath) },
    ],
    links: [{ rel: "canonical", href: seoUrl() }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(getIdentitySchema()) }],
  }),
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <Portfolio />
    </LanguageProvider>
  );
}

function Portfolio() {
  const { language } = useLanguage();
  const entranceRef = useEntrance();
  useImageProtection();
  return (
    <div className="portfolio" data-language={language} ref={entranceRef}>
      <a className="skip-link" href="#main">
        {language === "ar" ? "تخطي إلى المحتوى" : "Skip to content"}
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <PortfolioFolders language={language} />
        <About />
        <Services />
        <Stack />
        <Timeline />
        <Awards />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
