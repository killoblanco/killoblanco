"use client"

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue } from "@/ui/elements/select";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const AdminNavbar = () => {
  const router = useRouter()
  const pathname = usePathname()

  const [value] = pathname.replace('/store/admin', '').split('/').filter(Boolean)

  const onChange = (value: string) => {
    router.push(`/store/admin/${value === '/' ? '' : value}`)
  }

  return (
    <Select value={value ?? '/'} onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Menu" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="/">
          <div className="inline-flex gap-2 items-center">
            <span className="icon-[tabler--chart-line] size-4" />
            Informes
          </div>
        </SelectItem>
        <SelectSeparator />
        <SelectGroup>
          <SelectItem value="deposito">
            <div className="inline-flex gap-2 items-center">
              <span className="icon-[tabler--building-warehouse] size-4" />
              Depósito
            </div>
          </SelectItem>
          <SelectItem value="caja">
            <div className="inline-flex gap-2 items-center">
              <span className="icon-[tabler--cash] size-4" />
              Caja
            </div>
          </SelectItem>
          <SelectItem value="clientes">
            <div className="inline-flex gap-2 items-center">
              <span className="icon-[tabler--user-dollar] size-4" />
              Clientes
            </div>
          </SelectItem>
          <SelectItem value="clientes">
            <div className="inline-flex gap-2 items-center">
              <span className="icon-[tabler--photo-video] size-4" />
              Multimedia
            </div>
          </SelectItem>
          <SelectItem value="pedidos">
            <div className="inline-flex gap-2 items-center">
              <span className="icon-[tabler--package-export] size-4" />
              Pedidos
            </div>
          </SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectItem value="ajustes">
          <div className="inline-flex gap-2 items-center">
            <span className="icon-[tabler--settings] size-4" />
            Ajustes
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  )
}

export default AdminNavbar;
