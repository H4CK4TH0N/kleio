import { pages } from "#site/content"
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";
import { notFound } from "next/navigation";

export default function ChangelogPage() {
  const page = pages.find(p => p.slugAsParams === "changelog");
  if (!page) {
    notFound();
  }
  
  return (
    <div className="w-full max-w-5xl mx-auto my-7">
      <h1 className="head-text-sm">Changelog</h1>
      <MDXContentRenderer code={page.body} />
    </div>
  )
}