import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from './styles';
import {baseStyle} from '../../constant/themes';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {colors} from '../../utlis/constants';
import Spacer from '../spacer';

function TextInputProfile(props) {
  const multilineTextInput = () => {
    return (
      <View style={styles.textInputViewMultiline}>
        <TextInput
          placeholder={props?.placeholder}
          placeholderTextColor={colors.grey2}
          style={[
            baseStyle.txtStyleOutPoppinMedium(
              heightPercentageToDP('2%'),
              colors.black1,
            ),
            styles.textInput,
          ]}
          defaultValue={props?.defaultValue}
          maxLength={props?.maxLength}
          keyboardType={props?.keyboardType}
          value={props?.value}
          onSubmit={props?.onSubmit}
          selectionColor="black"
          onChangeText={props?.onChangeText}
          secureTextEntry={props?.secureTextEntry}
          multiline={true}
          editable={props?.editable}
        />
      </View>
    );
  };

  const textInput = () => {
    return (
      <View style={styles.textInputView}>
        <TextInput
          placeholder={props?.placeholder}
          placeholderTextColor={colors.grey2}
          style={[
            baseStyle.txtStyleOutPoppinMedium(
              heightPercentageToDP('1.7%'),
              colors.black,
            ),
            styles.textInput,
          ]}
          defaultValue={props?.defaultValue}
          maxLength={props?.maxLength}
          keyboardType={props?.keyboardType}
          value={props?.value}
          onSubmit={props?.onSubmit}
          selectionColor="black"
          onChangeText={props?.onChangeText}
          secureTextEntry={props?.secureTextEntry}
          editable={props?.editable}
        />
      </View>
    );
  };

  return (
    <>
      {Boolean(props?.label) && (
        <>
          <Text
            style={[
              baseStyle.txtStyleOutPoppinMedium(
                heightPercentageToDP('2%'),
                colors.gray,
              ),
              styles.fieldText,
            ]}>
            {props?.label}
          </Text>
          <Spacer height={heightPercentageToDP('1%')} />
        </>
      )}
      {props?.type == 1 ? multilineTextInput() : textInput()}
    </>
  );
}

export default TextInputProfile;
