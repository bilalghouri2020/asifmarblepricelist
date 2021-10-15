import React from 'react'
import { View, Text, Button } from 'react-native'

import { AuthContext } from '../../components/context'

export default function index() {

    const { signOut } = React.useContext(AuthContext)
    return (
        <View>
            <Text>asdfasdf</Text>
            <Button title="Sign Out" onPress={signOut} />
        </View>
    )
}
