import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Navigation } from '@/components/Navigation'
import { SectionProvider } from '@/components/SectionProvider'

export function Layout({ children, sections = [], showFeedbackForm = true }) {
  return (
    <SectionProvider sections={sections}>
      <div className="h-full lg:ml-72 xl:ml-80">
        <motion.header
          layoutScroll
          className="h-full top-14 contents lg:pointer-events-none lg:fixed lg:inset-x-0 lg:top-0 lg:z-40 lg:flex"
        >
          <div className="contents lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto lg:border-r lg:border-zinc-900/10 lg:px-6 lg:pb-8 lg:pt-4 lg:dark:border-white/10 xl:w-80">
            <div className="hidden align-middle lg:flex">
              <Link href="/" aria-label="Home">
                <Image
                  src="/logo_transparent.png"
                  alt="logo"
                  width={35}
                  height={35}
                />
              </Link>
              <Link
                href="/"
                className="ml-2 mt-1.5 align-middle text-xl font-semibold text-zinc-900 dark:text-white"
              >
                Arguflow
              </Link>
            </div>
            <Header />
            <Navigation className="hidden lg:mt-10 lg:block" />
          </div>
        </motion.header>
        <div className="relative flex h-full flex-col px-4 sm:px-6 lg:px-8">
          <main className="flex-auto py-16">{children}</main>
          <Footer showFeedbackForm={showFeedbackForm} />
        </div>
      </div>
    </SectionProvider>
  )
}
