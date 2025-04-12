import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Roboto } from 'next/font/google';

import { Analytics } from '@vercel/analytics/react';

import { ToTop } from '@/components/ui/to-top';

import { DictionaryPageProps } from '@/dictionaries';
import { ToastProvider } from '@/toast';

import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'MB Dev',
    template: '%s | MB Dev',
  },
  description:
    'Full Stack Developer specialized in Next.js, React, and .NET. Passionate about delivering results through high-performance software and clean architecture.',
  creator: 'Matheus Brito dos Santos',
  applicationName: 'MB Dev',
  publisher: 'MB Dev',
  referrer: 'no-referrer-when-downgrade',
  category: 'Web Development',
  classification: 'Web Development',
  robots: 'index, follow',
  authors: [
    {
      name: 'Matheus Brito dos Santos',
      url: 'https://linkedin.com/in/matthew-sbrito',
    },
  ],
  keywords: [
    'Matthew Brito',
    'Matthew SBrito',
    'Web Developer',
    'Full Stack Developer',
    'Next.js Developer',
    'React Developer',
    'Frontend Engineer',
    'TypeScript Developer',
    'Web Developer Portfolio',
    'Tailwind CSS Portfolio',
    'Framer Motion Animations',
    'React Hook Form',
    'Zod Validation',
    'API Integration',
    'Clean Architecture',
    '.NET Developer',
    'Modern Website Development',
    'High-performance Web Apps',
    'Professional Developer',
    'Freelance Web Developer',
    'SaaS Developer',
    'Responsive Web Design',
    'Mobile-first Web Apps',
    'Progressive Web Apps',
  ],
  openGraph: {
    type: 'website',
    url: 'https://matthew-sbrito.vercel.app',
    title: 'MB Dev | Full Stack Developer Portfolio',
    description:
      'Portfolio of Matheus Brito, a software developer focused on modern technologies such as Next.js, React, and .NET.',
    images: {
      url: '/images/me.png',
      alt: "Matheus' profile picture",
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MB Dev | Matheus Brito',
    description:
      'Web developer focused on performance, UX, and results. Check out my portfolio and projects.',
    images: {
      url: '/images/me.png',
      alt: "Matheus' profile picture",
    },
  },
};

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
});

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'pt' }];
}

type RootProps = DictionaryPageProps & {
  children: React.ReactNode;
};

export default async function RootLayout({ children, params }: RootProps) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <body className={roboto.className}>
        <ToTop />
        <ThemeProvider>
          <ToastProvider>{children}</ToastProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
