import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Bananas below</Text>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Greeting name='Bananas' />
      </View>
    );
  }
}