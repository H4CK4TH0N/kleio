import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site.config";
import Link from "next/link";
import { TwitterLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import Branding from "@/components/navbar/brand";

export default function Footer() {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col py-4 lg:py-16 px-3">
      <div className="flex justify-between flex-wrap gap-5">
        <div className="space-y-8 lg:space-y-5 md:w-auto w-full flex flex-col md:items-start">
          <Branding />
          <div className="flex md:flex-col gap-3">
          <div className="flex items-center gap-3">
            <Button size="sm">
            <Link href="/dashboard">Get started</Link>
            </Button>
            <Button variant="outline" size="sm">
              <Link href="/about">Learn more</Link>
            </Button>
          </div>
          <div className="flex items-center gap-3">
            <a href={siteConfig.links.twitter} target="_blank">
              <TwitterLogoIcon className="hover:scale-105 duration-75 transition-all ease-in-out bg-muted p-2 rounded size-8 text-muted-foreground" />
            </a>
            <a href={siteConfig.links.github} target="_blank">
              <GitHubLogoIcon className="hover:scale-105 duration-75 transition-all ease-in-out bg-muted p-2 rounded size-8 text-muted-foreground" />
            </a>
          </div>
          </div>
        </div>
        <div className="flex gap-12 md:w-auto w-full">
          <div className="space-y-3 text-muted-foreground flex flex-col md:items-end">
            <h1 className="text-primary">Products</h1>
            <Link
              href="/"
              className="text-sm hover:text-secondary-foreground duration-75 transition-colors"
            >
              Kleio
            </Link>
            <Link
              href="/#extension"
              className="text-sm hover:text-secondary-foreground duration-75 transition-colors"
            >
              Kleio Extension
            </Link>
          </div>
          <div className="space-y-3 text-muted-foreground flex flex-col md:items-end">
            <h1 className="text-primary">Company</h1>
            <Link
              href="/#faqs"
              className="text-sm hover:text-secondary-foreground duration-75 transition-colors"
            >
              About
            </Link>
            <Link
              href="/docs"
              className="text-sm hover:text-secondary-foreground duration-75 transition-colors"
            >
              Docs
            </Link>
            <Link
              href="/changelog"
              className="text-sm hover:text-secondary-foreground duration-75 transition-colors"
            >
              Changelog
            </Link>
          </div>
        </div>
      </div>
      <Separator className="my-5" />
      <div className="flex md:justify-between flex-wrap justify-center text-sm text-muted-foreground">
        <p>
          © 2024{" "}
          <Link href={siteConfig.url} className="hover:underline">
            {siteConfig.name}
          </Link>
          . All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <span>
            Crafted with 💙 for <a href="https://dev.to/challenges/assemblyai" target="_blank" className="hover:underline font-semibold">AssemblyAI Challenge</a> X <a href="https://dev.to" target="_blank" className="hover:underline font-semibold">DEV</a>
          </span>
        </div>
      </div>
    </div>
  );
}
