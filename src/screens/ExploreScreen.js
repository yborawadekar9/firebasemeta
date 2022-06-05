import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, ActivityIndicator } from 'react-native'

const ExploreScreen = () => {
  const [usersData, setUsersData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const url = "https://thapatechnical.github.io/userapi/users.json";

  const getUserData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setUsersData(data);
      setIsLoading(false);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <View style={styles.mainContainer}>
      {isLoading ? (
        <View style={styles.loader}>
          <ActivityIndicator size='large' color='#0000ff' />
        </View>
        ) : (
          <View>
           
      <Text style={styles.mainHeader}>List of Students</Text>
      <FlatList 
        data={usersData}
        renderItem = {({ item }) => {
          return (
            <View style={styles.card}>
              <View style={styles.imgContainer}>
                <Image 
                  style={styles.imgStyle}
                  resizeMode='cover'
                  source={{ uri: item.image }}
                />
              </View>
              <View>
                <View style={styles.bioDataContainer}>
                  <Text style={styles.bioData}> Bio-Data </Text>
                  <Text style={styles.idNumber}>
                    {item.id < 10 ? `#0${item.id}` : `#${item.id}`}
                  </Text>
                </View>
                <View style={styles.mainContain}>
                  <Text style={styles.myName}>Name : {item.name}</Text>
                  <Text style={styles.myName}>Email : {item.email}</Text>
                  <Text style={styles.myName}>mobile : {item.mobile}</Text>
                </View>
              </View>
            </View>
          )
        }}
      />
       
       </View>
        )
      }
    </View>
  )
};

export default ExploreScreen;

const styles = StyleSheet.create({
  loader: {
    minHeight: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainContainer: {
    width: '100%',
    paddingTop: 50,
    backgroundColor: '#b696d7',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    width: 250,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  bioDataContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#353535',
    paddingVertical: 10,
    fontFamily: 'JosefinSans_400Regular'
  },
  idNumber: {
    fontSize: 20,
    color: '#fff',
    marginRight: 10,
    fontFamily: 'JosefinSans_400Regular'
  },
  bioData: {
    fontSize: 30,
    color: '#fff',
    fontFamily: 'JosefinSans_400Regular'
  },
  mainHeader: {
    fontSize: 30,
    color: '#fff',
    fontFamily: 'JosefinSans_400Regular'
  },
  imgContainer: {
    padding: 10
  },
  imgStyle: {
    width: '100%',
    height: 150
  },
  mainContain: {
    backgroundColor: '#353535',
    height: 130
  },
  myName: {
    color: '#fff',
    padding:5,
    marginLeft: 5
  }
});