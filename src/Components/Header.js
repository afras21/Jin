import React from 'react'
import { StatusBar, View, Image, SafeAreaView , Text, AsyncStorage } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { RFValue } from 'react-native-responsive-fontsize'
import { TouchableOpacity } from 'react-native-gesture-handler';
const icon = <FontAwesome5 name={'angle-left'} size={18} color="#000000" />;
const signOutIcon = <FontAwesome5 name={'sign-out-alt'} size={18} color="#000000" />;


export default header = props => {
    const {navigation, showLogout} = props;
    return (
        <View>
            <StatusBar />
            <SafeAreaView>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: RFValue(10)}}>
            <TouchableOpacity onPress={() => {navigation.navigate('Login')}}>
                <Text style={{ textAlign: 'left'}}>{icon}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleLogout(navigation)}>
                <Text style={{ textAlign: 'right'}}>{signOutIcon}</Text>
            </TouchableOpacity>
            </View>

            </SafeAreaView>
        </View>

    )
}

const handleLogout = async (navigation) => {
    await AsyncStorage.removeItem('token');
    navigation.navigate('Login');
}