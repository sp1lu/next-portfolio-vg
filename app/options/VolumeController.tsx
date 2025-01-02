interface VolumeControllerProps {
    label: string;
    level: number;
}

function VolumeController(props: VolumeControllerProps) {
    const { label, level } = props;
    
    return (
        <div className='volume-controller'>
            <p>{label}</p>
            <input type='range' name='' id='' value={level} />
            <p>{level}</p>
        </div>
    )
}

export default VolumeController