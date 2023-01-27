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
  ScrollView,
  Button,
} from "react-native";
const { width, height } = Dimensions.get("window");

const PassengerFlightDetails = ({ navigation }) => {
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
        <ScrollView>
          {/* header */}
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              // onPress={() => navigation.navigate("OneWayFlight")}
              //onPress={() => navigation.navigate("SearchFlights")}
              onPress={() => navigation.goBack()}
            >
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
              From => TO
            </Text>
          </View>

          {/* details */}
          <View
            style={{
              marginTop: 20,
              flex: 1,
              height: height,
              width: width,
              backgroundColor: "#EFF5FF",
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
            }}
          >
            {/* title */}
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 18,
              }}
            >
              <Text
                style={{
                  fontWeight: "500",
                  fontSize: 16,
                }}
              >
                Flight details
              </Text>
            </View>
            {/* ori - desti */}
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                marginTop: 24,
              }}
            >
              <Text
                style={{
                  color: "#005CFF",
                  fontSize: 16,
                  fontWeight: "500",
                  marginRight: 20,
                }}
              >
                ORI
              </Text>
              <Image
                source={require("../../../assets/logo/airplane.png")}
                style={{
                  width: 35,
                  height: 25,
                }}
              />
              <Text
                style={{
                  color: "#005CFF",
                  fontSize: 16,
                  fontWeight: "500",
                  marginLeft: 20,
                }}
              >
                DES
              </Text>
            </View>

            {/* N-S / DURATION / CLASS */}

            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                marginTop: 5,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "500",
                  marginRight: 5,
                }}
              >
                N-S |
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "500",
                  marginRight: 5,
                }}
              >
                DURATION
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "500",
                }}
              >
                | CLASS
              </Text>
            </View>

            {/* DTAILS */}
            <View
              style={{
                justifyContent: "space-around",
                flexDirection: "row",
                marginTop: 22,
              }}
            >
              {/* origin details */}
              <View
                style={{
                  flexDirection: "column",
                  marginLeft: 1,
                }}
              >
                <Text>ORI-CODE</Text>
                <Text
                  style={{ fontSize: 18, color: "#005CFF", fontWeight: "500" }}
                >
                  TIME
                </Text>
                <Text>DAY/YYYY</Text>
                <Text>ORI</Text>
                <Text>AIRPORT-NAME</Text>
                <Text>TERMINAL</Text>
              </View>

              {/* duration details */}
              <View
                style={{
                  justifyContent: "flex-start",
                  flexDirection: "column",
                }}
              >
                <Text>duration</Text>
                <Text> n-s</Text>
              </View>

              {/* destination Details */}
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "flex-end",
                  marginRight: 4,
                }}
              >
                <Text>DES-CODE</Text>
                <Text
                  style={{ fontSize: 18, color: "#005CFF", fontWeight: "500" }}
                >
                  TIME
                </Text>
                <Text>DAY/YYYY</Text>
                <Text>DEST-NAME</Text>
                <Text>AIRPORT-NAME</Text>
                <Text>TERMINAL</Text>
              </View>
            </View>

            {/* bag container */}

            <View
              elevation={10}
              style={{
                height: 91,
                marginLeft: 20,
                marginRight: 20,
                marginTop: 18,
                backgroundColor: "#fff",
                borderRadius: 20,
              }}
            >
              {/*  details check-in bags */}
              <View
                //elevation={5}
                style={{
                  flexDirection: "row",
                  //height: 26,
                  width: 280,
                  backgroundColor: "#fff",
                  //    justifyContent: "space-around",
                  alignItems: "center",
                  borderRadius: 20,
                  marginLeft: 10,
                  marginTop: 13,
                }}
              >
                <Image
                  source={require("../../../assets/logo/airplane.png")}
                  style={{
                    width: 16,
                    height: 11,
                    marginLeft: 5,
                  }}
                />
                <Text
                  style={{ fontSize: 12, fontWeight: "500", marginLeft: 10 }}
                >
                  Cabin Bag
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "500",
                    color: "#005CFF",
                    marginRight: 5,
                    marginLeft: 42,
                  }}
                >
                  7 Kg
                </Text>
              </View>
              {/*  details check-in bags */}
              <View
                //elevation={5}
                style={{
                  flexDirection: "row",
                  //  height: 26,
                  width: 280,
                  backgroundColor: "#fff",
                  //    justifyContent: "space-around",
                  alignItems: "center",
                  borderRadius: 20,
                  marginLeft: 10,
                  marginTop: 10,
                }}
              >
                <Image
                  source={require("../../../assets/logo/airplane.png")}
                  style={{
                    width: 16,
                    height: 11,
                    marginLeft: 5,
                  }}
                />
                <Text
                  style={{ fontSize: 12, fontWeight: "500", marginLeft: 10 }}
                >
                  Check-In Bags
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "500",
                    color: "#005CFF",
                    marginRight: 5,
                    marginLeft: 42,
                  }}
                >
                  15 Kg
                </Text>
              </View>

              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "500",
                  color: "#005CFF",
                  marginTop: 10,
                  marginLeft: 15,
                }}
              >
                Baggage & Cancellation Policy
              </Text>
            </View>

            {/* promo offer container */}

            <View
              elevation={10}
              style={{
                height: 91,
                marginLeft: 20,
                marginRight: 20,
                marginTop: 18,
                backgroundColor: "#fff",
                borderRadius: 20,
              }}
            >
              <View style={{ flexDirection: "row" }}></View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default PassengerFlightDetails;

const style = StyleSheet.create({});
