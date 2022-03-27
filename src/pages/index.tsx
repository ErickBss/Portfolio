import Head from 'next/head'

import { About } from '../components/About'
import { Header } from '../components/Header'
import { Home } from '../components/Home'

import { Projects } from '../components/Projects'

import { animateScroll as scroll, Element } from 'react-scroll'
import { Contact } from '../components/Contact'

export default function App() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Home />

      <About />

      <Projects />

      <Contact />
    </>
  )
}
