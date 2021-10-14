import axios from 'axios';
import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Alert, ImageBackground, Dimensions, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import Layout from '../LoginLayout'

const dimensions = Dimensions.get('screen')

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
    console.log(dimensions.width);
    return (
        <Layout>
            <ScrollView>
                <Text style={{ textAlign: 'center', margin: 50, color: 'white', fontSize: dimensions.width / 12 }}>
                    Create Your A/C
                </Text>
                <View style={styles.inputContainer}>
                    <TextInput onChangeText={setFirstName} value={firstName} style={styles.input} placeholder="Enter Your First Name" placeholderTextColor="white" />
                    <TextInput onChangeText={setLastName} value={lastName} style={styles.input} placeholder="Enter Your Last Name" placeholderTextColor="white" />
                    <TextInput onChangeText={setEmail} value={email} style={styles.input} placeholder="Enter Your Email" placeholderTextColor="white" />
                    <TextInput secureTextEntry={true} onChangeText={setPassword} value={password} style={styles.input} placeholder="Enter Your Password" placeholderTextColor="white" />
                    <View style={styles.button}>
                        <Button
                            title="Save"
                            onPress={saveUserHandler}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Sign in"
                            onPress={() => navigation.navigate('Login')}
                        />
                    </View>
                </View>
            </ScrollView>
        </Layout>
    )
}


const styles = StyleSheet.create({
    inputContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    input: {
        borderTopWidth: 0,
        borderBottomWidth: 3,
        borderLeftWidth: 3,
        paddingHorizontal: 20,
        borderColor: 'white',
        color: 'white',
        borderRadius: 5,
        margin: 10,
        padding: 5,
        width: dimensions.width / 1.3
    },
    buttonContainer: {


    },
    button: {
        width: dimensions.width / 1.3,
        marginVertical: 10,

    }

})

