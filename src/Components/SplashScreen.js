import React from 'react'
import LottieView from 'lottie-react-native';
import { Text, SafeAreaView, AsyncStorage, InteractionManager } from 'react-native'
import { withNavigation, NavigationEvents } from "react-navigation";
import { RFValue } from 'react-native-responsive-fontsize'




class SplashScreen extends React.Component {
    componentDidMount = () => {
        console.log('in component did mount')
        InteractionManager.runAfterInteractions(() => {
            this.getUserToken()
        })
    }

    getUserToken = async () => {
        console.log('in getToken');
        const userToken = await AsyncStorage.getItem('token');
        const { navigation } = this.props
        if (userToken) { navigation.navigate("Home") }
        else {
            console.log('navigating')
            navigation.navigate("Login")
        }
    }

    render = () => {
        console.log('hitting')
        return (
            <SafeAreaView>
                <LottieView
                    style={{ alignSelf: "center", width: RFValue(300), height: RFValue(300) }}
                    source={require('../assets/animations/clap.json')}
                    colorFilters={[{
                        keypath: "button",
                        color: "#F00000"
                    }, {
                        keypath: "Sending Loader",
                        color: "#F00000"
                    }]}
                    autoPlay
                    loop
                />
                <Text style={{ fontSize: RFValue(40), fontWeight: 'bold', marginTop: RFValue(70), alignSelf: 'center', color: '#1f515c' }}>Jin</Text>
                <Text style={{ fontSize: RFValue(10), marginTop: RFValue(2), alignSelf: 'center' }}>Your Management Assistant</Text>


            </SafeAreaView>
        )
    }
}

export default withNavigation(SplashScreen)
