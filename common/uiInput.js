import {Image, StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {Icon, Input} from 'react-native-elements';
import colors from '../constent/colors';
import sizes from '../constent/sizes';
const UiInput = ({
  secureTextEntry,
  placeholder,
  image,
  onChangeText,
  value,
  size = 'large',
  onPress,
  disabled,
  keyboardType,
  rightImage,
  placeholdeNormal
}) => {
  const full = sizes.width * 0.9;
  const large = sizes.width * 0.8;
  const medium = sizes.width * 0.6;
  const small = sizes.width * 0.2;
  const inputSize =
    size === 'large'
      ? large
      : size === 'small'
      ? small
      : size === 'full'
      ? full
      : medium;
  const containerCommonStyle = {
    textAlign: 'left',
    color: '#000',
    textTransform: 'capitalize',
    borderBottomColor: colors.blue,
    borderBottomWidth: 0.8,
    fontSize: 15,
    color: colors.pink,
  };
  const container = {
    width: inputSize,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  };
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <View style={[container]}>
        <Input
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          placeholderTextColor={placeholdeNormal ? colors.lightPrimary: colors.pink}
          place
          style={[containerCommonStyle]}
          leftIcon={<Image source={image} />}
          rightIcon={<Image source={rightImage} />}
          keyboardType={keyboardType}
          disabled={disabled}
        />
      </View>
    </View>
  );
};

export default UiInput;

const styles = StyleSheet.create({});
