import { ClientLayout } from "@/components/ClientLayout";
import { GeometricBackground } from "@/components/GeometricBackground";
import { CursorDot } from "@/components/CursorDot";
import { DockNav } from "@/components/DockNav";

// Heavy intro-site shell: Lenis smooth-scroll, GeometricBackground WebGL,
// DockNav, CursorDot. Wraps marketing/landing routes only.
// Hub routes (`/hub/*`) deliberately do NOT inherit this — they have their
// own UI and need native scroll for ScrollArea components.
export default function IntroLayout({ children }) {
  return (
    <ClientLayout>
      <GeometricBackground fixed />
      <DockNav />
      {children}
      <CursorDot />
    </ClientLayout>
  );
}
