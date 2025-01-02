import Credit from './credit'

function Credits() {
    return (
        <main>
            <h1>Credits</h1>
            <ul>
                <li><Credit role='Designer' name='Davide Rivolta' /></li>
                <li><Credit role='Developer' name='Davide Rivolta' /></li>
                <li><Credit role='UI inspired by' name='Returnal videogame' /></li>
                <li><Credit role='Logo inspired by' name='Firewatch videogame' /></li>
                <li><Credit role='Tech stack' name='Typescript' /></li>
                <li><Credit role='' name='React 19' /></li>
                <li><Credit role='' name='Next 15' /></li>
                <li><Credit role='' name='Three.js' /></li>
                <li><Credit role='' name='Vercel' /></li>
                <li><Credit role='Background Music' name='Gloomy (Prod. by MX Audio Library)' /></li>
                <li><Credit role='Sounds' name='Pixabay' /></li>
            </ul>
        </main>
    )
}

export default Credits