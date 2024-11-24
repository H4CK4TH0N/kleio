import Navbar from "@/components/navbar";
import Footer from "./_components/footer";
import { siteConfig } from "@/config/site.config";

type MarketingLayoutProps = {
  children: React.ReactNode;
};

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <>
      <header className="sticky top-0 px-0 md:p-2 w-full flex justify-center items-center z-50">
        <Navbar />
      </header>
      <main className="flex flex-col min-h-screen w-full">{children}</main>
      <footer id="contact" className="w-full border-t">
        <Footer />
        <h1 className="text-stroke text-7xl md:text-9xl lg:text-[14rem] text-center text-transparent font-heading uppercase">
          {siteConfig.name}
        </h1>
      </footer>
    </>
  );
}
