import './globals.css';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HYPEDROP | Wear the Culture. Own the Streets.',
  description: 'The ultimate destination for exclusive streetwear, limited drops, and underground fashion culture.',
  keywords: 'streetwear, fashion, hypebeast, sneakers, limited drops, urban fashion',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
