"use client";

import { Icons } from "@/components/icons"
import ButtonArrow from "@/components/ui/button-arrow";
import Link from "next/link"

export default function NotFoundPage() {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center gap-1">
      <div className="w-full max-w-5xl mx-auto aspect-video flex justify-center items-center font-bold text-9xl md:text-[12rem] lg:text-[20rem]">
        <div className="flex items-center justify-center gap-2">
          <span>4</span>
          <Icons.logo width={300} height={300} className="rounded-full w-24 md:w-40 lg:w-60 aspect-square" />
          <span>4</span>
        </div>
      </div>
      <p>Sorry we can&apos;t find this page</p>
      <ButtonArrow size="sm" asChild>
        <Link href="/">
          Go to homepage
        </Link>
      </ButtonArrow>
    </section>
  )
}