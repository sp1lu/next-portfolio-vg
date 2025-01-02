import VolumeController from './VolumeController'

function Options() {
    return (
        <div className='options'>
            <h1 className='page-title'>Options</h1>
            <VolumeController label='Music' level={50} />
            <VolumeController label='Sounds' level={50} />
        </div>
    )
}

export default Options