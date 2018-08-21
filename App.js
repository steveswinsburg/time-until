import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TimeUnit from './components/TimeUnit';

export default class App extends React.Component {
  
  constructor() {
    super();

    this.interval = null;
    
    this.state = {
      days: '',
      hours: '',
      minutes: '',
      seconds: '',
    }

    // the event
    //note format of timezone is different between react and react-native
    this.eventDate = '2018-09-04T10:20+10:00';
    this.eventName = 'My bae gets home';

  }

  componentDidMount() {

    this.interval = setInterval(
      () => this.calculate(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  calculate() {
    let event = new Date(this.eventDate);
    let now = new Date();

    let diff = new Date(event - now).getTime();

    var d, h, m, s;
    s = Math.floor(diff / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;

    if(d<0) { d= 0; }
    if(h<0) { h= 0; }
    if(m<0) { m= 0; }
    if(s<0) { s= 0; }

    this.setState({
      days: d,
      hours: h,
      minutes: m,
      seconds: s,
    });

  }
  
  
  render() {

    let days = this.state.days;
    let hours = this.state.hours;
    let minutes = this.state.minutes;
    let seconds = this.state.seconds;


    return (
      <View style={styles.container}>
        
        <View>
          <Text style={styles.title}>{this.eventName} in</Text>
        </View>

        <View style={styles.content}>
          <TimeUnit num={days} unit="d" />
          <TimeUnit num={hours} unit="h" />
          <TimeUnit num={minutes} unit="m" />
          <TimeUnit num={seconds} unit="s" leadingZero="true" />
        </View>
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

  title: {
    fontSize: 14,
  },

  content: { 
    flexDirection: 'row',
    alignItems: 'center',
  }

});
