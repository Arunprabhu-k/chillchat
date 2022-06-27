import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import sizes from '../constent/sizes';
import colors from '../constent/colors';

const UiModal = props => {
  const {open, close, text} = props;
  return (
    <View style={styles.centeredView} onPress={close}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={open}
        onRequestClose={close}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.textStyle} onPress={close}>
              help
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default UiModal;

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginRight: 5,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 15,
    alignItems: 'flex-start',
    justifyContent: 'center',
    shadowColor: 'black',
    elevation: 5,
    width: sizes.width * 0.4,
    height: 50,
  },
  textStyle: {
    color: 'grey',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  modalText: {
    marginBottom: 15,
  },
  button: {
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
});
