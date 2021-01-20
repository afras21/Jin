import React from 'react'
import { Text, View, TouchableOpacity, SafeAreaView, StyleSheet, AsyncStorage } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import Header from '../../Components/Header'
import { signUp } from '../../Services/authService'
import { HelperText, TextInput } from 'react-native-paper';
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
        password2: '',
        isLoading: false,
        passwordError: false,
        confirmPasswordError: false,
    }
    onChangeText = (key, val) => {
        this.setState({ [key]: val });
    };

    userRegistration = async (data) => {
        console.log(data);
        this.setState({
            isLoading: true
        });
        this.setState({
            isCater: true
        })

        const { name, email, phoneNumber, BusinessName, password, password2 } = this.state;
        if (name && email && phoneNumber && BusinessName && password && password2) {
            if (password === password2) {
                const signedUpData = await signUp(data)
                console.log('###########', signedUpData);
                this.props.navigation.navigate('Login');
            } else {
                alert('password not matching');
            }
        } else {
            alert('Please enter all mandatory details')
        }

        // Toast.show('Successfully signedup');
    }
    hasErrors = (text) => {
        // return !(text.includes('@') || text.includes('.'));
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return !re.test(text);
    }
    confirmPasswordValidation = () => {
        const {password, password2} = this.state
        return !(password === password2);
    }
    checkPassword = () => {
        const {password} = this.state
            return !password.length >=8;
    }

    render = () => {
        return (
            <SafeAreaView>
                <Header navigation={this.props.navigation} />
                <View style={styles.root}>
                    <Text style={styles.loginText}>Signup to</Text>
                    <Text style={styles.loginText}>Jin</Text>
                    <View style={styles.loginFormStyle}>
                        <TextInput
                            style={styles.formTextStyle}
                            onChangeText={(val) => this.onChangeText('name', val)}
                            label={'name'}
                        >
                        </TextInput>

                        <TextInput
                            style={styles.formTextStyle}
                            onChangeText={(val) => this.onChangeText('phoneNumber', val)}
                            label={'Phone number'}
                            keyboardType={"number-pad"}>
                        </TextInput>

                        <TextInput
                            style={styles.formTextStyle}
                            onChangeText={(val) => this.onChangeText('email', val)}
                            label={'email'}>
                        </TextInput>

                        <HelperText type="error" visible={this.hasErrors(this.state.name || 'af@gm.com')}>
                            Email address is invalid!
                        </HelperText>

                        <TextInput
                            style={styles.formTextStyle}
                            onChangeText={(val) => this.onChangeText('password', val)}
                            label={'Password'}
                            secureTextEntry={true}>
                        </TextInput>
                        <HelperText type="error" visible={this.checkPassword}>
                            Passwords should be of min 8 chars
                        </HelperText>
                        <TextInput
                            style={styles.formTextStyle}
                            onChangeText={(val) => this.onChangeText('password2', val)}
                            label={'Confirm password'}
                            length
                            secureTextEntry={true}>
                        </TextInput>
                        <HelperText type="error" visible={this.state.password2 ? this.confirmPasswordValidation(): false}>
                            Passwords does not match
                        </HelperText>

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
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.forgotPwdText}>Having a Jin Account?</Text>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Login') }}>
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
        // fontWeight: '600',
        fontSize: RFValue(15)
    },
    forgotPwdText: {
        marginTop: RFValue(10)
    },
    signUpText: {
        color: '#002c73',
        marginLeft: RFValue(10),
        fontWeight: '600'
    },
    formTextStyle: {
        backgroundColor: '#fff'
    }
})