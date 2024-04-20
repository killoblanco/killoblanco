import '@/ui/globals.css'
import { ThemeProvider } from '@/ui/provider'
import { cn } from '@/ui/utils'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'

const fontSans = Plus_Jakarta_Sans({ subsets: ['cyrillic-ext', 'latin', 'latin-ext', 'vietnamese'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Kamilo Vasquez',
  description: '+14 años de experiencia. Ingeniero de software de Barranquilla, Colombia. Especializado en desarrollo de páginas y aplicaciones web.'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  return (
    <html lang="es-CO">
      <body className={cn(
        'min-h-screen bg-background font-sans antialiased',
        fontSans.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
