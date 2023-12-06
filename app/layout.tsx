import type { Metadata } from 'next'
import './globals.css'
import { ThemeRegistry } from './components/ThemeRegistry/ThemeRegistry'
import { NavBar } from './components/navBar/Navbar'
import { Footer } from './components/footer/Footer'
import { Toolbar } from '@mui/material'


export const metadata: Metadata = {
  title: 'Louissaint Portfolio',
  description: 'C Louissaint Portfolio',
}

export default function RootLayout(props: { children: any }) {
  const { children } = props;
  return (
    <html lang="en">
      <ThemeRegistry options={{ key: 'mui' }}>
        <body>
      <NavBar />
          <Toolbar />
          {children}
          <Footer />
        </body>
      </ThemeRegistry>
    </html>
  );
}
