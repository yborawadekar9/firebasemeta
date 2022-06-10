import { StyleSheet, Text, View, Button, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'

const Home = ({navigation}) => {
  const { colors } = useTheme();
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <StatusBar barStyle={ theme.dark ? 'light-content' : 'dark-content' } />
      <Text style={{color:colors.text}}>Home</Text>
      {/* <Button 
        title='Go to Detail Screen' 
        onPress={() => navigation.navigate('Detail')}
      /> */}
      <TouchableOpacity style={{marginTop: 10}}
        onPress={() => navigation.navigate('Detail')}
      >
        <Text style={styles.text}>Go to Detail Screen</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
   text: {
     color: 'blue'
   }
})