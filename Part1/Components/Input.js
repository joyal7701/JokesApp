import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
} from "react-native";
export default class Input extends React.Component {
  fetchData() {
    console.log("button is pressed");
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          keyboardType={"numeric"}
          value={this.props.value}
          style={styles.input}
          onChangeText={(text) => this.props.onChange(text)}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.fetchData()}
        >
          <Text style={styles.text}>Search</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: 300,
    backgroundColor: "gray",
    borderWidth: 2,
  },
  button: {
    backgroundColor: "blue",
    height: 40,
    width: 100,
    borderColor: "gray",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});
