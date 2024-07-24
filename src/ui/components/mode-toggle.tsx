import * as React from "react"
import { Button } from "@/ui/elements/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui/elements/dropdown-menu"

export function ModeToggle() {
  const [theme, setThemeState] = React.useState<
    "theme-light" | "dark" | "system"
  >("theme-light")

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark")
    setThemeState(isDarkMode ? "dark" : "theme-light")
  }, [])

  React.useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    document.documentElement.classList[isDark ? "add" : "remove"]("dark")
  }, [theme])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <span className="size-5 icon-[tabler--sun] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <span className="absolute size-5 icon-[tabler--moon-stars] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Cambiar tema</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => { setThemeState('theme-light') }}>
          <span className="size-4 mr-2 icon-[tabler--sun]" />
          Claro
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => { setThemeState('dark') }}>
          <span className="size-4 mr-2 icon-[tabler--moon-stars]" />
          Oscuro
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => { setThemeState('system') }}>
          <span className="size-4 mr-2 icon-[tabler--device-desktop]" />
          Sistema
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
