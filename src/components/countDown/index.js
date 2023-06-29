import React, {useEffect, useState} from 'react';
import {StyleSheet, Text} from 'react-native';

const minutesToMilliSeconds = min => min * 1000 * 60;
const formatTime = time => (time < 10 ? `0${time}` : time);

const Countdown = ({minutes = 1, resendOtp, setEnableResend}) => {
  const interval = React.useRef(null);
  const [milliSec, setMilliSec] = useState(minutesToMilliSeconds(minutes));
  const remainingMin = Math.floor(milliSec / 1000 / 60) % 60;
  const remainingSeconds = Math.floor(milliSec / 1000) % 60;

  const countDownFunc = () => {
    setMilliSec(time => {
      if (time === 0) {
        setEnableResend(false);
        clearInterval(interval.current);
        return time;
      }
      const timeLeft = time - 1000;

      return timeLeft;
    });
  };

  useEffect(() => {
    console.log(resendOtp, 'resendOtp');
    if (resendOtp !== 0) {
      clearInterval(interval.current);
      setEnableResend(true);
      setMilliSec(minutesToMilliSeconds(minutes));
      interval.current = setInterval(countDownFunc, 1000);
      return;
    }
    interval.current = setInterval(countDownFunc, 1000);
    return () => clearInterval(interval.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resendOtp]);

  return (
    <Text style={style.timerHeader}>
      {formatTime(remainingMin)}:{formatTime(remainingSeconds)}
    </Text>
  );
};

export default Countdown;

const style = StyleSheet.create({
  timerHeader: {
    fontSize: 16,
    fontWeight: '400',
    color: '#211F1F',
  },
});
