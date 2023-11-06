import React, { useEffect, useState } from 'react';
import './style.css';

const Clock = ({ width, height, rowHeight }) => {
  const [clockState, setClockState] = useState({
    secondRatio: 0,
    minuteRatio: 0,
    hourRatio: 0,
  });
  const [scaleStype, setScaleStype] = useState();
  useEffect(() => {
    setInterval(() => {
      setClock();
    }, 1000);
    console.log(height);
     
    const dis = rowHeight + 10;
    const baseHeight = rowHeight + 2;
    const currentHeight = baseHeight + (height - 1)*dis - 14;
    console.log(currentHeight);
    setScaleStype({
      transform: `scale(${currentHeight / 300})`,
      transformOrigin: '3% 3%',
    });
  }, [height]);

  const setClock = () => {
    const currentDate = new Date();
    let secondRatio = currentDate.getSeconds() / 60;
    let minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
    let hourRatio = (minuteRatio + currentDate.getHours()) / 12;
    setClockState({
      secondRatio: currentDate.getSeconds() / 60,
      minuteRatio: (secondRatio + currentDate.getMinutes()) / 60,
      hourRatio: (minuteRatio + currentDate.getHours()) / 12,
    });
  };

  return (
    <div className="clock" style={scaleStype}>
      <div className="hand hour" style={{ transform: `translate(-50%) rotate(${clockState.hourRatio * 360}deg)` }}></div>
      <div className="hand minute" style={{ transform: `translate(-50%) rotate(${clockState.minuteRatio * 360}deg)` }}></div>
      <div className="hand second" style={{ transform: `translate(-50%) rotate(${clockState.secondRatio * 360}deg)` }}></div>

      <div className="number number1">
        <div style={{ padding: '18px' }}>1</div>
      </div>
      <div className="number number2">
        <div style={{ padding: '18px' }}>2</div>
      </div>
      <div className="number number3">
        <div style={{ padding: '18px' }}>3</div>
      </div>
      <div className="number number4">
        <div style={{ padding: '18px' }}>4</div>
      </div>
      <div className="number number5">
        <div style={{ padding: '18px' }}>5</div>
      </div>
      <div className="number number6">
        <div style={{ padding: '18px' }}>6</div>
      </div>
      <div className="number number7">
        <div style={{ padding: '18px' }}>7</div>
      </div>
      <div className="number number8">
        <div style={{ padding: '18px' }}>8</div>
      </div>
      <div className="number number9">
        <div style={{ padding: '18px' }}>9</div>
      </div>
      <div className="number number10">
        <div style={{ padding: '18px' }}>10</div>
      </div>
      <div className="number number11">
        <div style={{ padding: '18px' }}>11</div>
      </div>
      <div className="number number12">
        <div style={{ padding: '18px' }}>12</div>
      </div>
    </div>
  );
};

export default Clock;
