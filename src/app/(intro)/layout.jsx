import { ClientLayout } from "@/components/ClientLayout";
import { GeometricBackground } from "@/components/GeometricBackground";
import { Navbar } from "@/components/goodai/Navbar";
import { Footer } from "@/components/goodai/Footer";
import { CursorDot } from "@/components/CursorDot";
import { DockNav } from "@/components/DockNav";

export default function IntroLayout({ children }) {
  return (
    <ClientLayout>
      <GeometricBackground fixed />
      <Navbar />
      <div className="relative z-10 flex flex-col min-h-screen">
        <main className="grow">
          {children}
        </main>
        <Footer />
      </div>
      <DockNav />
      <CursorDot />
    </ClientLayout>
  );
}
