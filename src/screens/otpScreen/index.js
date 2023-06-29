import React, {useState} from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import OTPInputView from '@twotalltotems/react-native-otp-input';

function VerifyOtp() {
  const [otp, setOtp] = useState('');

  const handleOtpChange = otp => {
    setOtp(otp);
  };
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={['#603F8B', '#F12E90']}
      style={{flex: 1}}></LinearGradient>
  );
}
export default VerifyOtp;
