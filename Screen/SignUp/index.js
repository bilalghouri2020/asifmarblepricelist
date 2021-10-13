import axios from 'axios';
import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { Button } from 'react-native-elements';

export default function index({ navigation }) {

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const saveUserHandler = () => {
        axios.post('http://10.0.2.2:3000/users/', {
            firstname: firstName,
            lastname: lastName,
            email,
            password,
        }).then(res => {
            console.log(res.data.errors[0].msg);
            console.log(res.data.errors[0].status);
        }).catch(err => {
            console.log(err);
            Alert.alert('')
        })
    }

    return (
        <View>
            <Text>Sign Up Screen</Text>
            <TextInput onChangeText={setFirstName} value={firstName} style={styles.input} placeholder="Enter Your First Name" />
            <TextInput onChangeText={setLastName} value={lastName} style={styles.input} placeholder="Enter Your Last Name" />
            <TextInput onChangeText={setEmail} value={email} style={styles.input} placeholder="Enter Your Email" />
            <TextInput secureTextEntry={true} onChangeText={setPassword} value={password} style={styles.input} placeholder="Enter Your Password" />
            <Button
                title="Save"
                onPress={saveUserHandler}
            />

            <Button
                title="Sign in"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 5,
        margin: 10,
        padding: 5,

    }
})

