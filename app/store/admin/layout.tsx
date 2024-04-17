import PageFooter from "@/app/(marketing)/ui/components/page-footer";
import { Metadata } from "next";
import { PropsWithChildren } from "react";
import AdminTopbar from "./ui/topbar";

export const metadata: Metadata = {
  title: "Tienda Admin",
  description: "Panel de administración de la tienda",
};

const AdminPageLayout = ({ children }: PropsWithChildren) => (
  <main className="container py-4 space-y-4" id="top">
    <AdminTopbar />
    {children}
    <PageFooter />
  </main>
)

export default AdminPageLayout;
