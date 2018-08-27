import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TimeUnit from "../components/TimeUnit";
import { Button, Icon } from "react-native-elements";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Time Until"
  };

  constructor() {
    super();

    this.interval = null;

    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    // the event
    //note format of timezone is different between react and react-native
    this.eventDate = "2018-09-04T10:20+10:00";
    this.eventName = "My bae gets home in";
  }

  componentDidMount() {
    this.calculate();
    this.interval = setInterval(() => this.calculate(), 1000);
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

    if (d < 0) {
      d = 0;
    }
    if (h < 0) {
      h = 0;
    }
    if (m < 0) {
      m = 0;
    }
    if (s < 0) {
      s = 0;
    }

    this.setState({
      days: d,
      hours: h,
      minutes: m,
      seconds: s
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
          <Text style={styles.eventName}>{this.eventName}</Text>
        </View>

        <View style={styles.eventTime}>
          <TimeUnit num={days} unit="d" />
          <TimeUnit num={hours} unit="h" />
          <TimeUnit num={minutes} unit="m" />
          <TimeUnit num={seconds} unit="s" leadingZero="true" />
        </View>

        <View style={styles.settings}>
          <Icon
            raised
            name="settings"
            color="#ccc"
            onPress={() => this.props.navigation.navigate("Settings")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },

  eventName: {
    fontSize: 16,
    paddingBottom: 10,
    color: "#000"
  },

  eventTime: {
    flexDirection: "row",
    alignItems: "center"
  },

  settings: {
    alignItems: "flex-end",
    position: "absolute",
    bottom: 0,
    right: 0
  }
});
