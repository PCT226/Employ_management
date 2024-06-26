import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BASE_URL } from '../sevices/authentication';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { encode } from 'base-64';

const DepartmentListScreen = () => {
  const [departments, setDepartments] = useState([]);
  const navigation = useNavigation();
 

  useEffect(() => {
    const fetchDepartment = async () => {
        const username = await AsyncStorage.getItem('username');
                    const password = await AsyncStorage.getItem('password');
                    const basicAuth = 'Basic ' + encode(username + ':' + password);
                    const headers = {
                'Authorization': basicAuth,
                'Content-Type': 'application/json',
              };
    // Gọi API để lấy danh sách phòng ban
    fetch(BASE_URL+'department/getAll', {
        method:'GET',
        headers,
    })
      .then((response) => response.json())
      .then((data) => setDepartments(data))
      .catch((error) => console.error('Error:', error));
    };
    fetchDepartment()
  }, []);

  const DepItem = ({ item,index }) => {
    return (
        <TouchableOpacity style={{}} onPress={() => navigation.navigate('EmployeeListScreen', { departmentId: item.departmentId })}>
            <View style={{ paddingTop: 5, backgroundColor: "#cece", borderBottomWidth: 1, borderBottomColor: " #cececece" }}>
                <Text style={{ fontWeight: "700",paddingLeft:20,marginBottom: 5 }}>ID : {item.departmentId}</Text>
                <Text style={{ marginBottom: 10,paddingLeft:10 }}> Phòng : {item.departmentName}</Text>
            </View>
        </TouchableOpacity>
    );
}

  return (
    <View>
      <Text>Danh sách phòng ban:</Text>
      <FlatList
        data={departments}
        keyExtractor={(item) => item.departmentId.toString()}
        renderItem={DepItem}
         
      />
    </View>
  );
};

export default DepartmentListScreen;
