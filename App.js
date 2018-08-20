import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CountdownTimer from './components/CountdownTimer';

export default class App extends React.Component {
  render() {
    let eventDate = '2018-09-04T10:20+1000';

    return (
      <View style={styles.container}>
        <CountdownTimer eventDate={eventDate}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
