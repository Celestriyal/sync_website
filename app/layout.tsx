import './globals.css';
import type { Metadata } from 'next';
import { Inter, Antonio, Syne } from 'next/font/google';
import localFont from 'next/font/local';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const antonio = Antonio({ subsets: ['latin'], variable: '--font-antonio' });
const syne = Syne({ subsets: ['latin'], variable: '--font-syne', weight: ['400', '700', '800'] });

const rosette = localFont({
  src: '../fonts/Rosette-Regular.otf',
  variable: '--font-rosette',
});

const delius = localFont({
  src: '../fonts/Delius/Delius-Regular.ttf',
  variable: '--font-delius',
});

const montagu = localFont({
  src: '../fonts/Montagu_Slab/MontaguSlab-VariableFont_opsz,wght.ttf',
  variable: '--font-montagu',
});

export const metadata: Metadata = {
  title: 'Celestriyal Studios',
  description: 'Digital experiences, refined. Web and App Development.',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${antonio.variable} ${syne.variable} ${rosette.variable} ${delius.variable} ${montagu.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
