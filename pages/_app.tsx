import { AppProps } from 'next/app'
import Head from 'next/head'

import { ThemeProvider } from 'styled-components'

import Header from '@layout/header/Header'

import { defaultTheme, GlobalStyle } from '@styles/index'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>BrewR</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
