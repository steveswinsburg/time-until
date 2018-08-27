import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  AsyncStorage
} from "react-native";

export default class SettingsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      eventName: null,
      eventDate: null
    };

    this.eventName;
    this.eventDate;
  }

  componentDidMount() {
    this.retrieveData();
  }

 
  async retrieveData() {
    try {
      const n = await AsyncStorage.getItem("@TimeUntil:eventName");
      const d = await AsyncStorage.getItem("@TimeUntil:eventDate");
      this.setState({
        eventName: n,
        eventDate: d
      });

      this.eventName = n;
      this.eventDate = d;
      
    } catch (error) {
      console.error("Error retrieving data", error);
      alert("Error retrieving data");
    }
  }
  

   async storeData(key, value) {
    try {
      await AsyncStorage.setItem("@TimeUntil:" + key, value);
    } catch (error) {
      console.error("Error saving data", error);
      alert("Error saving data");
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          underlineColorAndroid = "transparent"
          placeholder="Event name"
          defaultValue={this.state.eventName}
          onChangeText={(value) => this.storeData("eventName", value)}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid = "transparent"
          placeholder="Event date"
          defaultValue={this.state.eventDate}
          onChangeText={(value) => this.storeData("eventDate", value)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
  },

  input: {
    margin: 15,
    paddingLeft: 5,
    height: 40,
    borderColor: '#6B52AE',
    borderWidth: 1
  }
});
