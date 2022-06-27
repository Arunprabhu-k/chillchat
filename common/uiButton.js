import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import colors from '../constent/colors';
import sizes from '../constent/sizes';

const UiButton = props => {
  const {
    title,
    onPress,
    size = 'large',
    bordered,
    type = 'filled',
    primary,
  } = props;
  const large = sizes.width / 1.3;
  const small = sizes.height * 0.1;
  const btnSize = size === 'large' ? large : small;
  const btnBgColor =
    type === 'filled' ? (primary ? colors.pink : colors.blue) : 'transparent';
  const btnTextColor = type === 'filled' ? '#ffffff' : '#6371c2';
  const btnBorderRadius = bordered ? 30 : 5;

  const containerCommonStyle = {
    backgroundColor: btnBgColor,
    paddingVertical: 8,
    marginVertical: 8,
    width: btnSize,
    borderRadius: btnBorderRadius,
  };

  const textCommonStyle = {
    color: btnTextColor,
    fontSize: 16,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontFamily: 'Quicksand-Medium',
  };
  return (
    <TouchableOpacity onPress={onPress} dis>
      <View style={[containerCommonStyle]}>
        <Text style={[textCommonStyle]}> {title} </Text>
      </View>
    </TouchableOpacity>
  );
};

export default UiButton;
