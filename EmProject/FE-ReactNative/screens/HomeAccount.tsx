import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo'

const HomeAccount = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  

  const cancelAlert = () =>
        Alert.alert(
            "Bạn có muốn đăng xuất không?",
            "",
            [
                {
                    text: "Không",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "Có", onPress: () => navigation.navigate("LoginScreen")
              }
              
            ]
        );
  return (
   <View style={style.container}>
      <View style={{flexDirection:"row", justifyContent:"space-between"}}>
      <TouchableOpacity style={style.but}>
        <FontAwesome5 
              name="coins"
              size={40}
              color="black"/>
            <Text>Quản lý tài chính</Text>
            
        </TouchableOpacity>
        <TouchableOpacity style={style.but} onPress={() => navigation.navigate('AddUser')}>
          <EntypoIcon
                  name= "add-user"
                  size={40}
                  color="black"/>
            <Text>Thêm nhân viên</Text>
            
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:"row"}}>
      <TouchableOpacity style={style.but} onPress={() => navigation.navigate('AttendanceScreen')}>
        <EntypoIcon 
            name="text-document"
            size={40}
            color="black"/>
            <Text>     Điểm danh     </Text>
            
        </TouchableOpacity>
        <TouchableOpacity style={style.but} onPress={() => navigation.navigate('DepartmentListScreen')}>
          <MaterialCommunityIcons
           name="table-account"
           size={40}
           color="black"/>
            <Text> Danh sách phòng ban      </Text>
            
        </TouchableOpacity>
   </View>
        <View style={{width:"98%"}}>
        
         <TouchableOpacity style={style.menu1} >
         <AntDesign
              name="notification"
              size={20}
              color="black"/>
            <Text>     Thông báo</Text>
            
         </TouchableOpacity>
         <TouchableOpacity style={style.menu1} onPress={() => navigation.navigate('Salary')}>
         <FontAwesome5
              name="money-check"
              size={20}
              color="black"/>
            <Text>    Bảng lương</Text>
           
         </TouchableOpacity >

         <TouchableOpacity style={style.menu1} >
         <SimpleLineIcons
              name="note"
              size={20}
              color="black"/>
            <Text>     Bảng lưu ý</Text>
         </TouchableOpacity>
         <TouchableOpacity style={style.menu1} >
          <MaterialCommunityIcons
              name="account-switch-outline"
              size={20}
              color="black"/>
            <Text>    Client Management</Text>
         </TouchableOpacity>
        </View>
   

      <View style={style.menu}>
        <TouchableOpacity  onPress = {() => navigation.navigate('HomeAccount')}>
         
          <AntDesign
            name="home"
            size={30}
            color="black"
           />
        </TouchableOpacity>
        <TouchableOpacity >
           <AntDesign 
            name="setting" 
            size={30} 
            color="black" />
        </TouchableOpacity> 

      
        <TouchableOpacity onPress={cancelAlert}
          >
        
        <Entypo
           name="log-out"
           size={30}
           color="black"/>
        </TouchableOpacity>
        </View>
      
    

      
       
    


    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#FAFAFA'
  },
  but:{
        
        padding: 8,
        backgroundColor: '#FFF',
        borderWidth: 2,
        alignItems:"center",
        marginTop: 12,
        marginHorizontal: 16,
        borderRadius: 10
        
        
        
  },
  menu1:{
    
        borderWidth: 2,
        marginBottom:10,
        marginVertical: 20,
        padding: 10,
        borderRadius: 10,
        flexDirection:"row"
       
        
  },
  menu:{
    flexDirection:"row",
    borderWidth: 0,
    width: "100%",
    padding: 8,
    justifyContent:"space-between",
    marginTop:200,
    backgroundColor:"#B0E0E6"
  },
  
 
 

})
export default HomeAccount