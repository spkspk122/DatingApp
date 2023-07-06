/* eslint-disable prettier/prettier */

import {StyleSheet} from 'react-native';
import {colors} from '../../utlis/constants';
import {HeightDimension, WidthDimension} from '../../utlis/HelperStyle';
import {heightPercentageToDP} from 'react-native-responsive-screen';
// verify Otp style
const styles = StyleSheet.create({
  otpVerficationInput: {
    alignItems: 'center',
  },
  otpVerficationWidth: {
    width: WidthDimension(0.65),
    height: HeightDimension(0.14),
  },
  underlineStyleBase: {
    width: WidthDimension(0.13),
    height: HeightDimension(0.07),
    backgroundColor: colors.white,
    borderColor: colors.white,
    borderRadius: heightPercentageToDP('1%'),
  },
  underlineStyleHighLighted: {
    borderColor: colors.gray_F9,
  },
});

export default styles;
