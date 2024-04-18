'use client'

import { useRouter } from "next/navigation";
import { Button } from "../elements/button";

export const IconBackBtn = () => {
  const router = useRouter();

  return (
    <Button variant="ghost" size="icon" className="size-7" onClick={router.back}>
      <span className="icon-[tabler--chevron-left] size-5" />
    </Button>
  )
}
