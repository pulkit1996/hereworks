import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';

import Home from '../Screens/Home';
import Bookings from '../Screens/Bookings';
import MyBookings from '../Screens/MyBookings';
import Profile from '../Screens/Profile';
import {Colors} from '../Constants/Colors';

const Tab = createBottomTabNavigator();

function Navigator() {
  const screenOptions = {
    headerShown: false,
    tabBarActiveTintColor: Colors.accentColor,
    tabBarInactiveTintColor: 'white',
    tabBarStyle: {
      height: 60,
      backgroundColor: Colors.primaryColor,
      paddingTop: 10,
      paddingBottom: 6,
    },
  };
  return (
    <Tab.Navigator screenOptions={screenOptions} initialRouteName={'Home'}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <FeatherIcon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Bookings"
        component={Bookings}
        options={{
          tabBarIcon: ({color, size}) => (
            <FA5Icon name="building" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="My Bookings"
        component={MyBookings}
        options={{
          tabBarIcon: ({color, size}) => (
            <FeatherIcon name="book-open" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => (
            <MCIcon name="account-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default Navigator;
