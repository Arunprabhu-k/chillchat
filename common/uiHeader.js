import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import sizes from '../constent/sizes';
import colors from '../constent/colors';
import {Icon, Input} from 'react-native-elements';
import UiInput from './uiInput';

const UiHeader = props => {
  const {
    title,
    onLeftPress,
    onRightPress,
    backButton,
    iconName,
    changeTextInput,
    onChange,
    value,
  } = props;
  return (
    <View style={styles.header}>
      {backButton && (
        <Icon
          name="arrow-left"
          type="font-awesome"
          style={styles.image}
          size={18}
          onPress={onLeftPress}
        />
      )}
      {changeTextInput ? (
        <TextInput
          placeholder="Search countries"
          style={{
            width: sizes.width * 0.9,
            paddingHorizontal: 10,
            fontSize: 20,
          }}
          onChangeText={onChange}
          value={value}
        />
      ) : (
        <>
          <Text style={[styles.text, {textAlign: 'center'}]}>{title}</Text>
          <Icon
            name={iconName}
            type="font-awesome"
            style={styles.image}
            size={18}
            onPress={onRightPress}
          />
        </>
      )}
    </View>
  );
};

export default UiHeader;

const styles = StyleSheet.create({
  header: {
    width: sizes.width,
    height: 50,
    backgroundColor: colors.transparent,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  text: {
    color: colors.primary,
    flex: 2,
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: 'pink',
  },
});
