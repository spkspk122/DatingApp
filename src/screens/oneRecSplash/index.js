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
import {strings} from '../../constant/strings';

function SplashScreen(props) {
  setTimeout(() => {
    props.navigation.navigate(SCREENS.login);
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
            {strings.datingApp}
          </Text>

          <Spacer height={heightPercentageToDP('1%')} />
          <View style={{width: '45%', alignSelf: 'center', marginLeft: '5%'}}>
            <Text
              style={[
                baseStyle.txtStyleOutOpenSans(
                  heightPercentageToDP('2%'),
                  colors.white1,
                ),
                styles.txt2,
              ]}>
              {strings.connecting}
            </Text>
          </View>

          <Spacer height={heightPercentageToDP('30%')} />
          <View
            style={{
              width: '65%',
              alignSelf: 'center',
            }}>
            <Text
              style={[
                baseStyle.txtStyleOutOpenSans(
                  heightPercentageToDP('2.3%'),
                  colors.white1,
                ),
                styles.txt2,
              ]}>
              {strings.designedandDevelope}
            </Text>
            <Spacer height={heightPercentageToDP('1%')} />
            <Text
              style={[
                baseStyle.txtStyleOutOpenSans(
                  heightPercentageToDP('2.3%'),
                  colors.white1,
                ),
                styles.txt2,
              ]}>
              {strings.developedCompany}
            </Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

export default SplashScreen;
