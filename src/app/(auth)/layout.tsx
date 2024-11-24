import { siteConfig } from "@/config/site.config";
import Image from "next/image";

type AuthLayoutProps = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="h-screen w-full flex items-center justify-between">
      {/* <div className="h-full w-1/2 bg-secondary hidden lg:flex justify-center items-center">
        {siteConfig.name}
      </div> */}
      <div className="h-full w-full flex items-center justify-center">{children}</div>
    </main>
  );
}
