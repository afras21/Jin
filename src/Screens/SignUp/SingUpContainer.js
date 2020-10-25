import React from 'react'
import {Text, View, TextInput, TouchableOpacity, SafeAreaView, StyleSheet, AsyncStorage} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import Header from '../../Components/Header'
import {signUp} from '../../Services/authService'
// import Toast from 'react-native-simple-toast';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
  } from "react-native-responsive-screen";
export default class SignUpContainer extends React.Component { 
    state = {
        name: '',
        email: '',
        phoneNumber: '',
        BusinessName: '',
        password: '',
        password2: ''
    }
    onChangeText = (key, val) => {
        this.setState({ [key]: val });
      };

      userRegistration = async (data) => {
        console.log(data);
        const signedUpData = await signUp(data)
        // Toast.show('Successfully signedup');
        this.props.navigation.navigate('Login');
    }

    render = () => {
        return(
            <SafeAreaView>
            <Header navigation = {this.props.navigation}/>
            <View style={styles.root}>
                <Text style={styles.loginText}>Signup to</Text>
                <Text style={styles.loginText}>Jin</Text>

                <View style={styles.loginFormStyle}>
                    <TextInput onChangeText={(val) => this.onChangeText('name', val)} style={styles.placeholderStyles} placeholder={'User name'}></TextInput>
                    <TextInput onChangeText={(val) => this.onChangeText('phoneNumber', val)} style={styles.placeholderStyles} placeholder={'Phone number'} keyboardType={"number-pad"}></TextInput>
                    <TextInput onChangeText={(val) => this.onChangeText('email', val)} style={styles.placeholderStyles} placeholder={'email id'}></TextInput>
                    <TextInput onChangeText={(val) => this.onChangeText('BusinessName', val)} style={styles.placeholderStyles} placeholder={'Business name'}></TextInput>
                    <TextInput onChangeText={(val) => this.onChangeText('password', val)} style={styles.placeholderStyles} placeholder={'Password'} secureTextEntry={true}></TextInput>
                    <TextInput onChangeText={(val) => this.onChangeText('password2', val)} style={styles.placeholderStyles} placeholder={'Confirm password'} secureTextEntry={true}></TextInput>

                </View>

                <TouchableOpacity 
                style={styles.loginButton}
                onPress={() => 
                    // Toast.show('Successfully signedup')
                    this.userRegistration(this.state)
                }
                >
                    <Text style={styles.loginButtonText}>Register</Text>
                </TouchableOpacity>
                <View style={{flexDirection: 'row'}}>
                <Text style={styles.forgotPwdText}>Having a Jin Account?</Text>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('Login')}}>
                <Text style={[styles.forgotPwdText, styles.signUpText]}>Login now</Text>

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
        marginTop: RFValue(10)
    },
    placeholderStyles: {
        fontSize: RFValue(20),
        padding: RFValue(10)
    },
    loginFormStyle: {
        marginTop: RFValue(30)
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
        fontWeight: '600',
        fontSize: RFValue(15)
    },
    forgotPwdText: {
        marginTop: RFValue(10)
    },
    signUpText: {
        color: '#002c73',
        marginLeft: RFValue(10),
        fontWeight: '600'
    }
})