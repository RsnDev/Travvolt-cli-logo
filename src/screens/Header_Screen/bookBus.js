import React, { useState } from "react";

import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  require,
  TextInput,
} from "react-native";
import axios from "axios";
import { debounce } from "lodash";
//import App from "../../component/publicIp";
const BookBus = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = debounce(async () => {
    // const response = await fetch(
    //   `https://api.example.com/search?term=${searchTerm}&key=YOUR_API_KEY`
    // );
    // const data = await response.json();
    console.log();
    setResults(data.results);
  }, 500);

  return (
    // <View>
    //   <Text
    //     style={{
    //       fontSize: 30,
    //       marginTop: 80,
    //       alignContent: "center",
    //     }}
    //   >
    //     Book Bus
    //   </Text>
    //   <View>{/* <App /> */}</View>
    // </View>

    <View
      style={{
        marginTop: 100,
        backgroundColor: "yellow",
      }}
    >
      <TextInput
        placeholder="type here..."
        value={searchTerm}
        onChangeText={(text) => {
          setSearchTerm(text);
          handleSearch();
        }}
      />
      {results.map((result) => (
        <Text key={result.id}>{result.name}</Text>
      ))}
    </View>
  );
};

export default BookBus;

const style = StyleSheet.create({});
