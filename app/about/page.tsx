import { Metadata } from 'next'

import style from './page.module.css'

export const metadata: Metadata = {
    title: 'Davide Rivolta | Web developer & Graphic designer',
    description: 'Self-taught web developer and graphic designer, video game enthusiast, unique passwords creator, cat lover and lifelong learner based in Italy.'
}

function About() {
    return (
        <main className={style.about}>
            <h1 className='page-title'>About</h1>
            <div>
                <p>My father says I do things that go online.</p> <p>My name is Davide, an italian <b>self-taught web developer and graphic designer</b>, video game enthusiast, unique passwords creator, cat lover and lifelong learner.</p> <p>Despite the old computer of my parents being a testament to my great passion for design and all things digital from a young age—filled to the last byte with PowerPoint files packed with flags and logos reproduced using the geometric drawing tools available in the software—my post-high school career took a turn when I enrolled in the Civil Engineering course at the University of Genoa.</p> <p> However, a few exams short of earning my degree, I decided to put my university career on hold and return to my never-fading love for design: I then opened a VAT number and decided to become a <b>freelance graphic designer</b>.</p> <p>Over the years, this led me to collaborate with some digital agencies in the Genoa area and to contribute to the founding of the university-targeted startup <a href='https://youni.life/' target='_blank' className='underlined'>Youni.life</a>.</p> <p>Following clients&apos; requests and my curiosity in learning new things, over time my specialty shifted from <b>illustration</b> to <b>web design</b>, moving through <b>brand design</b> and <b>3D modeling</b>. </p> <p>Intrigued by how an interface I designed could work, I realized that making mockups was no longer enough for me, so I dived myself into web development and learned the main programming languages and frameworks used in the field. </p> <p>Currently, I get paid to design colorful buttons and write magic formulas on a black screen to make interacting with those buttons as engaging as possible.</p> <p>As my father says: <i>I do things that go online</i>.</p>
            </div>
        </main>
    )
}

export default About