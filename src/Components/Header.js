import React from 'react'
import { StatusBar, View, Image, SafeAreaView , Text } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { RFValue } from 'react-native-responsive-fontsize'
import { TouchableOpacity } from 'react-native-gesture-handler';
const icon = <FontAwesome5 name={'angle-left'} size={18} color="#000000" />;

export default header = props => {
    const {navigation} = props;
    return (
        <View>
            <StatusBar />
            <SafeAreaView>
            <TouchableOpacity onPress={() => {navigation.navigate('Login')}}>
                <Text style={{ textAlign: 'left',padding: RFValue(20),}}>{icon}</Text>
            </TouchableOpacity>
            </SafeAreaView>
        </View>

    )
}