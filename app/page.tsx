import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/images/logo.svg'

import style from './page.module.css'

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