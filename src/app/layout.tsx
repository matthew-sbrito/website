import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Roboto } from 'next/font/google';

import { DictionaryPageProps } from '@/dictionaries';

import { ToTop } from '@/components/ui/to-top';

import './globals.css';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Matthews Brito',
  description: 'A programmer dedicated to improve your knowledge',
};

export async function generateStaticParams() {
  return [{ lang: 'en-US' }, { lang: 'de' }];
}

type RootProps = DictionaryPageProps & {
  children: React.ReactNode;
};

export default function RootLayout({ children, params }: RootProps) {
  return (
    <html suppressHydrationWarning lang={params.lang}>
      <body className={roboto.className}>
        <ToTop />
        <ThemeProvider enableSystem={true}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
