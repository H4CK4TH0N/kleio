import BottomNavbar from "./_components/bottom-navbar";
import SidebarDesktop from "./_components/sidebar-desktop";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <section className="w-full h-screen">
      <div className="h-full grid flex-1 md:grid-cols-[300px_1fr] overflow-hidden">
        <SidebarDesktop />
        <BottomNavbar />
        <main className="flex w-full flex-1 flex-col overflow-scroll">
          <div className="w-full">{children}</div>
        </main>
      </div>
    </section>
  );
}
