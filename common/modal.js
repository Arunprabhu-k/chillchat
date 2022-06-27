import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-elements';
import colors from '../constent/colors';

const ModalPopup = props => {
  const {visible, Children, onPress, closebutton, actionName, message} = props;
  return (
    <View>
      <Modal transparent visible={visible}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <View style={{alignItems: 'center'}}>
              {closebutton && (
                <TouchableOpacity style={styles.header} onPress={closebutton}>
                  <Icon name="close" type="font-awesome" />
                </TouchableOpacity>
              )}

              <View style={{marginVertical: 15}}>
                <Text style={{fontSize: 15, fontWeight: '500'}}>{message}</Text>
              </View>
              {onPress && (
                <View>
                  <TouchableOpacity
                    color={colors.primary}
                    style={{borderRadius: 10}}
                    onPress={onPress}>
                    <Text style={{color: colors.primary, fontWeight: '700'}}>
                      {actionName}
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalPopup;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    elevation: 20,
  },
  header: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: 40,
  },
});
