import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { Locales } from './lib/dictionaries';

const locales: Locales[] = ['en', 'pt'];

function getLocale(request: NextRequest): string {
  const objectURL = new URL(request.url);
  const acceptLanguageHeader = request.headers.get('accept-language');

  // Get the default language from the browser
  const defaultLanguage = acceptLanguageHeader?.split(',')[0].split('-')[0];
  const newLanguageSetting = objectURL.searchParams.get('lang');

  // Pick language by priority
  const selectedLang = newLanguageSetting || defaultLanguage;

  return selectedLang === 'pt' ? 'pt' : 'en';
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // path match then return
  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?!api|_next|favicon.ico|images).*)'],
};
