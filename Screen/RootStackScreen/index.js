import React from 'react'
import { View, Text } from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../Home'
import Login from '../Login';
import SignUp from '../SignUp'

const RootAuthStack = createNativeStackNavigator()
const RootAppStack = createNativeStackNavigator()


const RootAuthStackScreen = () => {
    return (
        <RootAuthStack.Navigator initialRouteName="Login" screenOptions={{
            headerShown: false
        }}>
            <RootAuthStack.Screen name="Home" component={Home} />
            <RootAuthStack.Screen name="Login" component={Login} />
            <RootAuthStack.Screen name="SignUp" component={SignUp} />
        </RootAuthStack.Navigator>
    )
}

const RootAppStackScreen = () => {
    return (
        <RootAppStack.Navigator initialRouteName="Home" screenOptions={{
            headerShown: false
        }}>
            <RootAppStack.Screen name="Home" component={Home} />
            {/* <RootAppStack.Screen name="Login" component={Login} />
            <RootAppStack.Screen name="SignUp" component={SignUp} /> */}
        </RootAppStack.Navigator>
    )
}

export default RooStack = () => {

    return isSignedIn ? <RootAppStackScreen /> : <RootAuthStackScreen />
}