import { PropsWithChildren } from "react";
import OrdenesNavbar from "./ui/navbar";

const OrdenesLayout = ({ children }: PropsWithChildren) => (
  <>
    <OrdenesNavbar />
    {children}
  </>
)

export default OrdenesLayout;
