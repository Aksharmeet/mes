import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../components/globalstyles'
import { MantineProvider } from '@mantine/core';

const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
}


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <MantineProvider withGlobalStyles withNormalizeCSS >
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
        <Component {...pageProps}/>
      </ThemeProvider>
      </MantineProvider>
    </>
  )
}
