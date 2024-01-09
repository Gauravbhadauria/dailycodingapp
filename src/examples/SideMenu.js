import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const SideMenu = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const animatedWidth = useSharedValue('60%');
  const [isClosed, setIsClosed] = useState(true);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: animatedWidth.value,
    };
  });
  return (
    <SafeAreaView style={{flex: 1}}>
      <Animated.View
        style={[
          {
            width: '60%',
            height: '100%',
            backgroundColor: '#0f0229',
          },
          animatedStyle,
        ]}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            height: 70,

            alignItems: 'center',
            paddingLeft: 20,
            marginTop: 100,
          }}
          onPress={() => {
            setSelectedTab(0);
          }}>
          <Image
            source={require('../images/home.png')}
            style={{tintColor: 'white', width: 24, height: 24}}
          />
          {!isClosed && (
            <Text
              style={[
                {
                  color: 'white',

                  marginLeft: 20,
                  padding: 10,

                  backgroundColor: selectedTab == 0 ? '#23176e' : '#0f0229',
                },
              ]}>
              Home
            </Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            height: 70,

            alignItems: 'center',
            paddingLeft: 20,
          }}
          onPress={() => {
            setSelectedTab(1);
          }}>
          <Image
            source={require('../images/orders.png')}
            style={{tintColor: 'white', width: 24, height: 24}}
          />
          {!isClosed && (
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                marginLeft: 20,
                padding: 10,

                backgroundColor: selectedTab == 1 ? '#23176e' : '#0f0229',
              }}>
              Orders
            </Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            height: 70,

            alignItems: 'center',
            paddingLeft: 20,
          }}
          onPress={() => {
            setSelectedTab(2);
          }}>
          <Image
            source={require('../images/cart.png')}
            style={{tintColor: 'white', width: 24, height: 24}}
          />
          {!isClosed && (
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                marginLeft: 20,
                padding: 10,
                backgroundColor: selectedTab == 2 ? '#23176e' : '#0f0229',
              }}>
              Cart
            </Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            height: 70,

            alignItems: 'center',
            paddingLeft: 20,
          }}
          onPress={() => {
            setSelectedTab(3);
          }}>
          <Image
            source={require('../images/bell.png')}
            style={{tintColor: 'white', width: 24, height: 24}}
          />
          {!isClosed && (
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                marginLeft: 20,
                padding: 10,
                backgroundColor: selectedTab == 3 ? '#23176e' : '#0f0229',
              }}>
              Notifications
            </Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            height: 70,

            alignItems: 'center',
            paddingLeft: 20,
          }}
          onPress={() => {
            setSelectedTab(4);
          }}>
          <Image
            source={require('../images/bill.png')}
            style={{tintColor: 'white', width: 24, height: 24}}
          />
          {!isClosed && (
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                marginLeft: 20,
                padding: 10,
                backgroundColor: selectedTab == 4 ? '#23176e' : '#0f0229',
              }}>
              Payments
            </Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            height: 70,

            alignItems: 'center',
            paddingLeft: 20,
          }}
          onPress={() => {
            setSelectedTab(5);
          }}>
          <Image
            source={require('../images/address.png')}
            style={{tintColor: 'white', width: 24, height: 24}}
          />
          {!isClosed && (
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                marginLeft: 20,
                padding: 10,
                backgroundColor: selectedTab == 5 ? '#23176e' : '#0f0229',
              }}>
              Address
            </Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            height: 70,

            alignItems: 'center',
            paddingLeft: 20,
          }}
          onPress={() => {
            setSelectedTab(6);
          }}>
          <Image
            source={require('../images/rating.png')}
            style={{tintColor: 'white', width: 24, height: 24}}
          />
          {!isClosed && (
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                marginLeft: 20,
                padding: 10,
                backgroundColor: selectedTab == 6 ? '#23176e' : '#0f0229',
              }}>
              Rate App
            </Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            height: 70,

            alignItems: 'center',
            paddingLeft: 20,
          }}
          onPress={() => {
            setSelectedTab(7);
          }}>
          <Image
            source={require('../images/share.png')}
            style={{tintColor: 'white', width: 24, height: 24}}
          />
          {!isClosed && (
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                marginLeft: 20,
                padding: 10,
                backgroundColor: selectedTab == 7 ? '#23176e' : '#0f0229',
              }}>
              Share App
            </Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            height: 70,

            alignItems: 'center',
            paddingLeft: 20,
          }}
          onPress={() => {
            setSelectedTab(8);
          }}>
          <Image
            source={require('../images/logout.png')}
            style={{tintColor: 'white', width: 24, height: 24}}
          />
          {!isClosed && (
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                marginLeft: 20,
                padding: 10,
                backgroundColor: selectedTab == 8 ? '#23176e' : '#0f0229',
              }}>
              Logout
            </Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignSelf: 'flex-end',
            position: 'absolute',
            top: Dimensions.get('window').height / 2 + 10,
            right: 10,
          }}
          onPress={() => {
            if (animatedWidth.value == '60%') {
              setIsClosed(true);
              animatedWidth.value = withTiming('20%', {duration: 500});
            } else {
              setIsClosed(false);
              animatedWidth.value = withSpring('60%');
            }
          }}>
          <Image
            source={require('../images/arrow.png')}
            style={{
              width: 24,
              height: 24,
              tintColor: 'white',
              transform: [{rotate: isClosed ? '0deg' : '180deg'}],
            }}
          />
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
};

export default SideMenu;
