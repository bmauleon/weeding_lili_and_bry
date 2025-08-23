import * as React from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

const dateWeeding = '2026-03-15T16:30:00'

function Countdown() {
    return (
        <FlipClockCountdown
        to={new Date(dateWeeding)}
        labels={['Días', 'Horas', 'Minutos', 'Segundos']}
        labelStyle={{ fontSize: 10, fontWeight: 500, textTransform: 'uppercase' }}
        digitBlockStyle={{ width: 30, height: 60, fontSize: 30, backgroundColor: '#748B3D' }}
        dividerStyle={{ color: 'white', height: 1 }}
        separatorStyle={{ color: '#748B3D', size: '6px' }}
        duration={0.5}
      />
    );
}

export default Countdown;