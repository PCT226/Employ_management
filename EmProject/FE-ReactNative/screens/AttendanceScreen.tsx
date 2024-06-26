import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const AttendanceScreen = ({ navigation }) => {
  const [list, setList] = useState([]);
  const attendance = () =>{
    Alert.alert("điểm danh thành công")
  }
  return (
    <View style={style.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity style={style.but} onPress={attendance}>
          <FontAwesome5 
            name="clock" 
            size={40} 
            color="black" />
          <Text>Điểm danh giờ làm</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={style.but}>
          <EntypoIcon name="calendar" size={40} color="black" />
          <Text>Bảng chấm công</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={style.but} onPress={attendance}>
          <MaterialCommunityIcons name="clock-outline" size={40} color="black" />
          <Text>Điểm danh tan làm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.but} >
          <FontAwesome5 name="plus" size={40} color="black" />
          <Text>Thêm ca làm việc</Text>
        </TouchableOpacity>
      </View>

      <View style={style.menu}>
        <TouchableOpacity>
          <AntDesign name="home" size={30} color="black" onPress = {() => navigation.navigate('HomeAccount')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="calendar" size={30} color="black" onPress = {() => navigation.navigate('Timekeeping')}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="setting" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
  },
  but: {
    padding: 8,
    backgroundColor: '#FFF',
    borderWidth: 2,
    alignItems: 'center',
    marginTop: 12,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  menu:{
    flexDirection:"row",
    borderWidth: 2,
    width: "100%",
    padding: 8,
    justifyContent:"space-between",
    
  },
});

export default AttendanceScreen;