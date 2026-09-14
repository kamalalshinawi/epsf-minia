import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { TopBanner } from "./TopBanner";

export const Layout = (): React.JSX.Element => (
  <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-black">
    <TopBanner />
    <Navbar />
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-12">
      <Outlet />
    </main>
    <Footer />
  </div>
);
