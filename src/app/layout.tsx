import siteConfig from "@/config/siteConfig"
import Toaster from "@/components/ui/sonner";
import "./globals.css"
import { Providers } from "@/providers/Providers";

export const metadata = siteConfig;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`min-h-screen`}>
        <Providers>
          <div>{children}</div>
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
