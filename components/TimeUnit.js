import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';

export class TimeUnit extends Component {
  
  render() {

    let num = this.props.num;
    let unit = this.props.unit;
    let leadingZero=this.props.leadingZero;

    if(leadingZero) {
      num=this.pad(num);
    }

    return (
      <View>
        <Text style={styles.digit}>
          {num}
          <Text style={styles.separator}>
          {unit}
          </Text>
        </Text>
      </View>
    );
  }

  pad(num) {
    return (num < 10) ? ("0" + num) : num;
  }
  
}

const styles = StyleSheet.create({

  digit: {
    fontSize: 36,
    paddingLeft: 5,
    paddingRight: 5,
  },
  
  separator: {
    fontSize: 20,
    paddingRight: 10,
  }
});

export default TimeUnit;
