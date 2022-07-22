import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import decorations from '../styles/decorations.module.css'
import hexagon from '../styles/hexagon.module.css'
import { Container, Row, Col } from 'reactstrap'

export default function Home() {
  return (
    <Container className={styles.container} fluid>
      <Head>
        <title>Web3 Fullstack Portfolio</title>
        <meta name="description" content="Created by Adrian Velarde - Portfolio to showcase Web3 React, React Native, and Ethereum Development capabilities" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={[decorations.blueGlowLg, styles.title, 'text-center', 'mb-5'].join(' ')}>
            Web3 Fullstack Development
        </h1>

        <Row className='my-3'>
          <Col sm='6'>
            <div className={hexagon.hexContainer}>
              <div className={hexagon.hexShadowOuter}>
                <div className={hexagon.hexShadowCore}>
                  <div className={hexagon.hexClip}>
                      <div className={hexagon.hexText}>WEB3</div>  
                      <Image className={hexagon.hexImage} src="/img/website-blue.png" alt="Web3" layout="fill" />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm='6'className={['lead', 'm-auto', 'text-center'].join(' ')}>
            <div style={{border: '#66a 0.25em solid', borderRadius: '1em', boxShadow: '0 0 0.5em #4141e1', background: 'linear-gradient(100deg,hsla(0,0%,100%,0) 10%,hsla(0,0%,100%,.1) 75%)'}} className='py-5 px-1'>
              This is some text here that describes the project so clients can view what we are doing
            </div>
          </Col>
        </Row>
        
        <Row className='my-3'>
          <Col sm='6' className='order-sm-1'>
            <div className={hexagon.hexContainer}>
              <div className={hexagon.hexShadowOuter}>
                <div className={hexagon.hexShadowCore}>
                  <div className={hexagon.hexClip}>
                      <div className={hexagon.hexText}>MOBILE</div>  
                      <Image className={hexagon.hexImage} src="/img/phone-blue.png" alt="Mobile" layout="fill" />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm='6' className={['lead', 'm-auto', 'text-center', 'order-sm-0'].join(' ')}>
            <div style={{border: '#66a 0.25em solid', borderRadius: '1em', boxShadow: '0 0 0.5em #4141e1', background: 'linear-gradient(100deg,hsla(0,0%,100%,0) 10%,hsla(0,0%,100%,.1) 75%)'}} className='py-5 px-1'>
              This is some text here that describes the project so clients can view what we are doing
            </div>
          </Col>
        </Row>

        <Row className='my-3'>
          <Col sm='6'>
            <div className={hexagon.hexContainer}>
              <div className={hexagon.hexShadowOuter}>
                <div className={hexagon.hexShadowCore}>
                  <div className={hexagon.hexClip}>
                      <div className={hexagon.hexText}>ETHEREUM</div>  
                      <Image className={hexagon.hexImage} src="/img/eth-logo-blue.png" alt="Web3" layout="fill" />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm='6' className={['lead', 'm-auto', 'text-center'].join(' ')}>
            <div style={{border: '#66a 0.25em solid', borderRadius: '1em', boxShadow: '0 0 0.5em #4141e1', background: 'linear-gradient(100deg,hsla(0,0%,100%,0) 10%,hsla(0,0%,100%,.1) 75%)'}} className='py-5 px-1'>
              This is some text here that describes the project so clients can view what we are doing
            </div>
          </Col>
        </Row>

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
