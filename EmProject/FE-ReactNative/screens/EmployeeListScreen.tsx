
import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    FlatList,
    TextInput,
    TouchableOpacity,
    Alert,
    Button
} from "react-native";
import axios from 'axios';
import { BASE_URL } from "../sevices/authentication";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { encode } from 'base-64';
import { RouteProp, useNavigation } from '@react-navigation/native';
type RootStackParamList = {
    EmployeeListScreen: { departmentId: number }; // Đảm bảo tên phù hợp với màn hình 'EmployeeList'
  };
  
  type EmployeeListScreenRouteProp = RouteProp<RootStackParamList, 'EmployeeListScreen'>;

const EmployeeListScreen = ({ route }: { route: EmployeeListScreenRouteProp }) => {
    const [search, setSearch] = useState('');
    const [listUser, setListUser] = useState([]);
    const { departmentId } = route.params;
    const navigation = useNavigation();
  

    
    useEffect(() => {
    

        const fetchEmployees = async () => {
                try {
                    
                    const username = await AsyncStorage.getItem('username');
                    const password = await AsyncStorage.getItem('password');
                    const basicAuth = 'Basic ' + encode(username + ':' + password);
                    const headers = {
                'Authorization': basicAuth,
                'Content-Type': 'application/json',
              };
               
                    // Gọi API sử dụng thông tin đăng nhập ở đây
                    // const response = await axios.get(BASE_URL+`account/findAll`);
                    // setEmployees(response.data);
                   
                         fetch(BASE_URL+`account/findByDepId/${departmentId}`, {
                            method:'GET',
                            headers,
                            
                          })
                          .then((response) => response.json())
                          .then((data) => {
                            setListUser(data)
    
                            
                            
                          })
                          console.log(listUser)
                          console.log();
                         
                      
                  
                } catch (error) {
                  console.error('Lỗi khi lấy thông tin đăng nhập:', error);
                }
              };
            
          
        
    
        fetchEmployees();
      }, [departmentId]);
    

    const filterList = async () => { 
        const username = await AsyncStorage.getItem('username');
        const password = await AsyncStorage.getItem('password');
        const basicAuth = 'Basic ' + encode(username + ':' + password);
        const headers = {
    'Authorization': basicAuth,
    'Content-Type': 'application/json',
  };
        fetch(BASE_URL+`account/getAll?searh=`+search, {
            method:'GET',
            headers,
            
          })
          .then((response) => response.json())
          .then((data) => {
            const filtered = data.filter((employee) =>
      employee.name.toLowerCase().includes(search.toLowerCase()))
      setListUser(filtered)
            console.log(search);
    
            console.log(listUser)
            
          })
    };


    const UserItem = ({ item,index }) => {
        return (
            <TouchableOpacity style={{}} onPress={() => navigation.navigate('EmployeeUpdateOrDelete', { accountId: item.accountId })}>
                <View style={{ paddingTop: 5, backgroundColor: "#cece", borderBottomWidth: 1, borderBottomColor: " #cececece" }} >
                    <Text style={{ fontWeight: "700",paddingLeft:20,marginBottom: 5 }}>{item.name}</Text>
                    <Text style={{ marginBottom: 10,paddingLeft:10 }}>Tuổi: {item.age}</Text>
                    <Text style={{ marginBottom: 10,paddingLeft:10 }}>Ngày sinh: {item.dob}</Text>
                    <Text style={{ marginBottom: 10,paddingLeft:10 }}>Skill: {item.skill}</Text>
                    <Text style={{ marginBottom: 10,paddingLeft:10 }}>Address: {item.address}</Text>
                    <Text style={{ marginBottom: 10,paddingLeft:10 }}>Level: {item.level}</Text>
                 
                </View>
            </TouchableOpacity>
        );
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ justifyContent: "center" }}>
                <View
                    style={{
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                        height: 70,
                    }}
                >
                    <Text
                        style={{
                            fontWeight: "500",
                            fontSize: 17,
                            textAlign: "center",
                            width: "90%",
                        }}
                    >
                        Danh sách nhân viên
                    </Text>
                   
                   
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        height: 50,
                        width: "100%",
                        justifyContent: "space-around",
                        alignItems: "center",
                    }}
                >
                    <TextInput
                        value={search}
                        onChangeText={(value) => setSearch(value)}
                        style={{ borderWidth: 1.5, height: 25, width: "70%", padding: 5 }}
                    ></TextInput>
                    <TouchableOpacity
                        style={{
                            height: 25,
                            width: 80,
                            borderWidth: 1.5,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        onPress={filterList}
                    >
                        <Text style={{ fontWeight: "500" }}>Tìm kiếm</Text>
                    </TouchableOpacity>
                </View>
            </View>
        
            <FlatList
                data={listUser}
                renderItem={UserItem}
                keyExtractor={item =>`key-${item.accountId}`}
            ></FlatList>
            
           
        </SafeAreaView>
    );
}

export default EmployeeListScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5
    },
    box: {
        height: "25%",
        width: "100%",
        alignItems: "center",
        backgroundColor: "#cececece",
        justifyContent: "space-around",
    },
    txt: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 30,
    },
    Input: {
        width: "85%",
        height: "100%",
        marginHorizontal: 5,
    },
    Suggestions: {
        color: "#000000",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 16,
    },
    formInput: {
        backgroundColor: "white",
        height: 36,
        width: "80%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        borderRadius: 5,
    },
    buttonHidden: {
        textAlign: "right",
        marginRight: 5,
        color: "#063970"
    },
    showRemain: {
        justifyContent: "flex-end",
        alignItems: 'center',
        flexDirection: 'row'
    },
    showIcon: {
        color: "#063970",
        fontSize: 20,
        textAlign: 'center',
        padding: 7
    }
});



