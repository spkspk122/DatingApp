import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../utlis/constants';
import TextInputProfile from '../../components/textInput';
import {iconpathurl} from '../../constant/iconpathurl';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {loginScreen} from '../../constant/strings';
import styles from './styles';
import {baseStyle} from '../../constant/themes';
import Spacer from '../../components/spacer';
import {CountryPicker} from 'react-native-country-codes-picker';
import CustomButton from '../../components/button';
import NavigationServices from '../../navigation/NavigationServices';
import {SCREENS} from '../../constant';

const Login = () => {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('');
  const [phno, setPhno] = useState('');

  const validation = () => {
    if (phno == '' && countryCode == '') {
      alert('Please enter phone number');
    } else {
      NavigationServices.navigate(SCREENS.HomeScreen);
    }
  };
  return (
    <View
      style={{
        backgroundColor: colors.backGroundColor,

        flex: 1,
      }}>
      <View style={{width: '90%', alignSelf: 'center'}}>
        <Image
          source={iconpathurl.loginBanner}
          style={{
            height: heightPercentageToDP('37%'),
            width: widthPercentageToDP('57%'),

            resizeMode: 'contain',
            alignSelf: 'center',
          }}
        />

        <Text
          style={[
            baseStyle.txtStyleOutPoppinBold(
              heightPercentageToDP('2.8%'),
              colors.black,
            ),
            styles.createAccTxt,
          ]}>
          {loginScreen.login}
        </Text>
        <Spacer height={heightPercentageToDP('5%')} />
        <View
          style={{
            flexDirection: 'row',
            width: '95%',
            alignSelf: 'center',
            marginLeft: '5%',
          }}>
          <TouchableOpacity
            onPress={() => setShow(true)}
            style={{
              width: '15%',
              borderWidth: 1,
              borderColor: colors.black,
              borderRadius: 5,
            }}>
            <Text
              style={[
                baseStyle.txtStyleOutLatoRegular(
                  heightPercentageToDP('1.7%'),
                  colors.black,
                ),
                {marginTop: heightPercentageToDP('1%'), marginLeft: '10%'},
              ]}>
              {countryCode ? countryCode : '+91'}
            </Text>
          </TouchableOpacity>
          {/* For showing picker just put show state to show prop */}
          <CountryPicker
            show={show}
            // when picker button press you will get the country object with dial code
            pickerButtonOnPress={item => {
              setCountryCode(item.dial_code);
              setShow(false);
            }}
          />
          <View style={{width: '80%'}}>
            <TextInputProfile
              // label={RegisterScreen.fullName}
              placeholder={'00000  00000'}
              onChangeText={txt => setPhno(txt)}
              value={phno}
              customStyle={{
                borderTopWidth: 1,
                borderColor: colors.black,
                borderRightWidth: 1,
                borderLeftWidth: 1,
                borderRadius: 5,
              }}
              maxLength={10}
              keyboardType={'Numeric'}
            />
          </View>
        </View>
        <Spacer height={heightPercentageToDP('5%')} />
        <CustomButton
          onPress={validation}
          lable={loginScreen.verifyOtp}
          CustomStyle={{
            borderRadius: heightPercentageToDP('4%'),

            borderColor: colors.white,
            borderWidth: 1,
            paddingVertical: '1.9%',
          }}
        />
        <Spacer height={heightPercentageToDP('25%')} />
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            alignItems: 'flex-end',
          }}>
          <Text
            style={[
              baseStyle.txtStyleOutLatoRegular(
                heightPercentageToDP('2%'),
                colors.gray,
              ),
            ]}>
            New User ?
          </Text>
          <TouchableOpacity
            onPress={() => NavigationServices.navigate(SCREENS.onBoarding)}>
            <Text
              style={[
                baseStyle.txtStyleOutPoppinBold(
                  heightPercentageToDP('2%'),
                  colors.black,
                ),
                {fontWeight: '900'},
              ]}>
              Sign UP
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
