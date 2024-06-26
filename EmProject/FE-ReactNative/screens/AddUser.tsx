import {StyleSheet,Text,View, Image,TouchableOpacity,TextInput,Alert, FlatList, ImageBackground, KeyboardAvoidingView}
 from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { validate, validateEmail } from "../utils/validate";
import { BASE_URL } from "../sevices/authentication";
import { Dropdown } from 'react-native-element-dropdown';
import User from "./User";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { encode } from 'base-64';


const FormInput = ({ label, error, ...props }) => {
    return (
        <View >
            <Text style={styles.label}>{label}</Text>
            <View style={[
                styles.inputContainer
            ]}>
                <TextInput style={styles.txtInput}
                    {...props} />
            </View>
            <Text style={styles.textErr}>
                {error}
            </Text>
        </View>
    );
};

const AddUser = ({ navigation }) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(""); 
    const [dob, setDob] = useState("");  
    const [skill, setSkill] = useState("");  
    const [level, setLevel] = useState("");
    const [address, setAddress] = useState("");
    const [departmentId, setDepartmentId] = useState(null);
    const [positionId, setPositionId] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    // const [departmentData, setDepartmentData] = useState('');
    // const [positionData, setPositionData] = useState('');
    
    
    const departmentData = [
        { label: 'Software', value: '1' },
        { label: 'Hardware', value: '2' },
        { label: 'Marketing', value: '3' },
    
      ];
      const positionData = [
        { label: 'DEV', value: '1' },
        { label: 'PM', value: '2' },
        { label: 'SCRUM_MASTER', value: '3' },
    
      ];
      const renderLabelDep = () => {
        if (departmentId || isFocus) {
          return (
            <Text style={[styles.label, isFocus && { color: 'blue' }]}>
              Phòng ban
            </Text>
          );
        }
        return null;
      };
      const renderLabelPos = () => {
        if (positionId || isFocus) {
          return (
            <Text style={[styles.label, isFocus && { color: 'blue' }]}>
              Vị trí
            </Text>
          );
        }
        return null;
      };

    // Data can truyen vao
    // const data = { name,age,dob, skill, level, address }

    // const validInput = (data: { name: string;
                             
    //                             address: string; 
                                
    //                         }) => {
    //     const err = {};

    //     if (data.name.length < 5) {
    //       alert("tên không hợp lệ")
    //       console.log("lỗi" + name)
             
    //     }
       
    //     if (data.address.length < 0) {
    //         Alert.alert('địa chỉ không được để trống')
    //         console.log("lỗi" + address)
          
    //     }
       
    //     return {
    //         errMsg: err,
    //         errLength: Object.keys(err).length,
    //     };
    // };

    // const Add = (data: { name: string; dob: string; skill: any; level: string; address: any; }) => {
    //     console.log(data);
    //     const check = validInput(data);
    //     console.log(check.errMsg)
        
         const Add = async () => {
            const data = { name,age,dob, skill, level, address,departmentId,positionId }
            axios.post(BASE_URL+'account/createAccount',
                data
            )
            .then((respose => {
                console.log(respose.data);
                navigation.navigate("User")
            }))
            .catch((err) => {
                Alert.alert(`${err}`, "")
            })
        
    }

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

        <KeyboardAvoidingView style={{ flex: 1, alignItems: "center", padding: 5,      }}>
            <View style={{width: 312, height: 10}}>
            

            </View>
            <View style={{ height: 350, width: "97%" }}>
            <Text>Tên nhân viên</Text>
           <TextInput value={name}
                        placeholder="nhập tên nhân viên"
                       onChangeText={(value: React.SetStateAction<string>) => {
                setName(value)
            }}  style={styles.input} />
             



             <Text>Tuổi</Text>
           <TextInput value={age}
                        placeholder="nhập tuổi"
                       onChangeText={(value: React.SetStateAction<string>) => {
                setAge(value)
            }}  style={styles.input} />
                
            


             <Text>Ngày sinh</Text>
           <TextInput value={dob}
                        placeholder="nhập ngày sinh"
                       onChangeText={(value: React.SetStateAction<string>) => {
                setDob(value)
            }}  style={styles.input} />
               
            


             <Text>Skill</Text>
           <TextInput value={skill}
                        placeholder="nhập Kĩ năng nhân viên"
                       onChangeText={(value: React.SetStateAction<string>) => {
                setSkill(value)
            }}  style={styles.input} />
            <View >
        {renderLabelDep()}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={departmentData}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'chọn Phòng ban' : '...'}
          value={departmentId}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setDepartmentId(item.value);
            setIsFocus(false);
         }}
          
        />
      </View>
      <View >
        {renderLabelPos()}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={positionData}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'chọn Vị trí' : '...'}
          value={positionId}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setPositionId(item.value);
            setIsFocus(false);
         }}
          
        />
      </View>
             
           
                
            


             <Text>Level</Text>
           <TextInput value={level}
                        placeholder="nhập mức độ thành thạo "
                       onChangeText={(value: React.SetStateAction<string>) => {
                setLevel(value)
            }}  style={styles.input} />
                
            
               
             <Text> Address</Text>
           <TextInput value={address}
                        placeholder="nhập địa chỉ nhân viên"
                       onChangeText={(value: React.SetStateAction<string>) => {
                setAddress(value)
            }}  style={styles.input} />
                
            
                <View
                    style={{
                        flexDirection: "row",
                        height: 60,
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Text onPress={cancelAlert}>Hủy bỏ</Text>
                    <TouchableOpacity
                        style={{
                            height: 30,
                            width: 90,
                            justifyContent: "center",
                            alignItems: "center",
                            borderWidth: 1,
                            borderRadius: 10
                        }}
                        onPress={() => Add()}
                    >
                        <Text>Lưu lại</Text>
                    </TouchableOpacity>
                </View>
                
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
    input:{
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
        height: 45,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 8,
        paddingHorizontal: 5,
        marginTop:5
        
      },
      placeholderStyle: {
        fontSize: 14,
      },
      selectedTextStyle: {
        fontSize: 14,
      },
})
export default AddUser;

