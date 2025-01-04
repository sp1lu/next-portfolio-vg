'use client'

import { ReactNode, createContext, useEffect, useRef, useState } from 'react'

export interface AudioContextProps {
    isPlaying: boolean;
    musicLevel: number;
    soundLevel: number;
    setAudio: React.Dispatch<React.SetStateAction<AudioContextProps>>;
}

export const AudioContext = createContext<AudioContextProps>({ isPlaying: false, musicLevel: 50, soundLevel: 50, setAudio: () => { } });
export const AudioProvider = ({ children }: { children: ReactNode }) => {  
    const [audio, setAudio] = useState<AudioContextProps>({ isPlaying: false, musicLevel: 50, soundLevel: 50, setAudio: () => { } });

    const musicRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        musicRef.current = new Audio('./audio/gloomy_sad_background_music.mp3');
    }, []);

    useEffect(() => {
        console.log(audio);
        console.log(musicRef.current?.volume);
    }, [audio]);

    return (
        <AudioContext.Provider value={{ ...audio, setAudio }}>
            {children}
        </AudioContext.Provider>
    )
}