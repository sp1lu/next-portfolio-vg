'use client'

import { useContext } from 'react'
import { AudioContext, AudioContextProps } from '../store/audio.context'
import VolumeController from './VolumeController'

function Options() {
    const { musicLevel, soundLevel, setAudio } = useContext(AudioContext);

    function handleChange(id: string, level: number): void {
        switch (id) {
            case 'music-controller':
                setAudio((oldAudio: AudioContextProps) => ({ ...oldAudio, musicLevel: level }));
                break;
            case 'sound-controller':
                setAudio((oldAudio: AudioContextProps) => ({ ...oldAudio, soundLevel: level }));
                break;
            default:
                break;
        }
    }

    return (
        <div className='options'>
            <h1 className='page-title'>Options</h1>
            <VolumeController id='music-controller' label='Music' level={musicLevel} onChange={(e: number) => handleChange('music-controller', e)} />
            <VolumeController id='sound-controller' label='Sounds' level={soundLevel} onChange={(e: number) => handleChange('sound-controller', e)} />
        </div>
    )
}

export default Options