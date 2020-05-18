import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import {TextInput} from 'react-native-paper';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon
          iconStyle={{marginTop: 55}}
          name="camera"
          type="entypo"
          size={50}
        />
        <Image
          style={styles.profile}
          source={require('../../assets/profile.jpg')}
        />

        <View style={{width: 320, marginTop: 60}}>
          <TextInput style={{paddingBottom: 30}} label="name" mode="outlined" />
          <TextInput label="Hometown" mode="outlined" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    alignItems: 'center',
  },
  profile: {
    width: 150,
    height: 150,
    borderRadius: 100,
    opacity: 0.4,
    marginTop: -90,
  },
});
