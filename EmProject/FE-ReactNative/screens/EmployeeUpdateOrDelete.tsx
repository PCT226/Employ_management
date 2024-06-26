import React, { useEffect, useState } from 'react';
import { View, Text, Button, TextInput, KeyboardAvoidingView, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BASE_URL } from '../sevices/authentication';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { encode } from 'base-64';
import { RouteProp } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';
import { StyleSheet } from 'react-native';
import axios from 'axios';


type RootStackParamList = {
  EmployeeUpdateOrDelete: { accountId: number }; // Đảm bảo tên phù hợp với màn hình 'EmployeeList'
};

type EmployeeUpdateOrDeleteRouteProp = RouteProp<RootStackParamList, 'EmployeeUpdateOrDelete'>;

const EmployeeUpdateOrDelete = ({ route }: { route: EmployeeUpdateOrDeleteRouteProp }) => {
  const { accountId } = route.params;
  const [employee, setEmployee] = useState({
    name: '', age: '', address: '', dob: '', skill: '', level: '', departmentId: '', positionId: ''
  });
  const [editing, setEditing] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const navigation = useNavigation();
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
    if (employee.departmentId || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
          Phòng ban
        </Text>
      );
    }
    return null;
  };
  const renderLabelPos = () => {
    if (employee.positionId || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
          Vị trí
        </Text>
      );
    }
    return null;
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
  const handleUpdate = () => {
    // Gửi yêu cầu API để cập nhật thông tin nhân viên (dùng fetch hoặc axios)
    // Sau khi cập nhật xong, có thể chuyển về màn hình EmployeeListScreen hoặc thực hiện các tác vụ khác
    axios.put(BASE_URL + 'account/updateAccount', employee

    )
      .then((respose => {
        console.log(respose.data)
        navigation.navigate("DepartmentListScreen")
      }))
      .catch((err) => {
        Alert.alert(`${err}`, "")
      })
  };

  const buttonAlert = () => {
    Alert.alert(
      "Bạn muốn xóa nhân viên?",
      "",
      [
        {
          text: "Không",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Có", onPress: () => handleDelete() }
      ]

    )
  };

  const handleDelete = () => {
    // Gửi yêu cầu API để xóa nhân viên (dùng fetch hoặc axios)
    // Sau khi xóa xong, có thể chuyển về màn hình EmployeeListScreen hoặc thực hiện các tác vụ khác
    axios.delete(BASE_URL + `account/deleteAccount/${accountId}`
    )
      .then((respose => {
        console.log(respose.data);
        navigation.navigate("DepartmentListScreen")
      }))
      .catch((err) => {
        Alert.alert(`${err}`, "")
      })

  }


  const RoleSalary = () => {
    // Gửi yêu cầu API để xóa nhân viên (dùng fetch hoặc axios)
    // Sau khi xóa xong, có thể chuyển về màn hình EmployeeListScreen hoặc thực hiện các tác vụ khác
    const data = {accountId: accountId}
    axios.post(BASE_URL + `salary/createSalary`, data
    )
      .then((respose => {
        console.log(respose.data);
        navigation.navigate('Salary')
       

      }))
      .catch((err) => {
        Alert.alert(`${err}`, "")
      })

  }


  return (
    <KeyboardAvoidingView style={{ flex: 1, alignItems: "center", padding: 3 }}>
      <View style={{ width: 312, height: 5 }}>


      </View>
      <View style={{ height: 350, width: "97%" }}>
        <Text>Tên nhân viên</Text>
        <TextInput value={employee.name}
          placeholder=""
          onChangeText={(text) => setEmployee({ ...employee, name: text })} style={styles.input} />

        <Text>Skill</Text>
        <TextInput value={employee.skill}
          placeholder="nhập Kĩ năng nhân viên"
          onChangeText={(text) => setEmployee({ ...employee, skill: text })} style={styles.input} />
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
            placeholder={!isFocus ? `'chọn Phòng ban'-` : '...'}
            value={employee.departmentId}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setEmployee({ ...employee, departmentId: (item.value) });
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
            value={employee.positionId}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setEmployee({ ...employee, positionId: (item.value) });
              setIsFocus(false);
            }}

          />
        </View>






        <Text>Level</Text>
        <TextInput value={employee.level}
          placeholder="nhập mức độ thành thạo "
          onChangeText={(text) => setEmployee({ ...employee, level: text })} style={styles.input} />



        <Text> Address</Text>
        <TextInput value={employee.address}
          placeholder="nhập địa chỉ nhân viên"
          onChangeText={(text) => setEmployee({ ...employee, level: text })} style={styles.input} />


        <View
          style={{
            flexDirection: "row",
            height: 60,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              height: 30,
              width: 90,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderRadius: 10
            }}
            onPress={handleUpdate}

          >
            <Text>Cập nhập</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 30,
              width: 90,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderRadius: 10
            }}
            onPress={buttonAlert}
          >
            <Text>Xóa</Text>
          </TouchableOpacity>

        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity onPress={() => navigation.navigate('Bonus', { accountId: accountId })}
            style={{
              height: 30,
              width: 90,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderRadius: 10
            }}


          >
            <Text>Thưởng</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Leave', { accountId: accountId })}
            style={{
              height: 30,
              width: 90,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderRadius: 10
            }}

          >
            <Text>Phạt</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={RoleSalary}
            style={{
              height: 30,
              width: 90,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderRadius: 10
            }}


          >
            <Text>Lương</Text>
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
  input: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 9,
    height: 36
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: 310,
    height: 527,

  },
  dropdown: {
    height: 36,
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

export default EmployeeUpdateOrDelete;