/**
 * LoginContainer
 */
import React from 'react';
import {
    Text, View, TextInput, TouchableOpacity, SafeAreaView, StyleSheet, AsyncStorage, ActivityIndicator
} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { withNavigation, NavigationEvents } from "react-navigation";
import { login } from '../../Services/authService'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";
class LoginContainer extends React.Component {

    state = {
        email: '',
        password: '',
        isLoading: false
    }

    async login() {
        this.setState({isLoading: true})
        const userData = await login(this.state);
        if (userData && userData.isAuth) {
            console.log(userData);
            this.setUserToken(userData);
            alert('LoggedIn Successfully')
        } else {
            this.setState({isLoading: false})
            alert('Login Failed')
        }
        console.log(userData);
    }

    setUserToken = async (data) => {
        await AsyncStorage.setItem('token', data.token);
        await AsyncStorage.setItem('userData', JSON.stringify(data));
        this.props.navigation.navigate('Home');
    }

    onChangeText = (key, val) => {
        this.setState({ [key]: val });
    };

    render = () => {
        return (
            <SafeAreaView>
                <View style={styles.root}>
                    <Text style={styles.loginText}>Login to</Text>
                    <Text style={styles.loginText}>Jin</Text>

                    <View style={styles.loginFormStyle}>
                        <TextInput onChangeText={(val) => this.onChangeText('email', val)} style={styles.placeholderStyles} placeholder={'Enter your email'}></TextInput>
                        <TextInput onChangeText={(val) => this.onChangeText('password', val)} style={styles.placeholderStyles} placeholder={'Password'} secureTextEntry={true}></TextInput>
                    </View>
                        <TouchableOpacity
                        style={styles.loginButton}
                        onPress={() => { this.login() }}
                    >
                        {
                            this.state.isLoading ?
                            <ActivityIndicator size="small" color="#fff" />
                            :
                            <Text style={styles.loginButtonText}>Login</Text>
                        }
                    </TouchableOpacity>
 
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.forgotPwdText}>Are you new to Jin?</Text>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("SignUp") }}>
                            <Text style={[styles.forgotPwdText, styles.signUpText]}>Signup now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    loginText: {
        fontSize: RFValue(40),
        fontWeight: 'bold'
    },
    root: {
        padding: RFValue(20),
        marginTop: RFValue(60)
    },
    placeholderStyles: {
        fontSize: RFValue(20),
        padding: RFValue(10)
    },
    loginFormStyle: {
        marginTop: RFValue(50)
    },
    loginButton: {
        width: wp(90),
        height: wp(10),
        backgroundColor: '#3b3b3b',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: RFValue(20)
    },
    loginButtonText: {
        color: '#ffffff',
        // fontWeight: '600',
        fontSize: RFValue(15)
    },
    forgotPwdText: {
        marginTop: RFValue(10)
    },
    signUpText: {
        color: '#002c73',
        marginLeft: RFValue(10),
        // fontWeight: '600'
    }
})

export default withNavigation(LoginContainer)
