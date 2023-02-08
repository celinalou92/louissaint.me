import type { AppProps } from 'next/app'
import {Merriweather} from '@next/font/google'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import PageWrapper from "@/components/PageWrapper";

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ["300", "400", "700", "900"]
})

const theme = createTheme({
  typography: {
    fontFamily: merriweather
  }
});


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme} >
      <PageWrapper>
        <Component {...pageProps} />
      </PageWrapper>
    </ThemeProvider>
  )
}
