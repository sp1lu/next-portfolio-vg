import Link from 'next/link'

function Main() {
    return (
        <main>
            <nav>
                <ul>
                    <li><a href='https://github.com/sp1lu' target='_blank'>Github</a></li>
                    <li><a href='https://dribbble.com/spilu' target='_blank'>Dribbble</a></li>
                    <li><a href='https://www.behance.net/spilu' target='_blank'>Behance</a></li>
                    <li><a href='https://www.linkedin.com/in/davide-rivolta/' target='_blank'>Linkedin</a></li>
                    <li><Link href='/about'>About</Link></li>
                    <li><Link href='/options'>Options</Link></li>
                    <li><Link href='/credits'>Credits</Link></li>
                </ul>
            </nav>
        </main>
    )
}

export default Main