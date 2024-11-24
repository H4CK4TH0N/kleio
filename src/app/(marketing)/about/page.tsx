import { pages } from "#site/content"
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";
import { siteConfig } from "@/config/site.config";
import { notFound } from "next/navigation";

export default function AboutPage() {
  const page = pages.find(p => p.slugAsParams === "about");
  if (!page) {
    notFound();
  }
  
  return (
    <div className="w-full max-w-5xl mx-auto my-7">
      <h1 className="head-text-sm">About {siteConfig.name}</h1>
      <MDXContentRenderer code={page.body} />
    </div>
  )
}