import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Profile from './src/screens/Profile';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Profile />
      </View>
    );
  }
}
