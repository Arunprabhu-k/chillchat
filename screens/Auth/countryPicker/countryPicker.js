import {
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import sizes from '../../../constent/sizes';
import colors from '../../../constent/colors';
import UiHeader from '../../../common/uiHeader';
import UiInput from '../../../common/uiInput';
const CountryPicker = props => {
  const {visible, data} = props;
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [filterData, setFilterData] = useState(data);
  const onSearchHnadler = text => {
    console.log(text);
    if (text) {
      const newData = data.filter(item => {
        console.log(item.name);
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
      setSearch(text);
    } else {
      setFilterData(data);
      setSearch(text);
    }
  };
  const updatedState = (value) =>{
      const selectedItem = [selectedCode]
      const valueIndex = selectedItem.indexOf(value);
  }
  const renderCountryCode = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        style={{
          height: 60,
          width: sizes.width * 0.9,
          marginVertical: sizes.base,
          backgroundColor: colors.white,
          paddingHorizontal: sizes.base * 2,
          borderRadius: 10,
          elevation: 5,
          shadowColor: '#52006A',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        onPress={() => updatedState(item.dial_cod)}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap',
            width: '70%',
          }}>
          <Text style={{color: colors.black, fontSize: 16, fontWeight: '700'}}>
            {item.name}
          </Text>
          <Text style={{color: colors.pink, fontSize: 18, fontWeight: '700'}}>
            {' '}
            ( {item.dial_code})
          </Text>
        </View>

        <Image source={require('../../../assets/images/tik.png')} />
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <Modal visible={visible}>
        <View
          style={{
            flex: 1,
            width: sizes.width,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.white,
          }}>
          <UiInput
            onChangeText={onSearchHnadler}
            size="full"
            rightImage={require('../../../assets/images/search.png')}
            placeholder="search your country"
            placeholdeNormal
          />
          <FlatList
            data={filterData}
            renderItem={renderCountryCode}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </Modal>
    </View>
  );
};

export default CountryPicker;

const styles = StyleSheet.create({});
