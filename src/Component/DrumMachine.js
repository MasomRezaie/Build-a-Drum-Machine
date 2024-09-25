// Drum Machine project
import React, { useState } from 'react';

const DrumMachine = () => {
  const [display, setDisplay] = useState('');

  const drumPads = [
    { key: 'Q', id: 'Heater 1', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
    { key: 'W', id: 'Heater 2', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
    { key: 'E', id: 'Heater 3', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
    { key: 'A', id: 'Heater 4', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
    { key: 'S', id: 'Clap', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
    { key: 'D', id: 'Open-HH', src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
    { key: 'Z', id: 'Kick-n-Hat', src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
    { key: 'X', id: 'Kick', src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
    { key: 'C', id: 'Closed-HH', src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' },
  ];

  const playSound = (id, key) => {
    const audio = document.getElementById(key);
    audio.play();
    setDisplay(id);
  };

  const handleKeyPress = (e) => {
    const pad = drumPads.find((p) => p.key === e.key.toUpperCase());
    if (pad) playSound(pad.id, pad.key);
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div id="drum-machine" className="container">
      <div id="display" className="display">{display}</div>
      <h1 id='drum'>Drum Machine</h1>
      <div className="pads">
        {drumPads.map((pad) => (
          <div
            role="button"
            tabIndex="0"
            key={pad.key}
            id={pad.id}
            className="drum-pad"
            onClick={() => playSound(pad.id, pad.key)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') playSound(pad.id, pad.key);
            }}
          >
            {pad.key}
            <audio className="clip" id={pad.key} src={pad.src}>
              <track kind="captions" />
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrumMachine;
