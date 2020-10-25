import {createSwitchNavigator} from 'react-navigation'


/**
 * Screens
 */
import LoginContainer from '../Screens/Login/LoginContainer'
import SignUpContainer from '../Screens/SignUp/SingUpContainer'

const authStack = createSwitchNavigator(
    {
        Login: LoginContainer,
        SignUp: SignUpContainer
    },{
        initialRouteName: "Login"
    }
)

export default authStack;