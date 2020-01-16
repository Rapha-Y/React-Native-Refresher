import React, { Component } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

class Blink extends Component {

  componentDidMount(){
    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }

  //state object
  state = { isShowingText: true };

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text>{this.props.text}</Text>
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
        <View style={{width: 50, height: 30, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 30, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 30, backgroundColor: 'steelblue'}} />
        <Text style={styles.red}>I'm red</Text>
        <Text style={styles.bigBlue}>I'm blue!</Text>
        <Blink text='Peek-a-boo!' />
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Greeting name='Bananas' />
        <View style={{width: 150, height: 30, backgroundColor: 'steelblue'}} />
        <View style={{width: 100, height: 30, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 30, backgroundColor: 'powderblue'}} />
      </View>
    );
  }
}