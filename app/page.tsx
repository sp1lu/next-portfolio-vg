import Image from 'next/image'
import logo from '@/public/images/logo.svg'

function Home() {
  return (
    <main>
      <Image src={logo} alt='logo' />
      <p className="pulse">Click to continue</p>
    </main>
  );
}

export default Home