import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon  from 'react-native-vector-icons/Ionicons';

import Home from './Home';
import Detail from './Detail';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';

// const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const DetailStack = createNativeStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
    return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    //   barStyle={{ backgroundColor: '#fff' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreens}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Detail"
        component={DetailStackScreens}
        options={{
          tabBarLabel: 'Details',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Icon name="aperture" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Icon name="person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    );
};

export default MainTabScreen;

const HomeStackScreens = ({ navigation }) => {
    return (
    <HomeStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#009387'
      },
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <HomeStack.Screen name='Overview' component={Home} options={{
        title: 'Overview',
        headerLeft: () => (
          <Icon.Button name="menu" size={25} 
          backgroundColor='#009387' onPress={() => navigation.openDrawer()}>
          </Icon.Button>
          )
      }} />
    </HomeStack.Navigator>
    );
  };
  
  const DetailStackScreens = ({ navigation }) => {
    return (
    <DetailStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#1f65ff'
      },
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <DetailStack.Screen name='Detail' component={Detail} options={{
        headerLeft: () => (
          <Icon.Button name="menu" size={25} 
          backgroundColor='#1f65ff' onPress={() => navigation.openDrawer()}>
          </Icon.Button>
          )
      }} />
    </DetailStack.Navigator>
    );
  };