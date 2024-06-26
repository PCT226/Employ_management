import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert, FlatList, ImageBackground, KeyboardAvoidingView, Button }
    from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../sevices/authentication";
import { RouteProp, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { encode } from "base-64";


type RootStackParamList = {
    Leave: { accountId: number };
  };
  
  type Leave = RouteProp<RootStackParamList, 'Leave'>;
  

  const Leave = ({ route }: { route: Leave }) => {
    const { accountId } = route.params;
    const [decrease, setDecrease] = useState("");
    const [reason, setReason] = useState("");
    const navigation =useNavigation()
  
    const [employee, setEmployee] = useState({ name: '', skill: '', level: '' })



    const Add = async () => {
        const data = { decrease, reason, accountId: accountId }
        axios.post(BASE_URL + 'leave/createLeave',
            data
        )
            .then((respose => {
                console.log(respose.data);
                alert('Lưu thành công')
                navigation.navigate('DepartmentListScreen')
            }))
            .catch((err) => {
                Alert.alert(`${err}`, "")
            })

    };
    useEffect(() => {
        const EmployeeInfo = async () => {
            const username = await AsyncStorage.getItem('username');
            const password = await AsyncStorage.getItem('password');
            const basicAuth = 'Basic ' + encode(username + ':' + password);
            const headers = {
                'Authorization': basicAuth,
                'Content-Type': 'application/json',
            };
            // Gọi API để lấy thông tin của nhân viên dựa trên employeeId
            fetch(BASE_URL + `account/findByAccId/${accountId}`, {
                method: 'GET',
                headers,

            })
                .then((response) => response.json())
                .then((data) => setEmployee(data))



                .catch((error) => console.error('Error:', error));

        };
        EmployeeInfo();
    }, [accountId]);
   
  

    const cancelAlert = () =>
        Alert.alert(
            "Bạn có muốn hủy bỏ thay đổi không?",
            "",
            [
                {
                    text: "Không",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "Có", onPress: () => navigation.navigate("EmployeeListScreen") }
            ]
        );
    return (

        <KeyboardAvoidingView style={{ flex: 1, alignItems: "center", padding: 12 }}>
         
            <View style={{ height: 150, width: "97%" }}>
                    <Text style={{ fontSize: 16, paddingTop: 17 }}>Tên nhân viên : {employee.name}</Text>


                    <Text style={{ fontSize: 16, paddingTop: 17 }}>Skill: {employee.skill}</Text>

                    <Text style={{ fontSize: 16, paddingTop: 17 }}>Level: {employee.level}</Text>
                </View>
            <View style={{ height: 200, width: "97%" }}>
                <Text>Lý do phạt</Text>
                <TextInput value={reason}
                    placeholder=""
                    onChangeText={(value: React.SetStateAction<string>) => {
                        setReason(value)
                    }} style={styles.input} />
                     <Text style={{marginTop:20}}>Phạt</Text>
                <TextInput value={decrease}
                    placeholder=""
                    onChangeText={(value: React.SetStateAction<string>) => {
                        setDecrease(value)
                    }} style={styles.input} />
            </View>
            <View style={{  flexDirection: "row", height: 30, alignItems: "center"
            }}
            >
                <Button
                    title="Hủy bỏ"
                    onPress={cancelAlert}
                />
                <Button
                    title="Lưu"
                    onPress={() => Add()}
                />
               
                
            </View>


        </KeyboardAvoidingView>
    );
};
const styles = StyleSheet.create({
    label: {
        marginVertical: 5,
        fontSize: 14,
        color: "#2a2a2a",
    },
    inputContainer: {
        height: 45,
        backgroundColor: "#fffff",
        flexDirection: "row",
        borderWidth: 0.5,
        borderRadius: 10,
    },
    txtInput: {
        color: "#cececece",
        flex: 1,
    },
    textErr: {
        color: "red",
        marginTop: 10,
        marginLeft: "5%",
        fontSize: 12
    },
    input: {
        padding: 10,
        borderWidth: 2,
        borderRadius: 9,
        height: 45
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        width: 310,
        height: 527,

    },
    dropdown: {
        height: 35,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 8,
        paddingHorizontal: 5,
        marginTop: 5

    },
    placeholderStyle: {
        fontSize: 14,
    },
    selectedTextStyle: {
        fontSize: 14,
    },
})
export default Leave;

