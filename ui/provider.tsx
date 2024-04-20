import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'
import { TooltipProvider } from './elements/tooltip'

export function ThemeProvider ({ children, ...props }: ThemeProviderProps): JSX.Element {
  return (
    <NextThemesProvider {...props}>
      <TooltipProvider>
        {children}
      </TooltipProvider>
    </NextThemesProvider>
  )
}
