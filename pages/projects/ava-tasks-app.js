import Head from "next/head";
import Image from "next/image";
import decorations from '../../styles/decorations.module.css'
import { Col, Container, Row } from "reactstrap";


export default function AvaTasksApp() {
    return (
        <Container>
            <Head>
                <title>AVA Tasks App</title>
                <meta name='description' content='Project description of AVA Tasks - a Task List Mobile App' />
            </Head>
            <main style={{minHeight:'100vh'}}>
                <Row className='text-center mt-3'>
                    <h1 className='fw-light'>AVA Tasks App</h1>
                    <Col>
                        React Native Task Management mobile app written in TypeScript. It was designed as a clone and companion to the{' '}
                        <a className='blueText' href='https://avtaskapp.netlify.app/'>
                            web version
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col xs='6' md='3' className='my-3'>
                        <div className={decorations.captionContainer}>
                            <Image 
                                width='9.25em'
                                height='20em'
                                layout='responsive'
                                src='https://github.com/adrianve-dev/ts-task-app/blob/master/img/tasks_dark.jpg?raw=true'
                                alt='tasks dark'
                            />
                            <div className={decorations.captionGradient}>
                                <p className={[decorations.caption, 'my-auto fw-light text-center'].join(' ')}>Dark Theme</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs='6' md='3' className='my-3'>
                        <div className={decorations.captionContainer}>
                            <Image 
                                width='9.25em'
                                height='20em'
                                layout='responsive'
                                src='https://github.com/adrianve-dev/ts-task-app/blob/master/img/tasks.PNG?raw=true'
                                alt='tasks light'
                            />
                            <div className={decorations.captionGradient}>
                                <p className={[decorations.caption, 'my-auto fw-light text-center'].join(' ')}>Light Theme</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs='6' md='3' className='my-3'>
                        <div className={decorations.captionContainer}>
                            <Image 
                                width='9.25em'
                                height='20em'
                                layout='responsive'
                                src='https://github.com/adrianve-dev/ts-task-app/blob/master/img/swipe-left-edit_dark.jpg?raw=true'
                                alt='task swipe options'
                            />
                            <div className={decorations.captionGradient}>
                                <p className={[decorations.caption, 'my-auto fw-light text-center'].join(' ')}>Swipe Left Options</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs='6' md='3' className='my-3'>
                        <div className={decorations.captionContainer}>
                            <Image 
                                width='9.25em'
                                height='20em'
                                layout='responsive'
                                src='https://github.com/adrianve-dev/ts-task-app/blob/master/img/add-task-modal.PNG?raw=true'
                                alt='add task'
                            />
                            <div className={decorations.captionGradient}>
                                <p className={[decorations.caption, 'my-auto fw-light text-center'].join(' ')}>Add/Edit Task</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </main>
        </Container>
    )
}