import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import {colors} from '../../utlis/constants';

const styles = StyleSheet.create({
  textInputView: {
    // width: '90%',
    // backgroundColor: colors.white,
    // height: heightPercentageToDP('5%'),
    // borderRadius: widthPercentageToDP('2%'),
    // alignSelf: 'center',
    // paddingRight: widthPercentageToDP('2%'),
    // paddingLeft: widthPercentageToDP('2%'),
    // justifyContent: 'center',
    // borderColor: colors.grey2,
    // borderBottomWidth: heightPercentageToDP('0.2%'),

    width: '90%',
    alignSelf: 'center',
  },
  textInputViewMultiline: {
    width: '90%',
    backgroundColor: colors.white1,
    height: heightPercentageToDP('10%'),
    borderRadius: widthPercentageToDP('1%'),
    alignSelf: 'center',
    borderColor: colors.grey2,
    borderWidth: heightPercentageToDP('0.2%'),
    borderRadius: widthPercentageToDP('2%'),
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
    color: colors.black,

    padding: 1,
    marginTop: '2%',
  },
  fieldText: {
    width: '90%',
    alignSelf: 'center',
  },
});

export default styles;
