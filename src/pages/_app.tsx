import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import React, { useEffect } from 'react'
import { SWRConfig } from 'swr'
import ApiClient from '@data/client/ApiClient'
import theme from '@presentation/styles/theme'
import DashboardLayout from '@presentation/layouts/DashboardLayout'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
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
      <SWRConfig
        value={{
          fetcher: url => ApiClient.get(url).then(res => res.data)
        }}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <DashboardLayout>
            <Component {...pageProps} />
          </DashboardLayout>
        </ThemeProvider>
      </SWRConfig>
    </>
  )
}

export default MyApp
