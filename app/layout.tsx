import "@/ui/globals.css";
import { ThemeProvider } from "@/ui/provider";
import { cn } from "@/ui/utils";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

const fontSans = Plus_Jakarta_Sans({ subsets: ["cyrillic-ext", "latin", "latin-ext", "vietnamese"], variable: '--font-sans' });

export const metadata: Metadata = {
  title: "Kamilo Vasquez",
  description: "+14 años de experiencia. Ingeniero de software de Barranquilla, Colombia. Especializado en desarrollo de páginas y aplicaciones web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CO">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed inset-0 -z-10 h-full w-full bg-[radial-gradient(#d4d4d8_1px,transparent_1px)] dark:opacity-15 [background-size:16px_16px]" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
