import React, { useEffect } from 'react';
import { SafeAreaView, View, Text, Alert } from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button, ThemeProvider } from 'react-native-elements';
import { useColorScheme } from 'react-native-appearance';
// import Screens
import HomePage from './Screen/Home';
import LoginPage from './Screen/Login';
import SignUpPage from './Screen/SignUp';

const Stack = createNativeStackNavigator();

const theme = {
  Button: {
    raised: true,
    titleStyle: {
      color: 'blue',
    },
  },
};



const App = () => {

  useEffect(() => {
    getData()
  }, [])
  let colorScheme = new useColorScheme();

  const getData = () => {
    axios.get('http:/10.0.2.2:3000/').then((res) => {
      console.log(res.data);
    }).catch(err => {
      console.log(err);
    });
    // console.log(res.data);
  }
  console.log('update');
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme} useDark={colorScheme === 'dark'}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false
            }}>
            <Stack.Screen name="Home" component={HomePage} options={{ title: 'Overview' }} />
            <Stack.Screen name="Login">
              {props => <LoginPage {...props} />}
            </Stack.Screen>
            <Stack.Screen name="SignUp">
              {props => <SignUpPage {...props} />}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  )

}

export default App;