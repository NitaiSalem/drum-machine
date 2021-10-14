import React, { useEffect, useState } from 'react';
import { BUTTONLEFT, BUTTONRIGHT, DRUMSOUNDS, PIANOSOUNDS } from '../utils';
import { DrumPlayer } from './DrumPlayer';
import { PianoPlayer } from './PianoPlayer';
import { VolumeSlider } from './VolumeSlider';

const DrumMachine = () => {
	const [isPiano, setIsPiano] = useState(false);
	const [display, setDisplay] = useState('');
	const [isPower, setIsPower] = useState(true);
	const [sliderVolume, setSliderVolume] = useState(0.5);
	const letters = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

	useEffect(
		() => {
			if (isPower) {
				document.addEventListener('keydown', handleKeyDown);
			}
			return () => {
				document.removeEventListener('keydown', handleKeyDown);
			};
		},
		[isPower, sliderVolume]
	);

	useEffect(
		() => {
			setDisplay(isPower ? 'POWER ON' : 'POWER OFF');
		},
		[isPower]
	);

	useEffect(
		() => {
			if (isPower) {
				setDisplay(isPiano ? 'Piano kit' : 'Drum kit');
			}
		},
		[isPiano]
	);

	const handleSliderChange = (e) => {
		if (isPower) {
			setSliderVolume(e.target.valueAsNumber);
			setDisplay('Volume: ' + Math.round(e.target.valueAsNumber * 100));
			setTimeout(() => setDisplay(''), 1000);
		}
	};

	const handlePower = () => {
		setIsPower((isPower) => !isPower);
	};
	const toggleBank = () => {
		if (isPower) setIsPiano(!isPiano);
	};
	const handleClick = (soundObj) => {
		if (isPower) {
			document.getElementById(soundObj.letter).volume = sliderVolume;
			const audio = document.getElementById(soundObj.letter);
			audio.parentElement.className = 'colorButton';
			setTimeout(() => (audio.parentElement.className = 'drum-pad'), 150);
			audio.currentTime = 0;
			audio.play();
			setDisplay(soundObj.name);
		}
	};
	const handleKeyDown = (event) => {
		if (isPower && letters.includes(event.key.toUpperCase())) {
			document.getElementById(event.key.toUpperCase()).volume = sliderVolume;
			const audioButton = document.getElementById(event.key.toUpperCase());
			audioButton.currentTime = 0;
			audioButton.play();
			audioButton.parentElement.className = 'colorButton';
			setTimeout(() => (audioButton.parentElement.className = 'drum-pad'), 150);
			setDisplay(audioButton.parentElement.id);
		}
	};

	return (
		<div id="drum-machine">
			<div id="buttons">
				{isPiano ? (
					<PianoPlayer
						value={sliderVolume}
						handleClick={handleClick}
						handleKeyDown={handleKeyDown}
						pianoSounds={PIANOSOUNDS}
					/>
				) : (
					<DrumPlayer
						value={sliderVolume}
						handleClick={handleClick}
						handleKeyDown={handleKeyDown}
						drumSounds={DRUMSOUNDS}
					/>
				)}
			</div>
			<div id="controls">
				<p id="power-text" className="button-text">
					Power{' '}
				</p>
				<div id="power-box" className="button-box" style={isPower ? BUTTONLEFT : BUTTONRIGHT}>
					<button id="power-button" className="button" onClick={handlePower} />
				</div>
				<div id="display">{display}</div>
				<VolumeSlider classes="" onChange={handleSliderChange} value={sliderVolume} />
				<p id="bank-text" className="button-text">
					Bank
				</p>
				<div id="bank-box" className="button-box" style={!isPiano ? BUTTONLEFT : BUTTONRIGHT}>
					<button id="bank-button" onClick={toggleBank} className="button" />
				</div>
			</div>
		</div>
	);
};

export default DrumMachine;
