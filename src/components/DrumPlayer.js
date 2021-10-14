export const DrumPlayer = (props) => props.drumSounds.map((soundObj, index) => {
    return (
        <button
            onClick={() => props.handleClick(soundObj)}
            key={"key" + index}
            className='drum-pad'
            id={soundObj.name} 
        >
            {soundObj.letter}
            <audio
                tabIndex="0"
                src={soundObj.source}
                className='clip'
                id={soundObj.letter}>
            </audio>
        </button>
    )
});