import React, { Component } from "react";
import { View, Text } from "react-native";
import Moment from "react-moment";
import "moment-timezone";

export class CountdownTimer extends Component {
  constructor(props) {
    super(props);

    //bind local functions
    this.diff = this.diff.bind(this);

    this.state = { now: new Date() };
    this.interval = null;

    /*
    setInterval(() => {
      this.setState({
        now: new Date()
      });
    }, 1000);
    */
    
  }

  

  /*
  componentDidMount() {
    this.interval = setInterval(function() {
      this.setState({
        now: new Date(),
      });
    }, 1000);
  }
  

  
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  */

  diff() {
    let now = new Date();
    console.log(now);
    console.log(now);
    console.log(this.props.eventDate);

    console.log(<Moment diff={this.props.eventDate}>{now}</Moment>);

    return (<Moment diff={this.props.eventDate}>{now}</Moment>);
        
  }



  render() {
    return (
      <View>
        <Text>date:</Text>
        <Moment element={Text}>{this.props.eventDate}</Moment>
    

        <Text>from now:</Text>
        <Moment element={Text} fromNow>{this.props.eventDate}</Moment>

        <Moment element={Text} >{this.diff()}</Moment>


      </View>
    );
  }
}

export default CountdownTimer;
