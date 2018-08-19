import React, { Component } from 'react';
import {View, Text} from 'react-native';
import Moment from 'react-moment';
import 'moment-timezone';

export class CountdownTimer extends Component {
  
  constructor(props) {
    super(props);

    this.state = {now: new Date()};
    this.interval = null;

    setInterval(() => {
      this.setState({
        now: new Date()
      });
    }, 1000);
    
/*
    // Refresh every second
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
    */
  }

  /*
  getInitialState() {
    return {
      now: new Date(),
    };
    this.interval = null;
  }
  */

  /*
  componentDidMount() {
    this.interval = setInterval(function() {
      this.setState({
        now: new Date(),
      });
    }, 1000);
  }
  */

  /*
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  */

 componentDidMount() {
  //this.interval = 
}

  
  render() {
  
      return (
        <View>
          <Text>date:</Text><Moment element={Text}>{this.props.date}</Moment> 
          <Text>now:</Text><Moment element={Text}>{this.state.now}</Moment> 
        </View>
      );
    }
}

export default CountdownTimer;