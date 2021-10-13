import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

import { Button } from 'react-native-elements';

export default function index({ navigation }) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <View>
            <Text>Login Screen</Text>
            <TextInput onChangeText={setEmail} value={email} style={styles.input} placeholder="Enter Your Email" />
            <TextInput onChangeText={setPassword} value={password} style={styles.input} placeholder="Enter Your Password" />
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Home')}
            />
            <Button
                title="Sign Up"
                onPress={() => navigation.navigate('SignUp')}
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
