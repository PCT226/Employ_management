import { useState } from "react"
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from "react-native"
import { validateEmail } from "../utils/validate"
import React from "react"
import * as Keychain from 'react-native-keychain';
import {BASE_URL} from "../sevices/authentication";



import axios from "axios"

const RegisterScreen = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleRegister = async () => {
        const data = { username,email, password }
        
          // Gọi API đăng ký
        axios.post(BASE_URL+'auth/signup',data)
        .then(response => {
            console.log(response);
            console.log(response.data);
         
    
    
          // Xử lý logic đăng ký thành công
          // Ví dụ: hiển thị thông báo thành công và chuyển hướng sang trang đăng nhập
          Alert.alert('Đăng ký thành công', 'Vui lòng đăng nhập vào tài khoản mới');
          navigation.navigate('LoginScreen')
        }) .catch (error => {
            console.error(error);
            // Xử lý sau khi xảy ra lỗi đăng ký
            Alert.alert('Đăng ký không thành công', 'Vui lòng xem lại thông tin đăng nhập');
          });
//           fetch('http://localhost:8082/auth/signup', {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(data)
// }).then(response => {
//     console.log(response);
 

//   // Lưu thông tin đăng nhập vào Keychain để giữ trạng thái đăng nhập
//    Keychain.setGenericPassword(username, password);

//   // Xử lý logic đăng ký thành công
//   // Ví dụ: hiển thị thông báo thành công và chuyển hướng sang trang đăng nhập
//   Alert.alert('Đăng ký thành công', 'Vui lòng đăng nhập vào tài khoản mới');
//   navigation.navigate('LoginScreen')
// }) .catch (error => {
//     console.error(error);
//     // Xử lý sau khi xảy ra lỗi đăng ký
//     Alert.alert('Đăng ký không thành công', 'Vui lòng xem lại thông tin đăng nhập');
//   });
        }

    return (
    <View style={styles.container}>
        <Text style={styles.mainText}>Đăng ký</Text>
        <View style={styles.content}>
            <Text style={styles.label}>Username</Text>
            <TextInput  onChangeText={text => setUsername(text)}
              value={username}
              style={styles.input} />
            <Text style={styles.label}>Email</Text>
            <TextInput onChangeText={text => setEmail(text)}
              value={email}  style={styles.input} />
            <Text style={styles.label}>Password</Text>
            <TextInput onChangeText={text => setPassword(text)}
              value={password} secureTextEntry={true}  style={styles.input} />

        </View>
        <View style={styles.buttons}>
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text>Đăng ký</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text>Nhập lại</Text>
            </TouchableOpacity>
        </View>
    </View>)}

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
        fontWeight: "900"
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
        marginVertical: 10
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
        padding: 15,
        borderRadius: 5,
        backgroundColor: "pink",
        width: "45%",
        alignItems: "center"
    }
})
export default RegisterScreen;
