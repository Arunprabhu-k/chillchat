import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import sizes from '../constent/sizes';
import {Overlay} from 'react-native-elements';
import colors from '../constent/colors';

const UiAlert = props => {
  const {
    visible,
    title,
    message,
    subMessage,
    onConfirm,
    leftAction,
    rightAction = 'true',
    leftActionName,
    onLeftConfirm,
    onRightConfirm,
  } = props;
  return (
    <Overlay visible={visible}>
      <View style={styles.container}>
        {title && <Text style={styles.titleText}>{title}</Text>}
        {subMessage && <Text style={styles.subMessageText}>{subMessage}</Text>}
        {message && <Text style={styles.titleText}>{message}</Text>}
        <View style={styles.actions}>
          {leftAction && (
            <TouchableOpacity style={styles.leftButton} onPress={onLeftConfirm}>
              <Text style={styles.confirmButtonText}>{leftActionName}</Text>
            </TouchableOpacity>
          )}
          {rightAction && (
            <TouchableOpacity
              style={[styles.rightButton]}
              onPress={onRightConfirm}>
              <Text style={styles.confirmButtonText}>OK</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Overlay>
  );
};

export default UiAlert;

const styles = StyleSheet.create({
  container: {
    width: sizes.width * 0.7,
    height: 'auto',
    justifyContent: 'space-between',
    padding: 10,
  },
  titleText: {
    color: 'black',
    marginBottom: 15,
  },
  subMessageText: {
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  messageText: {
    color: 'black',
    marginBottom: 20,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  confirmButtonText: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: '700',
  },
});
