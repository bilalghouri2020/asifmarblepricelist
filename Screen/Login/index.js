import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, ScrollView, Dimensions, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Layout from '../LoginLayout';
import axios from 'axios'
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { AuthContext } from '../../components/context'

const Validation = Yup.object().shape({
    email: Yup.string()
        .email().required(),
    password: Yup.string()
        .required()
        .required('No password provided.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
})

const dimensions = Dimensions.get('screen');
export default function index({ navigation }) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    // AsyncStorage.getItem('@token_key').then(res => {
    //     console.log(res, 'hello world')
    // })

    const { signIn } = React.useContext(AuthContext)
    return (
        <Layout>
            <ScrollView>
                <Text style={{ textAlign: 'center', margin: 50, color: 'white', fontSize: dimensions.width / 12 }}>
                    Login Screen
                </Text>
                <View style={styles.inputContainer}>
                    <Formik
                        validateOnChange={true}
                        initialValues={
                            {
                                email: '',
                                password: ''
                            }
                        }
                        validationSchema={Validation}
                        onSubmit={(values, formikActions) => {
                            axios.post('http://10.0.2.2:3000/users/login', {
                                email: values.email,
                                password: values.password
                            }).then(async res => {
                                // console.log(res.data.errors[0].msg);
                                // console.log(res.data.errors[0].status);
                                console.log(res.data.token)
                                let data = await AsyncStorage.setItem('@token_key', res.data.token);
                                console.log(data);
                                formikActions.setSubmitting(false)
                                signIn()
                                // navigation.navigate('Home')
                            }).catch(err => {
                                // console.log(err);
                                // Alert.alert('')
                                formikActions.setSubmitting(false)
                            })
                            // setTimeout(() => {
                            //     Alert.alert(JSON.stringify(values));
                            //     // Important: Make sure to setSubmitting to false so our loading indicator
                            //     // goes away.
                            //     formikActions.setSubmitting(false);
                            // }, 500);
                        }}
                    >
                        {({ handleSubmit, handleBlur, handleChange, handleReset, values, errors, touched, isSubmitting }) => {


                            return (<View>
                                <TextInput onChangeText={handleChange('email')} value={values.email} autoFocus style={styles.input} placeholder="Enter Your Email" placeholderTextColor="white" />
                                {touched.email && errors.email ? (
                                    <Text style={styles.error}>{errors.email}</Text>
                                ) : null}
                                <TextInput secureTextEntry={true} onChangeText={handleChange('password')} value={values.password} style={styles.input} placeholder="Enter Your Password" placeholderTextColor="white" />
                                {touched.password && errors.password ? (
                                    <Text style={styles.error}>{errors.password}</Text>
                                ) : null}
                                <View style={styles.button}>
                                    <Button
                                        title="Submit"
                                        onPress={handleSubmit}
                                        // color="blue"
                                        loading={isSubmitting}
                                        disabled={isSubmitting}
                                    />
                                </View>
                                <View style={styles.button}>
                                    <Button
                                        title="Reset"
                                        onPress={handleReset}
                                        color="blue"

                                        mode="outlined"
                                        disabled={isSubmitting}
                                    />
                                </View>
                                <View style={styles.button}>
                                    <Button
                                        title="Go to Details"
                                        onPress={() => navigation.navigate('Home')}
                                    />
                                </View>
                                <View style={styles.button}>
                                    <Button
                                        title="Sign Up"
                                        onPress={() => navigation.navigate('SignUp')}
                                    />
                                </View>
                            </View>
                            )
                        }
                        }
                    </Formik>
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
    button: {
        width: dimensions.width / 1.3,
        marginVertical: 10,
    },
    error: {
        margin: 8,
        fontSize: 14,
        color: 'white',
        textShadowColor: 'yellow',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
})
