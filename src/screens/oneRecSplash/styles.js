import {StyleSheet} from 'react-native';

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    height: heightPercentageToDP('25%'),
    resizeMode: 'contain',
    width: widthPercentageToDP('70%'),
    marginTop: heightPercentageToDP('15%'),
    alignSelf: 'center',
  },
  mainView: {
    // backgroundColor: '#fff',
    flex: 1,
  },
  datatingtxt: {
    alignSelf: 'center',
    fontWeight: '900',
  },
  gradiantContainer: {width: '90%', alignSelf: 'center'},
  txt2: {alignSelf: 'center', fontWeight: '700'},
});

export default styles;
