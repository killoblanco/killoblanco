'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const BodegaLandingPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("bodega/productos");
  }, [])

  return null;
}

export default BodegaLandingPage;
