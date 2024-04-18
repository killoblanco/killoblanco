import { PropsWithChildren } from "react";
import BodegaNavbar from "./ui/navbar";

const BodegaLayout = ({ children }: PropsWithChildren) => (
  <>
    <BodegaNavbar />
    {children}
  </>
)

export default BodegaLayout;
