import React, {useRef} from 'react';
import {View, ScrollView, Image, Animated, Text} from 'react-native';
import TopNavigation from './TopNavigation';
import { Strings } from '../../Constants/Strings';

const BANNER_HEIGHT = 350;

const Bookings = () => {
  const scrollA = useRef(new Animated.Value(0)).current;
  return (
    <View>
      <TopNavigation title="Home" scrollA={scrollA} />
      <Animated.ScrollView
        // onScroll={e => console.log(e.nativeEvent.contentOffset.y)}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollA}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}
      >
        <View style={styles.bannerContainer}>
          <Animated.Image
            style={styles.banner(scrollA)}
            source={require('../../Assets/Images/banner.jpg')}
          />
        </View>
        <Text style={styles.text}>{Strings.Dummytext}</Text>
      </Animated.ScrollView>
    </View>
  );
};

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
        margin: 24,
        fontSize: 16,
        color: 'black',
      },
  bannerContainer: {
    marginTop: -1000,
    paddingTop: 1000,
    alignItems: 'center',
    overflow: 'hidden',
  },
  banner: scrollA => ({
    height: BANNER_HEIGHT,
    width: '200%',
    transform: [
      {
        translateY: scrollA.interpolate({
          inputRange: [-BANNER_HEIGHT, 0, BANNER_HEIGHT, BANNER_HEIGHT + 1],
          outputRange: [-BANNER_HEIGHT / 2, 0, BANNER_HEIGHT * 0.75, BANNER_HEIGHT * 0.75],
        }),
      },
      {
        scale: scrollA.interpolate({
          inputRange: [-BANNER_HEIGHT, 0, BANNER_HEIGHT, BANNER_HEIGHT + 1],
          outputRange: [2, 1, 0.5, 0.5],
        }),
      },
    ],
  }),
};

export default Bookings;
