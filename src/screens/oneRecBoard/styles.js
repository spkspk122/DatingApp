import {StyleSheet} from 'react-native';

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import {colors} from '../../utlis/constants';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.backGroundColor,
    flex: 1,
  },
  createAccTxt: {
    alignSelf: 'center',
    fontWeight: '900',
    elevation: 10,
  },
});

export default styles;
