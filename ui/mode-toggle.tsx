'use client'

import { useTheme } from 'next-themes'

import { Button } from '@/ui/elements/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/ui/elements/dropdown-menu'

export function ModeToggle (): JSX.Element {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <span className="size-5 icon-[tabler--sun] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <span className="absolute size-5 icon-[tabler--moon-stars] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => { setTheme('light') }}>
          <span className="size-4 mr-2 icon-[tabler--sun]" />
          Claro
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => { setTheme('dark') }}>
          <span className="size-4 mr-2 icon-[tabler--moon-stars]" />
          Oscuro
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => { setTheme('system') }}>
          <span className="size-4 mr-2 icon-[tabler--device-desktop]" />
          Sistema
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
