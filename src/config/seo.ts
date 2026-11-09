/** Search metadata for the official public website. Keep canonical URLs consistent. */
import { profile } from "@/data/site";

export const SEO = {
  origin: "https://ahmedkhaledhussein.vercel.app",
  title: "المهندس أحمد خالد حسين | Ahmed Khaled Hussein — Software Engineer",
  description:
    "أحمد خالد حسين (Ahmed Khaled Hussein)، مهندس برمجيات ومطور Full Stack في القاهرة، مصر. تعرف على مشروعاته في الذكاء الاصطناعي والرؤية الحاسوبية وتطوير الويب.",
  imagePath: "/images/og-preview.png",
} as const;

export const seoUrl = (path = "/") => new URL(path, SEO.origin).toString();

/** Factual identity data only: do not add unverified press, awards or employers. */
export const getIdentitySchema = () => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${seoUrl()}#website`,
      url: seoUrl(),
      name: "Ahmed Khaled Hussein — Official Portfolio",
      description: SEO.description,
      inLanguage: ["ar", "en"],
      publisher: { "@id": `${seoUrl()}#person` },
    },
    {
      "@type": "Person",
      "@id": `${seoUrl()}#person`,
      name: profile.name,
      alternateName: ["أحمد خالد حسين", "المهندس أحمد خالد حسين", "Ahmed Khaled"],
      url: seoUrl(),
      mainEntityOfPage: { "@id": `${seoUrl()}#website` },
      image: seoUrl("/ahmed-khaled.PNG"),
      description: SEO.description,
      jobTitle: "Software Engineer & Full Stack Developer",
      knowsAbout: [
        "Full Stack Development",
        "Artificial Intelligence",
        "Computer Vision",
        "Web Development",
      ],
      sameAs: [
        profile.linkedin.url,
        profile.github.url,
        profile.instagram.url,
        profile.facebook.url,
      ],
      address: { "@type": "PostalAddress", addressLocality: "Cairo", addressCountry: "EG" },
    },
  ],
});
