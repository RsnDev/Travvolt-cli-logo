import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  StatusBar,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
  ToastAndroid,
} from "react-native";
const { width, height } = Dimensions.get("window");
const Destination = ({ navigation }) => {
  return (
    <View
      style={{
        height: height,
        width: width,
      }}
    >
      <ImageBackground
        source={require("../../../assets/image/bg.jpg")}
        style={{ height: height, width: width }}
      >
        <Text
          style={{
            fontSize: 30,
            marginTop: 80,
            alignContent: "center",
          }}
        >
          Destination COMING SOON
        </Text>
      </ImageBackground>
    </View>
  );
};

export default Destination;

const style = StyleSheet.create({});
