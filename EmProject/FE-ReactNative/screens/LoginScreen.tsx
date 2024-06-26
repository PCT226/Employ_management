import { useEffect, useState } from "react"
import { View, StyleSheet, Text, TextInput, TouchableOpacity, ImageBackground, KeyboardAvoidingView, Alert } from "react-native"
import { BASE_URL, addTokenToAxios, getAccessToken, setAccessToken } from "../sevices/authentication"
import { validateEmail } from "../utils/validate"
import RegisterScreen from "./RegisterScreen"
import React from "react"
import axios from "axios"
import { encode } from 'base-64';
import AsyncStorage from '@react-native-async-storage/async-storage';




const LoginScreen = ({ navigation }:any) => {
    const getAccountURL='account/findAll'

    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")
    const basicAuth = 'Basic ' + encode(username + ':' + password);
        const headers = {
    'Authorization': basicAuth,
    'Content-Type': 'application/json',
  };

    const handleLogin = async () => {
       
  try {
    const response = await fetch(BASE_URL+'auth/login', {
        method:'POST',
        headers,
        body: JSON.stringify({ username, password }),
      });

    if (response.status === 200) {
      // Xử lý kết quả ở đây
    //   await AsyncStorage.setItem('token', response.data.token);
      const data = await response.json();
      
      // Lưu token vào AsyncStorage
      // const token = response.headers['Authorization:'];
      // AsyncStorage.setItem('token', token + basicAuth);
      await AsyncStorage.setItem('username', username);
      await AsyncStorage.setItem('password', password);

      console.log(data);
      Alert.alert('Đăng nhập thành công');
      navigation.navigate('HomeAccount')
    } else {
      // Xử lý lỗi ở đây
      console.error('Login failed');
    }
  } catch (error) {
    // Xử lý lỗi mạng
    console.error(error);
  }
};

    //     try {
    //       // Gọi API đăng nhập
    //       const response = await axios.get(BASE_URL+'auth/login', {
    //         auth: {
    //           username,
    //           password,
    //         },
    //       });
    
    //       // Lưu thông tin đăng nhập vào Keychain để giữ trạng thái đăng nhập
    //     //   await Keychain.setGenericPassword(username, password);
    
    //       // Xử lý logic đăng nhập thành công
    //       // Ví dụ: chuyển hướng đến trang chính
    //       console.log(response.data);
    //       Alert.alert('Đăng nhập thành công');
    //       navigation.navigate('HomeAccount')
    //     } catch (error) {
    //       // Xử lý logic đăng nhập thất bại
    //       Alert.alert('Đăng nhập thất bại', 'Vui lòng kiểm tra lại tài khoản và mật khẩu');
    //       console.error(error);
    //     }
    //   };
   
    return (
        
        <KeyboardAvoidingView style={styles.container}>
             
            <Text style={styles.mainText}>Đăng nhập</Text>
        <View style={styles.content}>
            
            <Text style={styles.label}>Username</Text>
            <TextInput value={username} onChangeText={(value) => {
                setUsername(value)
            }}  style={styles.input} />
            <Text style={styles.label}>Password</Text>
            <TextInput onChangeText={text => setPassword(text)}
              value={password} secureTextEntry={true}  style={styles.input} /> 
        </View>
        <View style={styles.buttons}>
            {/* Sử lý sự kiện đăng nhập phân quyền  */}
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text>Đăng nhập</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegisterScreen')}> 
                <Text>Đăng ký</Text>
            </TouchableOpacity>
        </View>
        
           
        
       
        
    </KeyboardAvoidingView>
    )
        }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        padding: 20
    },
    mainText: {
        marginTop: 20,
        fontSize: 25,
        fontWeight: "900",
        
    },
    content: {
        alignItems: "flex-start",
        width: "100%"
    },
    input: {
        borderWidth: 1,
        borderColor: "#bbb",
        padding: 5,
        borderRadius: 5,
        width: "100%"
    },
    label: {
        marginVertical: 10,
        fontWeight:"700",
        color:"black"
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginTop: 20
    },
    button: {
        borderWidth: 1,
        borderColor: "#000",
        padding: 12,
        borderRadius: 5,
        backgroundColor: "pink",
        width: "45%",
        alignItems: "center"
    },
    image: {
        flex: 0.7,
        justifyContent: 'center',
        width: 350,
        height: 320
      },
})
export default LoginScreen

function base64encode(arg0: string) {
  throw new Error("Function not implemented.")
}
