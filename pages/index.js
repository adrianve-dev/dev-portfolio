import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import decorations from '../styles/decorations.module.css'
import { Container } from 'reactstrap'

export default function Home() {
  return (
    <Container className={styles.container} fluid>
      <Head>
        <title>Web3 Fullstack Portfolio</title>
        <meta name="description" content="Created by Adrian Velarde - Portfolio to showcase Web3 React, React Native, and Ethereum Development capabilities" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className={[decorations.blueGlowLg]}>
            Web3 Fullstack Development
          </span>
        </h1>

        <p className={['lead', decorations.blueGlow].join(' ')}>
          Get started
        </p>

      <div className={decorations.parallelogram}></div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </Container>
  )
}
