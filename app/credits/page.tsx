import { Metadata } from 'next'

import Credit from './credit/credit'
import style from './page.module.css'

export const metadata: Metadata = {
    title: 'Davide Rivolta | Web developer & Graphic designer',
    description: 'Self-taught web developer and graphic designer, video game enthusiast, unique passwords creator, cat lover and lifelong learner based in Italy.'
}

function Credits() {
    return (
        <main className={style.credits}>
            <h1 className='page-title'>Credits</h1>
            <ul className={style.list}>
                <li><Credit role='Designer' name='Davide Rivolta' /></li>
                <li><Credit role='Developer' name='Davide Rivolta' /></li>
                <li><Credit role='UI inspired by' name='Returnal videogame' /></li>
                <li><Credit role='Logo inspired by' name='Firewatch videogame' /></li>
                <li><Credit role='Tech stack' name='Typescript' /></li>
                <li><Credit role='' name='React 19' /></li>
                <li><Credit role='' name='Next.js 15' /></li>
                <li><Credit role='' name='Three.js' /></li>
                <li><Credit role='' name='Vercel' /></li>
            </ul>
        </main>
    )
}

export default Credits