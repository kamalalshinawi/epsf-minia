import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { TopBanner } from "./TopBanner";

export const Layout = (): React.JSX.Element => (
  <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-black">
    <header className="sticky top-0 z-50 w-full bg-white shadow-xs">
      <TopBanner />
      <Navbar />
    </header>
    <main className="mx-auto w-full max-w-7xl flex-1 px-4 sm:px-6 lg:px-8 py-12">
      <Outlet />
    </main>
    <Footer />
  </div>
);
