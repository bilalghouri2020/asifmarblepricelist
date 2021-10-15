import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, Alert, ImageBackground, Dimensions, ScrollView, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button, ThemeProvider, Header } from 'react-native-elements';
import { AuthContext } from './components/context'
// import Screens
import RootStackScreen from './Screen/RootStackScreen'
import Main from './Screen/Main'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const theme = {
  Button: {
    raised: true,
    titleStyle: {
      color: 'white'
    }
  },
};

let isToken = false

AsyncStorage.getItem('@token_key').then(res => {
  isToken = true;
});

const Redirect = ({ navigation }) => {
  navigation.navigate('Home')
  return <View>
    <Text>REdirenct</Text>
  </View>
}


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

  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const authContext = React.useMemo(() => ({
    signIn: () => {
      setUserToken('hadsf');
      setIsLoading(false)
    },
    signOut: () => {
      console.log('signOut')
      setUserToken(null);
      setIsLoading(false)
    },
    signUp: () => {
      setUserToken('hadsf');
      setIsLoading(false)
    }
  }))

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  })


  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View >
    )
  }

  console.log('set');

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <AuthContext.Provider value={authContext}>
          <NavigationContainer>

            <RootStackScreen />


          </NavigationContainer>
        </AuthContext.Provider>
      </ThemeProvider>
    </SafeAreaProvider>
  )

}

export default App;