import { Noto_Serif_JP, Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ui/theme-provider';
import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Göktürk Çolak - Economics Student & Data Scientist',
  description: 'Economics undergraduate passionate about quantitative finance, algorithmic trading, and macroeconomic analysis. Building systematic investment approaches with data-driven insights.',
  keywords: ['Economics', 'Data Analysis', 'Quantitative Finance', 'Algorithmic Trading', 'Python', 'R Programming', 'Istanbul University'],
  authors: [{ name: 'Göktürk Çolak' }],
  creator: 'Göktürk Çolak',
  openGraph: {
    title: 'Göktürk Çolak - Economics Student & Data Scientist',
    description: 'Economics undergraduate passionate about quantitative finance, algorithmic trading, and macroeconomic analysis.',
    url: 'https://gokturkcolak.com',
    siteName: 'Göktürk Çolak Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Göktürk Çolak - Economics Student & Data Scientist',
    description: 'Economics undergraduate passionate about quantitative finance, algorithmic trading, and macroeconomic analysis.',
  },
};

const notoSerif = Noto_Serif_JP({ subsets: ['latin'], weight: ['400'], variable: '--font-noto-serif-jp' });
const notoSans = Noto_Sans_JP({ subsets: ['latin'], weight: ['400'], variable: '--font-noto-sans-jp' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${notoSerif.variable} ${notoSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}