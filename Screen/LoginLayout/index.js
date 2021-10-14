import React from 'react'
import { View, Text, ImageBackground } from 'react-native'

export default function index(props) {
    return (
        <ImageBackground source={require('../../assets/loginbackground-image.jpeg')} resizeMode="stretch" resizeMethod="resize" style={{ height: '100%', width: '100%' }}>
            <View style={{ width: '100%', height: '100%', backgroundColor: 'rgba(62, 65, 66, 0.7)' }}>
                {props.children}
            </View>
        </ImageBackground>
    )
}
