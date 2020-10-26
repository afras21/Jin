import {createSwitchNavigator} from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';



/**
 * Screens
 */
import LoginContainer from '../Screens/Login/LoginContainer'
import SignUpContainer from '../Screens/SignUp/SingUpContainer'
import SplashScreen from '../Components/SplashScreen'
import HomeScreenContainer from '../Screens/Home/HomeContainer'

const authStack = createSwitchNavigator(
    {
        Splash: SplashScreen,
        Login: LoginContainer,
        SignUp: SignUpContainer,
        Home: HomeScreenContainer,
        // App: TabStack,
    },{
        initialRouteName: "Splash"
    }
)

// const TabStack = createMaterialBottomTabNavigator(

// )

export default authStack;