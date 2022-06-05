import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={{color:'black'}}>Home</Text>
      <Button 
        title='Go to Detail Screen' 
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})