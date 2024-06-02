import siteConfig from "@/config/siteConfig"
import Toaster from "@/components/ui/sonner";
import "./globals.css"
import { Providers } from "@/providers/Providers";
import Appbar from "@/components/Appbar";
import { fonts } from "@/fonts/fonts";

export const metadata = siteConfig;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`min-h-screen ${fonts.productSans}`}>
        <Providers>
          <Appbar />
          <div>{children}</div>
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
