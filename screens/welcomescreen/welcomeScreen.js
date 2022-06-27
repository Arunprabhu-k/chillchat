import {
  Animated,
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import sizes from '../../constent/sizes';
import Sliders from '../../data/slider';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import colors from '../../constent/colors';
import slider from '../../data/slider';
import {size} from 'lodash';
const WelcomeScreen = ({navigation}) => {
  const flatListRef = useRef();
  const [currentPage, setCurrentPage] = useState(0);
  const [viewableItems, setViewableItems] = useState([]);
  const onHandleViewLableChange = useRef(({viewableItems}) => {
    setViewableItems(viewableItems);
  });
  useEffect(() => {
    if (!viewableItems[0] || currentPage === viewableItems[0].index) {
      return;
    }
    setCurrentPage(viewableItems[0].index);
  }, [viewableItems]);
  const onHandleNext = () => {
    if (currentPage === slider.length - 1) {
      return;
    }
    flatListRef.current.scrollToIndex({
      Animated: true,
      index: currentPage + 1,
    });
  };
  const onHandleBack = () => {
    if (currentPage === 0) {
      return;
    }
    flatListRef.current.scrollToIndex({
      Animated: true,
      index: currentPage - 1,
    });
  };
  const scrollToEnd = () => {
    flatListRef.current.scrollToIndex({
      Animated: true,
      index: slider.length - 1,
    });
  };
  console.log(currentPage, viewableItems);
  const renderTopSection = () => {
    return (
      <SafeAreaView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: sizes.base * 2,
            backgroundColor: 'transparent',
          }}>
          {/* back button */}
          <TouchableOpacity
            style={{padding: sizes.base}}
            onPress={onHandleBack}>
            {/* back icon */}
            <AntDesignIcons
              name="left"
              size={20}
              color={colors.black}
              style={{opacity: currentPage === 0 ? 0 : 1}}
            />
          </TouchableOpacity>
          {/* skip button */}
          <TouchableOpacity style={{padding: sizes.base}} onPress={scrollToEnd}>
            <Text
              style={{
                fontSize: 18,
                opacity: currentPage === slider.length - 1 ? 0 : 1,
                color: colors.black,
              }}>
              {' '}
              Skip
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
  const renderBottomSection = () => {
    return (
      <SafeAreaView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: sizes.base * 2,
            paddingVertical: sizes.base * 2,
          }}>
          {/* pagination */}
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            {[...Array(Sliders.length)].map((_, i) => {
              return (
                <View
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 10,
                    backgroundColor:
                      i === currentPage ? colors.pink : colors.pink + 20,
                    marginRight: 8,
                  }}
                />
              );
            })}
          </View>
          {currentPage !== slider.length - 1 ? (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: colors.pink,
              }}
              activeOpacity={0.8}
              onPress={onHandleNext}>
              {/* back icon */}
              <AntDesignIcons
                name="right"
                size={20}
                color={colors.white}
                style={{opacity: 0.3}}
              />
              <AntDesignIcons
                name="right"
                size={20}
                color={colors.white}
                style={{marginLeft: -15}}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                height: 60,
                borderRadius: 20,
                backgroundColor: colors.pink,
                paddingHorizontal: sizes.base * 2,
              }}
              onPress={onHandleStart}>
              <Text
                style={{
                  color: colors.white,
                  fontSize: 18,
                  marginLeft: sizes.base,
                }}>
                Get Start
              </Text>
              <AntDesignIcons
                name="right"
                size={20}
                color={colors.white}
                style={{opacity: 0.3, marginLeft: sizes.base}}
              />
              <AntDesignIcons
                name="right"
                size={20}
                color={colors.white}
                style={{marginLeft: -15}}
              />
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    );
  };
  const renderFlatListItem = ({item}) => {
    console.log(item.image);
    return (
      <View
        style={{
          width: sizes.width,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            alignItems: 'center',
            marginVertical: sizes.base * 2,
          }}>
          <Image
            source={item.image}
            style={{
              height: sizes.height * 0.5,
              width: sizes.width * 1,
              resizeMode: 'contain',
            }}
          />
          <View
            style={{
              paddingHorizontal: sizes.base * 4,
              marginVertical: sizes.base * 4,
            }}>
            <Text
              style={{
                fontSize: 30,
                textAlign: 'center',
                fontWeight: 'bold',
                color: colors.black,
              }}>
              {item.title}
            </Text>
            <Text
              style={{
                fontSize: 18,
                opacity: 0.4,
                textAlign: 'center',
                marginTop: 10,
                lineHeight: 28,
              }}>
              {item.content}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  const onHandleStart = () => {
    navigation.navigate('PhoneNumberCheck');
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.white,
      }}>
      {/*  top section: back & skip */}
      {renderTopSection()}
      {/* flatlist with page */}
      <FlatList
        data={slider}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={renderFlatListItem}
        ref={flatListRef}
        onViewableItemsChanged={onHandleViewLableChange.current}
        viewabilityConfig={{viewAreaCoveragePercentThreshold: 100}}
        initialNumToRender={1}
        extraData={sizes.width}
      />
      {/* bottom section: pagination & getstart or next button */}
      {renderBottomSection()}
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: '800',
    marginVertical: 10,
    color: 'white',
    textAlign: 'center',
  },
  content: {
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center',
    width: sizes.width * 0.9,
    marginHorizontal: 20,
  },
});
