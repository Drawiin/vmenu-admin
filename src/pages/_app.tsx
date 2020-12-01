/* eslint-disable multiline-ternary */
import React, { useEffect } from 'react'

import Head from 'next/head'
import { AppProps } from 'next/dist/next-server/lib/router/router'

import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import theme from '@presentation/styles/theme'
import DashboardLayout from '@presentation/layouts/DashboardLayout'

const MyApp: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Admin</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {router.pathname.includes('/main') ? (
          <DashboardLayout>
            <Component {...pageProps} />
          </DashboardLayout>
        ) : (
          <Component {...pageProps} />
        )}
      </ThemeProvider>
    </>
  )
}

export default MyApp
