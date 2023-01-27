import React from "react";
import {
  StyleSheet,
  Text,
  StatusBar,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
} from "react-native";
import HomeScreen from "../../component/slider";
const { width, height } = Dimensions.get("window");

const Activities = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/image/bg.jpg")}
        style={{ height: height, width: width }}
      >
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Holder")}>
              <Image
                source={require("../../../assets/logo/back.png")}
                style={{
                  width: 19,
                  height: 19,
                  marginTop: 38,
                  marginLeft: 14,
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: "#fff",
                marginTop: 35,
                marginLeft: 16,
                fontSize: 17,
                fontWeight: "500",
              }}
            >
              Activities
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#C7E5F0",
    height: height,
    width: width,
  },
});
export default Activities;
