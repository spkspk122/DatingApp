import React, {useState} from 'react';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {RegisterScreen} from '../../constant/strings';
import {baseStyle} from '../../constant/themes';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {colors} from '../../utlis/constants';
import Spacer from '../../components/spacer';
import styles from './styles';
import CustomButton from '../../components/button';

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
      style={{flex: 1}}>
      <Spacer height={heightPercentageToDP('12%')} />
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{marginHorizontal: '9%'}}>
          <Text
            style={[
              baseStyle.txtStyleOutPoppinBold(
                heightPercentageToDP('2.8%'),
                colors.white,
              ),
              {fontWeight: '900'},
            ]}>
            Verify your contact number
          </Text>
          <Spacer height={heightPercentageToDP('2%')} />
          <Text
            style={[
              baseStyle.txtStyleOutPoppinBold(
                heightPercentageToDP('2.3%'),
                colors.white,
              ),
              {textAlign: 'center', fontWeight: '900'},
            ]}>
            Enter your OTP code here
          </Text>
        </View>
        <OTPInputView
          style={{width: '80%', height: 150}}
          pinCount={4}
          // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          // onCodeChanged = {code => { this.setState({code})}}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={code => {
            console.log(`Code is ${code}, you are good to go!`);
          }}
        />

        <Text
          style={[
            baseStyle.txtStyleOutPoppinBold(
              heightPercentageToDP('2%'),
              colors.white,
            ),
            {textAlign: 'center', fontWeight: '700'},
          ]}>
          Didn’t receive OTP?
        </Text>
        <Spacer height={heightPercentageToDP('3%')} />
        <CustomButton
          lable={RegisterScreen.resend}
          CustomStyle={{
            borderRadius: heightPercentageToDP('4%'),

            paddingHorizontal: '8%',
            width: '90%',
            borderColor: colors.white,
            borderWidth: 1,
            paddingVertical: '1.9%',
          }}
        />
      </View>
    </LinearGradient>
  );
}
export default VerifyOtp;
