"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import AnnouncementBar from "./announcement-bar";
import { easeInOut, motion } from "framer-motion";
import ShinyButton from "./cta-button";
import Link from "next/link";
import ButtonArrow from "@/components/ui/button-arrow";
import Image from "next/image";
import { Play } from "lucide-react";

const container = {
  hidden: {
    opacity: 0.8,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const variant = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      type: "tween",
      easeInOut,
    },
  },
};

export function Hero() {
  return (
    <motion.div className="relative flex flex-col items-center w-full max-w-7xl mx-auto">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="pt-8 flex flex-col justify-center items-center gap-y-2 lg:gap-y-4 z-30 mb-4"
      >
        <motion.div variants={variant}>
          <AnnouncementBar />
        </motion.div>
        <motion.h1
          variants={variant}
          className="font-bold text-3xl lg:text-6xl max-w-3xl w-full text-center font-heading"
        >
          Transform Meetings into
          <br />
          <motion.span
            variants={variant}
            className="theme-gradient font-heading"
          >
            Actionable Insights
          </motion.span>
        </motion.h1>
        <motion.p
          variants={variant}
          className="text-sm lg:text-xl text-muted-foreground lg:px-0 px-6 lg:max-w-2xl text-center w-full"
        >
          <span className="font-semibold font-heading theme-gradient">
          Kleio:
          </span>{" "}
          AI-powered meeting summaries and presentations in minutes.
        </motion.p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.75,
          delay: 0.2,
          type: "spring",
          stiffness: 100,
        }}
        className="flex justify-center items-center gap-5"
      >
        <Link href="/dashboard">
          <ShinyButton text="Get started" />
        </Link>
        <ButtonArrow variant="outline">View Demo</ButtonArrow>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.75,
          delay: 0.3,
          type: "spring",
          stiffness: 100,
        }}
        className="relative w-full aspect-video border rounded-lg max-w-5xl mx-auto mb-12 md:mb-0 mt-12 lg:mt-20 p-3 bg-background [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,0.8))] dark:[mask-image:linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,0))]"
      >
        <div className="w-full h-full border rounded-lg overflow-hidden">
          <Image
            src="/preview.png"
            alt="Kleio"
            width={1920}
            height={1080}
            className="w-full object-cover"
          />
        </div>
        <Dialog>
          <DialogTrigger className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <div className="w-20 aspect-square rounded-full border bg-muted flex justify-center items-center hover:scale-105 duration-200 transition-all ease-out cursor-pointer">
              <Play size={32} className="text-foreground" strokeWidth={1} />
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-[700px] lg:w-[1000px] aspect-video flex justify-center items-center">
            <h1>hello world</h1>
          </DialogContent>
        </Dialog>
      </motion.div>
    </motion.div>
  );
}
