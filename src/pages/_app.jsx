import Head from 'next/head'
import { Router } from 'next/router'
import { MDXProvider } from '@mdx-js/react'

import { Layout } from '@/components/Layout'
import * as mdxComponents from '@/components/mdx'
import { useMobileNavigationStore } from '@/components/MobileNavigation'

import '@/styles/tailwind.css'
import 'focus-visible'

function onRouteChange() {
  useMobileNavigationStore.getState().close()
}

Router.events.on('routeChangeStart', onRouteChange)
Router.events.on('hashChangeStart', onRouteChange)

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {pageProps.title ? (
          <title>{`${pageProps.title} - Trieve API Reference`}</title>
        ) : (
          <title>Trieve API Reference</title>
        )}
        <meta name="description" content={pageProps.description} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://cdn.trieve.ai/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://cdn.trieve.ai/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://cdn.trieve.ai/favicon-16x16.png"
        />
      </Head>
      <MDXProvider components={mdxComponents}>
        <Layout {...Component.layoutProps} {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </>
  )
}
