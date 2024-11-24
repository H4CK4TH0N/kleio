import { X, Check, Settings2, Zap, FileText, PenTool } from 'lucide-react';
import { siteConfig } from "@/config/site.config";
import { ParticlesCore } from "@/components/particles";
import Image from 'next/image';

export default function Comparison() {
  return (
    <div className="w-full max-w-5xl mx-auto min-h-[75vh] flex flex-col justify-center">
      <div className="relative flex justify-between items-center text-3xl md:text-4xl lg:text-5xl font-semibold h-16 md:h-28">
        <div className="relative w-full text-center h-full flex items-center justify-center bg-[url('/particles/gray.svg')] bg-no-repeat bg-right">
          <h3 className="text-muted-foreground">Others</h3>
          <div className="absolute top-1/2 -translate-y-1/2 right-0 w-full h-full bg-gradient-to-l from-muted/70 dark:from-muted/50 dark:via-transparent via-40% via-transparent to-transparent"></div>
        </div>
        <ParticlesCore
          id="other-particles"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="absolute top-0 left-1/2 -translate-x-[100%] w-40 h-full"
          particleColor="#a1a1aa"
        />
        <ParticlesCore
          id="volcane-particles"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="absolute top-0 left-1/2 w-40 h-full"
          particleColor="#219dfc"
        />
        <div className="relative w-full text-center h-full flex items-center justify-center bg-[url('/particles/blue.svg')] bg-no-repeat">
          <h3 className="font-heading">{siteConfig.name}</h3>
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-full bg-gradient-to-r from-blue-700/30 dark:from-blue-600/20 via-40% via-transparent dark:via-transparent to-transparent"></div>
        </div>
        <div className="absolute size-12 md:size-16 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex justify-center items-center bg-background/10 backdrop-blur-[1px] border-4 md:border-8 border-background/50 overflow-hidden cursor-pointer hover:scale-105 hover:border-4 active:scale-100 active:border-8 duration-500 transition-all ease-out">
          <div className="absolute top-0 w-full h-full rounded-full border-t border-blue-800" />
          <Image src="/logo.png" alt="Kleio" width={35} height={35} />
        </div>
      </div>
      <div className="w-full border-t grid grid-cols-2 rounded-xl md:rounded-3xl">
        <div className="relative w-full h-full pt-1 md:pr-3 lg:pr-5 md:py-3 lg:py-8">
          <div className="w-full h-full border rounded-xl rounded-tr-none rounded-br-none md:rounded-2xl text-muted-foreground">
            <div className="w-full border-b text-center text-xl md:text-2xl px-2 py-2 md:py-5">
              <h3>Others</h3>
            </div>
            <div className="text-sm md:text-lg pl-2 py-2 md:pl-8 md:py-5 space-y-2">
              {othersItems.map((item, index) => (
                <p key={index} className="flex gap-1 md:gap-2 h-8">
                  <span className="">{item.icon}</span>
                  <span>{item.text}</span> 
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="relative w-full h-full pt-1 md:pl-3 md:py-3 lg:pl-5 lg:py-8">
          <div className="absolute top-0 h-px w-3/4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-blue-700 to-transparent" />
          <div className="relative w-full h-full border border-l-0 md:border-l border-blue-700/40 dark:border-blue-600/20 rounded-xl rounded-tl-none rounded-bl-none md:rounded-2xl bg-gradient-to-b from-blue-400/20 dark:from-blue-900/30 dark:to-blue-900/10 to-blue-900/10">
            <Shine />
            <div className="absolute top-0 h-px w-3/4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
            <div className="w-full border-b border-blue-700/40 dark:border-blue-600/20 text-center text-xl md:text-2xl font-heading px-2 py-2 md:py-5">
              <h3>{siteConfig.name}</h3>
            </div>
            <div className="text-sm md:text-lg pl-2 py-2 md:pl-8 md:py-5 font-semibold space-y-2">
              {productItems.map((item, index) => (
                <p key={index} className="flex gap-1 md:gap-2 group/pros h-8">
                  <span className="group-hover/pros:-rotate-12 pt-1 md:p-1 duration-200 transition-all ease-out delay-100">{item.icon}</span>
                  <span>{item.text}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Shine = () => {
  return (
    <svg
      width="170"
      height="92"
      viewBox="0 0 170 92"
      fill="none"
      className="absolute top-0 left-1/2 -translate-x-1/2 opacity-25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M34.4048 0H133.571L170 91.0714H0L34.4048 0Z"
        fill="url(#paint0_linear_78_11068)"
        fillOpacity="0.2"
      />
      <rect
        x="54.6429"
        width="14.1667"
        height="42.5"
        fill="url(#paint1_linear_78_11068)"
        fillOpacity="0.1"
      />
      <rect
        x="74.881"
        width="14.1667"
        height="42.5"
        fill="url(#paint2_linear_78_11068)"
        fillOpacity="0.1"
      />
      <rect
        x="95.119"
        width="14.1667"
        height="42.5"
        fill="url(#paint3_linear_78_11068)"
        fillOpacity="0.1"
      />
      <defs>
        <linearGradient
          id="paint0_linear_78_11068"
          x1="83.9881"
          y1="0"
          x2="83.9881"
          y2="52.619"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3694EB" />
          <stop offset="1" stopColor="#1F5485" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_78_11068"
          x1="61.7262"
          y1="0"
          x2="61.7262"
          y2="42.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4577F8" />
          <stop offset="1" stopColor="#294692" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_78_11068"
          x1="81.9643"
          y1="0"
          x2="81.9643"
          y2="42.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4577F8" />
          <stop offset="1" stopColor="#294692" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_78_11068"
          x1="102.202"
          y1="0"
          x2="102.202"
          y2="42.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4577F8" />
          <stop offset="1" stopColor="#294692" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const othersItems = [
  {
    icon: <X className="bg-muted rounded-full size-4 md:size-6 p-[2px] mt-1 md:m-0" />,
    text: "Transcribe only",
  },
  {
    icon: <X className="bg-muted rounded-full size-4 md:size-6 p-[2px] mt-1 md:m-0" />,
    text: "Lack intelligent summarization",
  },
  {
    icon: <X className="bg-muted rounded-full size-4 md:size-6 p-[2px] mt-1 md:m-0" />,
    text: "Require manual slide creation",
  },
  {
    icon: <X className="bg-muted rounded-full size-4 md:size-6 p-[2px] mt-1 md:m-0" />,
    text: "Miss AI-powered analytics",
  },
  {
    icon: <X className="bg-muted rounded-full size-4 md:size-6 p-[2px] mt-1 md:m-0" />,
    text: "Complicate setup process",
  },
];

const productItems = [
  {
    icon: <Check className="text-green-400 p-[2px] size-4 md:size-6" size={20} />,
    text: "Transcribe and summarize",
  },
  {
    icon: <Settings2 className="text-blue-400 p-[2px] size-4 md:size-6" size={20} />,
    text: "Generate intelligent insights",
  },
  {
    icon: <Zap className="text-blue-400 p-[2px] size-4 md:size-6" size={20} />,
    text: "Create slides automatically",
  },
  {
    icon: <FileText className="text-blue-400 p-[2px] size-4 md:size-6" size={20} />,
    text: "Provide advanced analytics",
  },
  {
    icon: <PenTool className="text-blue-400 p-[2px] size-4 md:size-6" size={20} />,
    text: "Simplify user experience",
  },
];
