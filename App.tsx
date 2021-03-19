/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import AppNavigation from '././src/navigations';
import { Root } from 'native-base';
import { StatusBar } from 'react-native';

export default class App extends React.Component {

  constructor(props:any) {
    super(props);
    
  }

  render() {
    return (
      <Root style={{ backgroundColor: '#FFFFFF' }}>
        <StatusBar backgroundColor="transparent" barStyle="dark-content" />
        <AppNavigation />
      </Root>
    )
  }

}
