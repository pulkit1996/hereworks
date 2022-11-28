import React, {useState, useCallback, useEffect} from 'react';
import {
  SafeAreaView,
  useWindowDimensions,
  Image,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CircularProgress from 'react-native-circular-progress-indicator';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import moment from 'moment';
import {useFocusEffect} from '@react-navigation/native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import styles from './styles';
import {Colors} from '../../Constants/Colors';

const data = [
  {
    label: 'We',
    value: 40,
  },
  {
    label: 'Th',
    value: 70,
  },
  {
    label: 'Fr',
    value: 50,
  },
  {
    label: 'Sa',
    value: 60,
  },
  {
    label: 'Su',
    value: 50,
  },
  {
    label: 'Mo',
    value: 70,
  },
  {
    label: 'Tu',
    value: 60,
  },
];

const Home = () => {
  const {width, height} = useWindowDimensions();
  const [score, setScore] = useState(0);
  const [chartData, setChartData] = useState(data);

  useFocusEffect(
    useCallback(() => {
      setTimeout(() => {
        setScore(89);
      }, 500);
      return () => {
        setScore(0);
      };
    }, []),
  );

  const ChartItem = ({item}) => {
    const progress = useSharedValue(0);

    useEffect(() => {
      setTimeout(() => {
        progress.value = item.value;
      }, 500);
    }, [item.label]);

    const isToday = item.label == moment().format('dd');
    const animatedStyle = useAnimatedStyle(() => ({
      backgroundColor: isToday ? Colors.color1 : Colors.accentColor,
      height: withTiming(progress.value, {duration: 1000}),
    }));
    return (
      <View style={styles.chartItemContainer}>
        <Animated.View style={[styles.chartBarStyle, animatedStyle]} />
        <Text style={styles.chartLabelStyle}>{item.label}</Text>
        {isToday ? <View style={styles.chartSmallDot} /> : null}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Hereworks</Text>
        <View
          style={[
            styles.horizontalContainer,
            {justifyContent: 'space-between'},
          ]}>
          <View style={styles.hiContainer}>
            <View style={styles.horizontalContainer}>
              <Text style={styles.hiText}>Hi Derek</Text>
              <Image
                style={styles.hiImage}
                source={require('../../Assets/Images/wave-img.png')}
              />
            </View>
            <Text style={styles.hiSecondaryText}>
              Here are your latest updates
            </Text>
          </View>
          <View style={styles.weatherContainer}>
            <Image
              style={styles.weatherImage}
              source={require('../../Assets/Images/cloudy.png')}
            />
            <Text style={styles.weatherText}>25&deg;</Text>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <View style={styles.horizontalContainer}>
            <Text style={styles.happyScoreText}>Happy Score</Text>
            <Text style={styles.liveText}>LIVE</Text>
          </View>
          <View
            style={[
              styles.horizontalContainer,
              {justifyContent: 'space-between'},
            ]}>
            <View style={styles.chartContainer}>
              {chartData.map((item, index) => {
                return <ChartItem key={index} item={item} />;
              })}
            </View>
            <CircularProgress
              value={score}
              activeStrokeWidth={12}
              activeStrokeColor={Colors.accentColor}
              inActiveStrokeColor={Colors.color2}
              progressValueColor={Colors.primaryColor}
            />
          </View>
        </View>
        <View style={[styles.horizontalContainer, {marginTop: 20}]}>
          <Text style={styles.findOutText}>Find out why</Text>
          <MCIcon name={'arrow-right'} size={16} color={Colors.color3} />
        </View>
      </View>
      <View style={[styles.innerContainer, {marginTop: 10, flexGrow: 1}]}>
        <TouchableOpacity style={styles.cardContainer}>
          <SkeletonPlaceholder
            borderRadius={2}
            width={width - 20}
            backgroundColor={Colors.color2}>
            <SkeletonPlaceholder.Item flexDirection="row">
              <SkeletonPlaceholder.Item width={100} height={100} />
              <SkeletonPlaceholder.Item marginLeft={20}>
                <SkeletonPlaceholder.Item height={16} width={width - 180} />
                <SkeletonPlaceholder.Item marginTop={5} height={16} />
                <SkeletonPlaceholder.Item marginTop={5} height={16} />
                <SkeletonPlaceholder.Item marginTop={5} height={16} />
                <SkeletonPlaceholder.Item marginTop={5} height={16} />
              </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder.Item>
            <SkeletonPlaceholder.Item marginTop={8} height={16} />
            <SkeletonPlaceholder.Item marginTop={5} height={16} />
          </SkeletonPlaceholder>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
