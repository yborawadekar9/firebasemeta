import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import MainTabScreen from './src/screens/MainTabScreen';
import DrawerContent from './src/screens/DrawerContent';
import Support from './src/screens/Support';
import Settings from './src/screens/Settings';
import Bookmarks from './src/screens/Bookmarks';
import ExploreScreen from './src/screens/ExploreScreen';

import RootStackScreen from './src/screens/RootStackScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <ExploreScreen />
      {/* <RootStackScreen /> */}
      {/* <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>} 
      screenOptions={{headerShown: false}} >
        <Drawer.Screen name='HomeDrawer' component={MainTabScreen}/>
        <Drawer.Screen name='Support' component={Support} />
        <Drawer.Screen name='Settings' component={Settings} />
        <Drawer.Screen name='Bookmarks' component={Bookmarks} />
      </Drawer.Navigator> */}
    </NavigationContainer>
  )
};

export default App;

const styles = StyleSheet.create({
  
});



 // useEffect(() => {
  //   getDatabase();
  // }, []);

  // const getDatabase = async () => {
  //   try {
  //     const data = await firestore().collection('testing').doc('nUlK1yq8XkjqnNHpAvM6').get();
  //     console.log(data);
  //     // console.log(data.name);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }