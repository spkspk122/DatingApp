import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {heightPercentageToDP} from 'react-native-responsive-screen';

// import Logo from '../../assest/svg/logoOne.svg';

import {RegisterScreen} from '../../constant/strings';

import Spacer from '../../components/spacer';
import {baseStyle} from '../../constant/themes';
import {colors} from '../../utlis/constants';
import moment from 'moment/moment';

function DatePicker(props) {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(props?.date || '');

  useEffect(() => {
    setDate(props.date);
    // console.log(props.date, "---------");
  }, [props.date]);
  return (
    <View
      style={{
        width: '90%',
        alignSelf: 'center',
      }}>
      <Text
        style={[
          baseStyle.txtStyleOutInterRegular(
            heightPercentageToDP('2%'),
            colors.gray,
          ),
        ]}>
        {props?.lable}
      </Text>
      <Spacer height={heightPercentageToDP('1%')} />
      <TouchableOpacity
        onPress={() => {
          setShow(!show);
        }}
        style={{
          borderBottomWidth: 1,
          borderBottomColor: colors.gray,
        }}>
        <Text
          style={[
            baseStyle.txtStyleOutInterRegular(
              heightPercentageToDP('1.8%'),
              colors.gray,
            ),
          ]}>
          {Boolean(date) ? moment(date).format('DD/MM/YY') : 'DD/MM/YY'}
        </Text>
        <Spacer height={heightPercentageToDP('1%')} />
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={show}
        mode="date"
        onConfirm={date => {
          console.log('confirmedDate', date);
          setDate(date);
          setShow(false);
          Boolean(props?.dateValueCallback) && props?.dateValueCallback(date);
        }}
        onCancel={() => {
          setShow(false);
        }}
        onChange={date => {
          console.log('onchangeddate', date);
        }}
        minimumDate={props?.minDate}
        maximumDate={props?.maxDate}
        date={Boolean(date) ? date : new Date()}
      />
    </View>
  );
}
export default DatePicker;
