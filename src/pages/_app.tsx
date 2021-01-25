import React from 'react'
import { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'
import AppProvider from '~/hooks'
import theme from '../styles/theme'
import BaseLayout from '~/components/layouts'
import 'bootstrap/dist/css/bootstrap.min.css'
import '~/assets/plugins/nucleo/css/nucleo.css'
import '~/assets/scss/nextjs-argon-dashboard.scss'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BaseLayout>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </BaseLayout>
    </ThemeProvider>
  )
}

export default MyApp
