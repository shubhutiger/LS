import React, { Component } from 'react';
import { StyleSheet, Text, View   } from 'react-native';
import NetInfo from '@react-native-community/netinfo'


export default class Net extends Component {

  constructor() {
    super();
    this.state = {
      connection_Status: ""
    }
  }

  componentDidMount() {
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);

    NetInfo.isConnected.fetch().done((isConnected) => {
      if (isConnected == true) {
        this.setState({ connection_Status: "Online" })
      }
      else {
        this.setState({ connection_Status: "Offline" })
      }
    });
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
  }

  handleConnectivityChange = (isConnected) => {
    if (isConnected == true) {
      this.setState({ connection_Status: "Online" })
    }
    else {
      this.setState({ connection_Status: "Offline" })
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Device Current Status :  </Text>
        <Text style={styles.text}> You are {this.state.connection_Status} </Text> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
});