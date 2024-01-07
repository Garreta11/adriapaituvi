import './globals.scss'

import { PrismicPreview, PrismicNextLink } from '@prismicio/next'
import { PrismicText } from "@prismicio/react";
import { createClient, repositoryName } from '@/prismicio'

import { PageWrapper } from './page-wrapper';
import { ThemeContextProvider } from './components/Theme/Theme';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default function RootLayout({ children }) {

  return (
    <html lang="en" className="--no-scroll">
      <body className="--no-scroll">
        <ThemeContextProvider>
          <Header />
          <PageWrapper>
            {children}
          </PageWrapper>
          <Footer />
          <PrismicPreview repositoryName={repositoryName} />
        </ThemeContextProvider>
      </body>
    </html>
  )
}