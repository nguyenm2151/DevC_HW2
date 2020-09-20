import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headertab}>
      <AntDesign name="arrowleft" size={24} color="black" />
      <MaterialCommunityIcons name="dots-vertical" size={24} color="black" />
      </View> 
      <View style={styles.header}>
                  
                  <View style={styles.avatarArea}>
                  <Image style={styles.avatar}
                  source={require('./assets/circle-cropped.png')}
                  />
                  </View>

                  <View style={styles.userinfo}>
                  <Text style={styles.name}>Corgi Puppers</Text>
                  <Text style={styles.description}>Competitive Swimmer</Text>
                  <View style={styles.buttonArea}>
                    <TouchableOpacity>
                    <View style={styles.follow}>
                    <Text id="followbutton" style={styles.followtext} 
                    onPress={() => alert("Followed")}> 
                    Follow </Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={styles.sendmessage}>
                    <Feather name="send"/>
                    </View>
                    </TouchableOpacity>
                  </View>
                  </View>
      </View>

      <View style={styles.number}>
                  {numbers.map((number) => (
                  <View style={styles.numberall}>
                  <Text style={styles.numberrow1}>{number.quantity}</Text>
                  <Text style={styles.numberrow2}>{number.name}</Text>
                  </View>
                  ))}
      </View>

      <View style={styles.photosArea}>
                  <ScrollView
                    contentContainerStyle={{
                      flexDirection:"row",
                      justifyContent:"center",
                      alignItems:"center"
                    }}
                    >
                  <View>
                  {imgData.slice(0,centerImgData).map(item =>{
                    return <Image source={item.imgSource} style={styles.image} key={item.key}/>;
                  })}
                  </View>

                  <View style={styles.photos}>
                  {imgData.slice(centerImgData).map(item =>{
                    return <Image source={item.imgSource} style={styles.image}/>;
                  })}
                  </View>
                  </ScrollView>
      </View>
      <View style={styles.bottomtab}>
      <TouchableOpacity>
      <AntDesign name="aliwangwang-o1" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
      <AntDesign name="pluscircleo" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
      <MaterialIcons name="person-outline" size={24} color="black" />
      </TouchableOpacity>
      </View> 
    </View>
  );
}

const numbers=[
{name: "Photos", quantity:"210"},
{name: "Followers", quantity:"15k"},
{name: "Following", quantity:"605"},
];
const imgData = [
  { id: 1, imgSource: require('./assets/1.jpg') },
  { id: 2, imgSource: require('./assets/2.jpg') },
  { id: 3, imgSource: require('./assets/3.jpg') },
  { id: 4, imgSource: require('./assets/4.jpg') },
  { id: 5, imgSource: require('./assets/5.jpg') },
  { id: 6, imgSource: require('./assets/6.jpg') },
  { id: 7, imgSource: require('./assets/7.jpg') },
  { id: 8, imgSource: require('./assets/8.jpg') },
  { id: 9, imgSource: require('./assets/9.jpg') },
  { id: 10, imgSource: require('./assets/10.jpg')},
  { id: 11, imgSource: require('./assets/11.jpg')},
  { id: 12, imgSource: require('./assets/12.jpg')},
];
const centerImgData = Math.floor(imgData.length / 2);

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  headertab:{
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    flex: 0.025,
    flexDirection:"row",
    justifyContent: "space-between",
    
  },

  header: {
    flex: 0.25,
    backgroundColor:"white",
    flexDirection:"row",
    justifyContent: "center",
    alignItems: "center",
  },

  avatarArea:{
    flex:0.5, 
    justifyContent: "center",
    alignItems: "center"
  },

    avatar: {
    width: 120,
    height: 120,
  },

  userinfo:{
    flex:0.5,
    justifyContent: "center",
  },

  name:{ 
    fontSize: 25,
    fontWeight: "bold"
  },
  
  description:{ 
    marginTop: 5,
    color: "grey"
  },

  buttonArea:{
    marginTop: 15,
    flexDirection: "row"
  },
  
  follow: {
    width: 100,
    height: 30,
    backgroundColor: "rgb(71,113,246)",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: '#2f405c',
    shadowOffset: {
      width: 1,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
  },

  followtext: {
    color:"white",

  },

  sendmessage: {
    color:"white",
    marginLeft: 10,
    width: 30,
    height: 30,
    backgroundColor: "rgb(120,213,250)",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: '#8daee3',
    shadowOffset: {
      width: 1,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
  },

  number: {
    flex: 0.1,
    flexDirection:"row",
    justifyContent: "space-around",
    alignItems:"center"

  },
  
  numberall: {
    justifyContent: "center",
    alignItems: "center"

  },

  numberrow1: {
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center"

  },

  numberrow2: {
    fontSize: 15,
    justifyContent: "center",
    alignItems: "center"

  },

  photosArea: {
    flex:0.55,
    },

  image: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    width: 170,
    height: 170,
    borderRadius: 12,
    },

  bottomtab:{
    marginTop: 10,
    flex: 0.075,
    flexDirection:"row",
    justifyContent: "space-around",
  },
});

