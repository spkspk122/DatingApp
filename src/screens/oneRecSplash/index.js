import React from 'react';
import {Image, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

import {heightPercentageToDP} from 'react-native-responsive-screen';
import Spacer from '../../components/spacer';
import {iconpathurl} from '../../constant/iconpathurl';
import {baseStyle} from '../../constant/themes';
import {colors} from '../../utlis/constants';
import {SCREENS} from '../../constant';

function SplashScreen(props) {
  setTimeout(() => {
    props.navigation.navigate(SCREENS.onBoarding);
  }, 3000);

  return (
    <View style={styles.mainView}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={['#603F8B', '#F12E90']}
        style={{flex: 1}}>
        <View style={styles.gradiantContainer}>
          <Image source={iconpathurl.logo} style={styles.container} />
          <Spacer height={heightPercentageToDP('5%')} />
          <Text
            style={[
              baseStyle.txtStyleOutOpenSans(
                heightPercentageToDP('2.8%'),
                colors.white1,
              ),
              styles.datatingtxt,
            ]}>
            DATING APP
          </Text>

          <Spacer height={heightPercentageToDP('2%')} />
          <Text
            style={[
              baseStyle.txtStyleOutOpenSans(
                heightPercentageToDP('2.3%'),
                colors.white1,
              ),
              styles.txt2,
            ]}>
            Connecting Hearts,
          </Text>
          <Text
            style={[
              baseStyle.txtStyleOutOpenSans(
                heightPercentageToDP('2.3%'),
                colors.white1,
              ),
              styles.txt2,
            ]}>
            {'  '}One Swipe at a Time
          </Text>

          <Spacer height={heightPercentageToDP('30%')} />
          <Text
            style={[
              baseStyle.txtStyleOutOpenSans(
                heightPercentageToDP('2.3%'),
                colors.white1,
              ),
              styles.txt2,
            ]}>
            M S INFO TECH
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
}

export default SplashScreen;
