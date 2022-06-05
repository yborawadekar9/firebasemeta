import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'

const Detail = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={{color:'black'}}>Detail Screen</Text>
      {/* <Button 
        title='Go to Detail Screen...again' 
        onPress={() => navigation.push('Detail')}
      />
      <TouchableOpacity style={styles.button}>
          <Text>Go to Detail Screen...again</Text>
          </TouchableOpacity> */}
      <Button
        title='Go to Home Screen' 
        onPress={() => navigation.navigate('Home')}
      />
      <Button 
        title='Go Back' 
        onPress={() => navigation.goBack()}
      />
      {/* <Button 
        title='Go to the First Screen' 
        onPress={() => navigation.popToTop()}
      /> */}
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        alignItems: "center",
        backgroundColor: "red",
        padding: 10,
        margin: 10
      },
})