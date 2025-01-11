import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import logo from '@/public/images/logo.svg'
import style from './page.module.css'

export const metadata: Metadata = {
    title: 'Davide Rivolta | Web developer & Graphic designer',
    description: 'Self-taught web developer and graphic designer, video game enthusiast, unique passwords creator, cat lover and lifelong learner based in Italy.'
}

function Main() {
    return (
        <main className={style.main}>
            <Image src={logo} alt='logo' className={style.logo} priority />
            <nav className={style.menu}>
                <ul>
                    <li><a href='https://github.com/sp1lu' target='_blank'>Github</a></li>
                    <li><a href='https://dribbble.com/spilu' target='_blank'>Dribbble</a></li>
                    <li><a href='https://www.behance.net/spilu' target='_blank'>Behance</a></li>
                    <li><a href='https://www.linkedin.com/in/davide-rivolta/' target='_blank'>Linkedin</a></li>
                    <li><Link href='/about'>About</Link></li>
                    <li><Link href='/pdf/cv_davide_rivolta_2024.pdf' target='_blank'>Resume</Link></li>
                    <li><Link href='/credits'>Credits</Link></li>
                </ul>
            </nav>
        </main>
    )
}

export default Main