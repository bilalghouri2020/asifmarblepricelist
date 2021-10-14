import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, ScrollView, Dimensions, Button } from 'react-native'
import { } from 'react-native-elements';
import Layout from '../LoginLayout';

import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const dimensions = Dimensions.get('screen');
export default function index({ navigation }) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

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

                        // validationSchema={

                        // }
                        onSubmit={(values, formikActions) => {


                            console.log('submit');

                            // setTimeout(() => {
                            //     Alert.alert(JSON.stringify(values));
                            //     // Important: Make sure to setSubmitting to false so our loading indicator
                            //     // goes away.
                            //     formikActions.setSubmitting(false);
                            // }, 500);
                        }}
                    >
                        {({ handleSubmit, handleBlur, handleChange, handleReset, values, errors, touched, isSubmitting }) => (
                            <View>
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
                                        color="blue"
                                        loading={isSubmitting}
                                        disabled={isSubmitting}
                                    />
                                </View>
                                <View style={styles.button}>
                                    <Button
                                        title="Reset"
                                        onPress={handleReset}
                                        color="black"
                                        mode="outlined"
                                        disabled={isSubmitting}
                                        Reset
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
                        )}
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
        color: 'red',
        fontWeight: 'bold',
    },
})
