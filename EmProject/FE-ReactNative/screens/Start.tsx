import React from 'react';
import { View, Text, Button, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const image = {uri: 'https://img.lovepik.com/photo/40190/4207.jpg_wh860.jpg'}
const Start = ({ navigation }) => {
  return (
    <View style={style.container}>
       <ImageBackground source={image} resizeMode="cover" style={style.image}></ImageBackground>
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={style.content}> CONTINUE</Text>
      </TouchableOpacity>
      {/* <View style={[styles.container, this.state.showModal ? {backgroundColor: 'rgba(0,0,0,0.5)'} : '']}> */}

    


    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    flex: 0.75,
    justifyContent: 'center',
    width: 310,
    height: 531
  },
  
  content: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 200,
    textAlign: "center",
    color: "white",
    borderRadius:5,
    borderWidth:2,
    borderColor:"pink",
    backgroundColor:"pink",
    height:50,
    width:200,
    alignItems:"center",
    paddingTop:10

  }
})
export default Start