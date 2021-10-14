export const VolumeSlider = ({
    classes,
    onChange,
    value,
}) => {

    return (
        <div className="volume-slider">
            <input
               min = '0'
               max= '1'
                type="range"
                value={value}
                step={0.02}
                className={`slider ${classes}`}
                id="myRange"
                onChange={onChange}
            />
        </div>
    );
};
