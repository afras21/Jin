/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createAppContainer } from "react-navigation";
import authStack from './src/Navigator/NavigationContainer'
const Navigation = createAppContainer(authStack);

class App extends React.Component{
  render = () => { return (<Navigation />) }
}


export default App;
