'use client'

import { ChangeEvent } from 'react';

interface VolumeControllerProps {
    id: string;
    label: string;
    level: number;
    onChange: (level: number) => void;
}

function VolumeController(props: VolumeControllerProps) {
    const { id, label, level, onChange } = props;

    function handleChange(event: ChangeEvent): void {
        onChange(parseInt((event.target as HTMLInputElement).value));
    }

    return (
        <div className='volume-controller'>
            <p>{label}</p>
            <input type='range' id={id} value={level} onChange={handleChange} />
            <p>{level}</p>
        </div>
    )
}

export default VolumeController