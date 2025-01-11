import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/images/logo.svg'

import style from './page.module.css'

export const metadata: Metadata = {
  title: 'Davide Rivolta | Web developer & Graphic designer',
  description: 'Self-taught web developer and graphic designer, video game enthusiast, unique passwords creator, cat lover and lifelong learner based in Italy.'
}

function Home() {

  return (
    <Link href='/main' passHref>
      <main className={style.title}>
        <Image src={logo} alt='logo' className={style.logo} priority />
        <p className={style.pulse}>Click to continue</p>
      </main>
    </Link>
  );
}

export default Home