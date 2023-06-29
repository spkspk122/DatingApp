import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  View,
  FlatList,
} from 'react-native';

import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
// import Logo from '../../assest/svg/logoOne.svg';

import {iconpathurl} from '../../constant/iconpathurl';
import {strings} from '../../constant/strings';

import {Slider} from 'react-native-elements';
import {Animated} from 'react-native';
import Spacer from '../../components/spacer';
import {colors} from '../../utlis/constants';
import {baseStyle} from '../../constant/themes';
import TextInputProfile from '../../components/textInput';
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';

function OneRecOnBoardarding() {
  return (
    <View style={styles.mainContainer}>
      <KeyboardAwareScrollView style={{width: '90%', alignSelf: 'center'}}>
        <Spacer height={heightPercentageToDP('2.5%')} />
        <Image
          source={iconpathurl.signupBanner}
          style={{
            height: heightPercentageToDP('27%'),
            width: '90%',
            // marginTop: '5%',
            resizeMode: 'cover',
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
          Create Your Account
        </Text>
        <Spacer height={heightPercentageToDP('1.5%')} />
        <TextInputProfile label="Gender" placeholder={'enter your Gender'} />
        <Spacer height={heightPercentageToDP('1.5%')} />
        <TextInputProfile label="FullName" placeholder={'enter your Gender'} />
        <Spacer height={heightPercentageToDP('1.5%')} />
        <TextInputProfile
          label="EmailAddress"
          placeholder={'enter your Gender'}
        />
        <Spacer height={heightPercentageToDP('1.5%')} />
        <TextInputProfile
          label="Password"
          placeholder={'enter your Gender'}
          secureTextEntry={true}
        />
        <Spacer height={heightPercentageToDP('1%')} />
        <TouchableOpacity>
          <Text
            style={[
              baseStyle.txtStyleOutPoppinBold(
                heightPercentageToDP('1.8%'),
                colors.black,
              ),
              [{fontWeight: '700', textAlign: 'right', marginRight: '5%'}],
            ]}>
            Forget Password ?
          </Text>
        </TouchableOpacity>

        <Spacer height={heightPercentageToDP('3.8%')} />
        <TouchableOpacity>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            colors={['#603F8B', '#F12E90']}
            style={{
              padding: '3.5%',
              width: '35%',
              alignSelf: 'center',
              borderRadius: heightPercentageToDP('25%'),
            }}>
            <Text
              style={[
                baseStyle.txtStyleOutPoppinBold(
                  heightPercentageToDP('2%'),
                  colors.white1,
                ),
                {textAlign: 'center', fontWeight: 'bold'},
              ]}>
              Sign up
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <Spacer height={heightPercentageToDP('3%')} />
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <Text
            style={[
              baseStyle.txtStyleOutPoppinBold(
                heightPercentageToDP('1.8%'),
                colors.gray4,
              ),
              [{fontWeight: '700'}],
            ]}>
            Already having account ?{' '}
          </Text>
          <TouchableOpacity>
            <Text
              style={[
                baseStyle.txtStyleOutPoppinBold(
                  heightPercentageToDP('2%'),
                  colors.black,
                ),
                [{fontWeight: '900'}],
              ]}>
              Sign in ?
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}
export default OneRecOnBoardarding;
