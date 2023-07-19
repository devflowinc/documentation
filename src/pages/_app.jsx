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
          <title>{`${pageProps.title} - Protocol API Reference`}</title>
        ) : (
          <title>Protocol API Reference</title>
        )}
        <meta name="description" content={pageProps.description} />
      </Head>
      <MDXProvider components={mdxComponents}>
        <Layout {...Component.layoutProps} {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </>
  )
}
