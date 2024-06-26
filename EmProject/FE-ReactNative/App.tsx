


import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import User from './screens/User';
import AddUser from './screens/AddUser';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import {View, Text, Button, TouchableOpacity } from 'react-native';
import Start from './screens/Start';
import HomeAccount from './screens/HomeAccount';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import AttendanceScreen from './screens/AttendanceScreen';
import Timekeeping from './screens/TimeKeeping';
import DepartmentListScreen from './screens/DepartmentListScreen';
import EmployeeListScreen from './screens/EmployeeListScreen';
import EmployeeUpdateOrDelete from './screens/EmployeeUpdateOrDelete';
import Bonus from './screens/Bonus';
import Leave from './screens/Leave';
import Salary from './screens/Salary';



const Stack = createNativeStackNavigator();
const App = (navigation) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
      <Stack.Screen name="LoginScreen" component={LoginScreen}
        options={{ headerStyle:{
          backgroundColor:"green"
         },
         headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  }, }} />
      


        <Stack.Screen name="AddUser" component={AddUser}
        options={{title:"Thêm nhân viên",
        headerStyle:{
          backgroundColor:"green"
         },
         headerTintColor: '#fff',
         headerTitleStyle: {
           fontWeight: 'bold',
           
         }, }} />


<Stack.Screen name='DepartmentListScreen' component={DepartmentListScreen}
        options={{title:"phòng ban",
                  headerStyle:{
                    backgroundColor:"green"
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                 
                  }}/>
                  <Stack.Screen name='EmployeeListScreen' component={EmployeeListScreen}
        options={{title:"nhân viên",
                  headerStyle:{
                    backgroundColor:"green"
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                 
                  }}/>
                  <Stack.Screen name='Bonus' component={Bonus}/>
                  <Stack.Screen name='Leave' component={Leave}/>
                  <Stack.Screen name='Salary' component={Salary}/>
                  <Stack.Screen name='EmployeeUpdateOrDelete' component={EmployeeUpdateOrDelete}
        options={{title:"Update",
                  headerStyle:{
                    backgroundColor:"green"
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                 
                  }}/>
        <Stack.Screen name="User" component={User}
        options={{title:"Nhan vien",
                  headerStyle:{
                    backgroundColor:"green"
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                 
                  }}/>


        
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} 
        options={{title:"RegisterScreen"}}/>
        <Stack.Screen name="AttendanceScreen" component={AttendanceScreen} />
        <Stack.Screen name="Timekeeping" component={Timekeeping} />

          <Stack.Screen name="HomeAccount" component={HomeAccount} 
        options={{title:"Home",
        headerStyle:{
          backgroundColor:"#2F80ED"
         },
         headerTintColor: '#fff',
         headerTitleStyle: {
           fontWeight: 'bold',
           
           
         },
         headerRight: () => (
         
            <TouchableOpacity>

                    <EntypoIcon
                          name="dots-three-vertical"
                          size={25}
                          color="black"/>
          
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity>
               <EntypoIcon
                          name="menu"
                          size={25}
                          color="black"/>
            </TouchableOpacity>
            )
            }}/>
      </Stack.Navigator>
     
    </NavigationContainer>
  );

};
export default App; 
