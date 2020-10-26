import React from 'react'
import { withNavigation, NavigationEvents } from "react-navigation";
import { RFValue } from 'react-native-responsive-fontsize'
import { SafeAreaView, Text, View } from 'react-native'
import Header from '../../Components/Header'

class HomeScreenContaoner extends React.Component {

    render = () => {
        return (
            <SafeAreaView>
            <Header navigation = {this.props.navigation}/>
                <Text>Welcome to Jin</Text>
            </SafeAreaView>
        )

    }
}

export default withNavigation(HomeScreenContaoner);