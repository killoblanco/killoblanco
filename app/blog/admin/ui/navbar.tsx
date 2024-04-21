'use client'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue
} from '@/ui/elements/select'
import { cn } from '@/ui/utils'
import { usePathname, useRouter } from 'next/navigation'

interface NavbarOption {
  icon: string
  label: string
  value: string
}

export const adminNavbarOptions: NavbarOption[] = [
  {
    icon: 'icon-[tabler--article]',
    label: 'Publicaciones',
    value: 'publicaciones'
  },
  {
    icon: 'icon-[tabler--photo-video]',
    label: 'Multimedia',
    value: 'multimedia'
  },
  {
    icon: 'icon-[tabler--messages]',
    label: 'Comentarios',
    value: 'comentarios'
  }
] as const

const NavItem = (item: NavbarOption): JSX.Element => (
  <SelectItem value={item.value}>
    <div className="inline-flex gap-2 items-center">
      <span className={cn('size-4', item.icon)} />
      {item.label}
    </div>
  </SelectItem>
)

export const AdminNavbar = (): JSX.Element => {
  const router = useRouter()
  const [pathname] = usePathname()
    .replace('/blog/admin', '')
    .split('/')
    .filter(Boolean)

  const navigateTo = (path: string): void => {
    router.push(`/blog/admin/${path}`)
  }

  return (
    <Select value={pathname ?? '/'} onValueChange={navigateTo}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Menu" />
      </SelectTrigger>
      <SelectContent>
        <NavItem icon="icon-[tabler--desk]" label="Escritorio" value="/" />
        <SelectSeparator />
        <SelectGroup>
          {adminNavbarOptions.map((item) => (
            <NavItem key={item.value} {...item} />
          ))}
        </SelectGroup>
        <SelectSeparator />
        <NavItem
          icon="icon-[tabler--settings]"
          label="Configuración"
          value="configuracion"
        />
      </SelectContent>
    </Select>
  )
}
