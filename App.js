import React, { useEffect } from 'react';
import { SafeAreaView, View, Text, Alert, ImageBackground, Dimensions, ScrollView } from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button, ThemeProvider, Header } from 'react-native-elements';
// import Screens
import HomePage from './Screen/Home';
import LoginPage from './Screen/Login';
import SignUpPage from './Screen/SignUp';

const Stack = createNativeStackNavigator();

const theme = {
  Button: {
    raised: true,
    titleStyle: {
      color: 'white'
    }
  },
};



const App = () => {

  useEffect(() => {
    getData()
  }, [])

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
      <ThemeProvider theme={theme}>
        {/* <Header
          placement="left"
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        /> */}
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="SignUp"
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