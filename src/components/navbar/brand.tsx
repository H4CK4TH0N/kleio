"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site.config";

export default function Branding() {
  const { theme } = useTheme();
  const [systemTheme, setSystemTheme] = useState<"light" | "dark" | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemTheme(mediaQuery.matches ? "dark" : "light");

    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);
    setIsLoaded(true);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const renderTheme = theme === "system" ? systemTheme : theme;

  if (!isLoaded) {
    return (
      <Image
        src="/logo-text-dark.png"
        alt={siteConfig.name}
        width={80}
        height={25}
        priority
      />
    );
  }

  return (
    <Link href="/">
      {renderTheme === "light" ? (
        <Image
          src="/logo-text-light.png"
          alt={siteConfig.name}
          width={80}
          height={25}
          priority
        />
      ) : (
        <Image
          src="/logo-text-dark.png"
          alt={siteConfig.name}
          width={80}
          height={25}
          priority
        />
      )}
    </Link>
  );
}
