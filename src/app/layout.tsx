import Appbar from '@/components/Appbar';
import Toaster from '@/components/ui/sonner';
import siteConfig from '@/config/siteConfig';
import { fonts } from '@/fonts/fonts';
import { Providers } from '@/providers/Providers';
import { ReactNode } from 'react';
import './globals.css';

export const metadata = siteConfig;

export default function RootLayout({ children }: { children: ReactNode }) {
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
  );
}
