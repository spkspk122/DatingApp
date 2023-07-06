import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

// import Logo from '../../assest/svg/logoOne.svg';

import {iconpathurl} from '../../constant/iconpathurl';
import {RegisterScreen, placeholder} from '../../constant/strings';

import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';
import Spacer from '../../components/spacer';
import TextInputProfile from '../../components/textInput';
import {baseStyle} from '../../constant/themes';
import {colors} from '../../utlis/constants';

function CustomButton(props) {
  const {lable, onPress, CustomStyle} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={['#603F8B', '#F12E90']}
        style={[
          {
            // padding: '3.5%',
            width: '35%',
            alignSelf: 'center',
            // borderRadius: heightPercentageToDP('25%'),\
          },
          CustomStyle,
        ]}>
        <Text
          style={[
            baseStyle.txtStyleOutPoppinBold(
              heightPercentageToDP('2%'),
              colors.white1,
            ),
            {textAlign: 'center', fontWeight: 'bold'},
          ]}>
          {lable}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
export default CustomButton;
