import React, {useState, useEffect} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import styles from './styles';
// import Logo from '../../assest/svg/logoOne.svg';

import {iconpathurl} from '../../constant/iconpathurl';
import {RegisterScreen, placeholder, strings} from '../../constant/strings';

import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';
import Spacer from '../../components/spacer';
import TextInputProfile from '../../components/textInput';
import {baseStyle} from '../../constant/themes';
import {colors} from '../../utlis/constants';
import CustomButton from '../../components/button';
import DatePicker from '../../components/datePicker';
import DropDownPicker from 'react-native-dropdown-picker';
import NavigationServices from '../../navigation/NavigationServices';
import {SCREENS} from '../../constant';

function OneRecOnBoardarding() {
  const [data, setData] = useState({
    name: '',
    dob: '',
    email: '',
  });

  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: '180cm', value: '180cm'},
    {label: '150cm', value: '150cm'},
  ]);

  const callBack = (txt, id) => {
    let copideData = {...data};

    switch (id) {
      case 'name':
        copideData.name = txt;
        return setData(copideData);
      case 'DOB':
        copideData.dob = txt;
        return setData(copideData);
      case 'email':
        copideData.email = txt;
        return setData(copideData);
      default:
        console.log('defalusted called');
        return setData(copideData);
    }
  };

  const validation = () => {
    if (data.name == '') {
      alert('Please enter your name');
    } else if (value === null) {
      alert('please choose height range ');
    } else if (data.email == '') {
      alert('Please enter your emailId');
    } else {
      NavigationServices.navigate(SCREENS.HomeScreen);
    }
  };
  useEffect(() => {
    console.log(data?.dob, '---------');
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={{width: '90%', alignSelf: 'center'}}>
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
          {RegisterScreen.confrimYourDetails}
        </Text>
        <Spacer height={heightPercentageToDP('1.5%')} />
        <TextInputProfile
          label={RegisterScreen.fullName}
          // placeholder={placeholder.enteryourname}
          onChangeText={txt => {
            callBack(txt, 'name');
          }}
          value={data?.name}
        />
        <Spacer height={heightPercentageToDP('1.5%')} />
        <TextInputProfile
          label={RegisterScreen.email}
          // placeholder={placeholder.enteryourname}
          onChangeText={txt => {
            callBack(txt, 'email');
          }}
          value={data?.email}
        />

        <Spacer height={heightPercentageToDP('2.5%')} />

        <DatePicker
          maxDate={new Date()}
          dateValueCallback={date => callBack(date, 'DOB')}
          lable={RegisterScreen.dob}
          date={data?.dob}
          placeholder={`Enter your ${strings.dateOfBirth}`}
        />
        <Spacer height={heightPercentageToDP('2%')} />
        <View style={{width: '90%', alignSelf: 'center'}}>
          <Text
            style={[
              baseStyle.txtStyleOutPoppinBold(
                heightPercentageToDP('1.8%'),
                colors.gray,
              ),
            ]}>
            {RegisterScreen.Yourheight}
          </Text>
          {/* <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: colors.gray,
            }}> */}
          {/* <TouchableOpacity
              style={{alignSelf: 'flex-end'}}
              onPress={() => setShow(!show)}>
              <Image
                source={iconpathurl.downArrow}
                style={{
                  resizeMode: 'contain',
                  width: widthPercentageToDP('5%'),
                  height: heightPercentageToDP('5%'),
                }}
              />
            </TouchableOpacity> */}
          {show || (
            <View>
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: colors.gray,
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  borderTopWidth: 0,
                  // backgroundColor: 'red',
                  padding: 0,
                }}
                containerStyle={{zIndex: 3}}
                showArrowIcon={true}
                arrowIconStyle={{padding: '5%', backgroundColor: '#F12E90'}}
                placeholder={false}
              />
            </View>
          )}
          {/* </View> */}

          <Spacer height={heightPercentageToDP('1.5%')} />
        </View>
        <Spacer height={heightPercentageToDP('1.5%')} />
        <View style={{width: '90%', alignSelf: 'center'}}>
          <Text
            style={[
              baseStyle.txtStyleOutPoppinBold(
                heightPercentageToDP('1.8%'),
                colors.gray,
              ),
            ]}>
            {RegisterScreen.Yourstatus}
          </Text>

          <Spacer height={heightPercentageToDP('1.5%')} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '95%',
            }}>
            <CustomButton
              lable={RegisterScreen.single}
              CustomStyle={{
                borderRadius: heightPercentageToDP('1.5%'),
                width: '90%',
                padding: '7.5%',
              }}
            />

            <CustomButton
              lable={RegisterScreen.devorice}
              CustomStyle={{
                borderRadius: heightPercentageToDP('1.5%'),
                width: '90%',
                padding: '7.5%',
              }}
            />
          </View>
        </View>
        <Spacer height={heightPercentageToDP('1%')} />

        <Spacer height={heightPercentageToDP('3%')} />

        <CustomButton
          lable={RegisterScreen.continue}
          onPress={validation}
          CustomStyle={{
            borderRadius: heightPercentageToDP('1.5%'),
            padding: '3.5%',
          }}
        />
        <Spacer height={heightPercentageToDP('3%')} />
      </View>
    </View>
  );
}
export default OneRecOnBoardarding;
