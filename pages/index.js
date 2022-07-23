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

        <div className='p-4'>
          <Row className='my-3'>
            <Col sm='6'>
              <div className={hexagon.hexContainer}>
                <div className={[hexagon.hexShadowOuter, decorations.floating].join(' ')}>
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
                Smart contract based decentralized applications (dApps) connected to the blockchain through a crypto wallet
              </div>
            </Col>
          </Row>
          
          <Row className='my-3'>
            <Col sm='6' className='order-sm-1'>
              <div className={hexagon.hexContainer}>
                <div className={[hexagon.hexShadowOuter, decorations.floating].join(' ')}>
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
                Cross platform mobile apps built with technology that speeds up development and delivery
              </div>
            </Col>
          </Row>

          <Row className='my-3'>
            <Col sm='6'>
              <div className={hexagon.hexContainer}>
                <div className={[hexagon.hexShadowOuter, decorations.floating].join(' ')}>
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
                NFTs, utility, and token generation Smart Contract development for any Ethereum-based chain
              </div>
            </Col>
          </Row>
        </div>

        <div className={decorations.parallelogram}></div>  

        <Row className='mt-5 py-5 px-3 align-self-stretch text-center' style={{background: 'linear-gradient(180deg, rgba(0,0,255,0) 0%, rgba(0,0,0,0.75) 100%)'}}>
          <hr />
          <h3 className='fw-light my-4'>Projects</h3>
          <Row className='m-auto'>
            <Col sm='4'>
              <Row style={{color: '#334', backgroundColor:'white', minHeight: '15em', boxShadow: '0 0 5px #333', borderRadius: '0.25em', overflow: 'hidden'}} className='fw-light p-3 m-2'>
                <Col xs='12' sm='6'>
                  <Image
                    width='100px'
                    height='100px'
                    src='/img/cb-logo.png'
                    alt='Chubby Buddies'
                  />
                </Col>
                <Col xs='12' sm='6'>
                  <h5 className='blueText'>Chubby Buddies</h5>
                  <hr className={'hrDark'} />
                  <div>NFT generative avatar project on the Rinkeby network</div> 
                </Col>
              </Row>
            </Col>
            <Col sm='4'>
              <Row style={{color: '#334', backgroundColor:'white', minHeight: '15em', boxShadow: '0 0 5px #333', borderRadius: '0.25em', overflow: 'hidden'}} className='fw-light p-3 m-2'>
                <Col xs='12' sm='6'>
                  <Image className='rounded-circle'
                    width='100px'
                    height='100px'
                    src='/img/ava-tasks-icon.png'
                    alt='AVA Tasks'
                  />
                </Col>
                <Col xs='12' sm='6'>
                  <h5 className='blueText'>AVA Tasks App</h5>
                  <hr className={'hrDark'} />
                  <div>Mobile Task App with a companion website</div> 
                </Col>
              </Row>
            </Col>
            <Col sm='4'>
              <Row style={{color: '#334', backgroundColor:'white', minHeight: '15em', boxShadow: '0 0 5px #333', borderRadius: '0.25em', overflow: 'hidden'}} className='fw-light p-3 m-2'>
                <Col xs='12' sm='6'>
                  <Image className='rounded-circle'
                    width='100px'
                    height='100px'
                    src='/img/eth-logo-blue.png'
                    alt='Chubby Buddies'
                  />
                </Col>
                <Col xs='12' sm='6'>
                  <h5 className='blueText'>Smart Contracts</h5>
                  <hr className={'hrDark'} />
                  <div>NFT Contracts and Token and ICO Contracts</div> 
                </Col>
              </Row>
            </Col>
          </Row>
        </Row>

        <Row style={{color: '#114', backgroundColor: '#ddd'}} className='p-5 align-self-stretch text-center fw-light'>
          <h2 className='fw-light text-center'>Tech Stack</h2>
          <Row className='my-3 mx-auto'>
            <h5>Web3</h5>
            <Col sm='3' >
              React
            </Col>
            <Col sm='3' >
              React Native
            </Col>
            <Col sm='3' >
              Metamask/WalletConnect
            </Col>
            <Col sm='3' >
              Next.js
            </Col>
          </Row>
          <Row className='my-3 mx-auto'>
            <h5>Blockchain</h5>
            <Col sm='4' >
              Solidity
            </Col>
            <Col sm='4' >
              Ethereum
            </Col>
            <Col sm='4' >
              Polygon
            </Col>
          </Row>
          <Row className='my-3 mx-auto'>
            <h5>Backend</h5>
            <Col sm='4' >
              node.js
            </Col>
            <Col sm='4' >
              GraphQL
            </Col>
            <Col sm='4' >
              Prisma
            </Col>
          </Row>
        </Row>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/adrianve/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Adrian Velarde &copy;2022
        </a>
      </footer>
    </Container>
  )
}
