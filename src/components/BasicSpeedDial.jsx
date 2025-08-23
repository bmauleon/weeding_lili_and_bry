import React, { useState, useRef } from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';

export default function BasicSpeedDial() {
    const [audioStatus, changeAudioStatus] = useState(false);
    const myRef = useRef();

    const startAudio = () => {
        myRef.current.play();

        changeAudioStatus(true);
    };

    const pauseAudio = () => {
        myRef.current.pause();
        changeAudioStatus(false);
    };
    return (
        <>
        <audio
            ref={myRef}
            src="./src/assets/music/song.mp3"
        />
        {audioStatus ? (
            <SpeedDial
                ariaLabel="Music"
                sx={{ margin: 0,
                    top: 'auto',
                    right: 20,
                    bottom: 20,
                    left: 'auto',
                    position: 'fixed'}}
                icon={ <PauseCircleIcon />}
                onClick={ pauseAudio }
            >
            </SpeedDial>
        ) : (
            <SpeedDial
                ariaLabel="Music"
                sx={{ margin: 0,
                    top: 'auto',
                    right: 20,
                    bottom: 20,
                    left: 'auto',
                    position: 'fixed'}}
                icon={ <PlayCircleIcon />}
                onClick={ startAudio }
            >
            </SpeedDial>
        )}
        </>
    );
}