import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import UiHeader from '../../../common/uiHeader';
import {connect} from 'react-redux';
import sizes from '../../../constent/sizes';
import _ from 'lodash';
import colors from '../../../constent/colors';
import {useState} from 'react';
const PhoneCodeAndFlag = props => {
  const {navigation, CountryCode} = props;
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [filterData, setFilterData] = useState(CountryCode);
  const getItem = (item, stdCode) => {
    navigation.navigate('PhoneNumberCheck', {
      countName: item.item.name.common,
      stdCode: stdCode,
      selected: true,
    });
  };
  const renderItem = (item, index) => {
    const {name, idd, flags} = item.item;
    const codeConcat = _.concat(idd.root, idd.suffixes);
    const stdCode = codeConcat[0] + codeConcat[1];
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => getItem(item, stdCode)}>
        <View style={{flexDirection: 'row'}} key={index}>
          <Image style={styles.image} source={{uri: flags.png}} />
          <Text style={{color: 'black'}}>{name.common}</Text>
        </View>
        <View>
          <Text style={{color: 'grey', fontWeight: '700'}}>{stdCode}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const onSearchHnadler = text => {
    if (text) {
      const newData = CountryCode.filter(item => {
        const itemData = item.name.common
          ? item.name.common.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
      setSearch(text);
    } else {
      setFilterData(CountryCode);
      setSearch(text);
    }
  };
  console.log(search);
  return (
    <View>
      <UiHeader
        title="Choose your number"
        backButton
        iconName="search"
        onLeftPress={() => navigation.navigate('PhoneNumberCheck')}
        onRightPress={() => setOpen(true)}
        changeTextInput={open}
        onChange={onSearchHnadler}
      />
      <FlatList
        data={filterData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
const mapStateToProps = state => {
  return {
    CountryCode: state.phoneNumberCheckReducer.getCountryCodeandFlag,
  };
};
export default connect(mapStateToProps, null)(PhoneCodeAndFlag);

const styles = StyleSheet.create({
  container: {
    width: sizes.width,
    height: 50,
    flexDirection: 'row',
    padding: 10,
    marginBottom: 5,
    borderBottomWidth: 0.2,
    borderBottomColor: colors.lightPrimary,
    justifyContent: 'space-between',
  },
  image: {
    height: 20,
    width: 20,
    marginRight: 15,
  },
});
