/* eslint-disable react-native/no-inline-styles */
import React from 'react';
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
  SafeAreaView,
  Modal,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
const {width, height} = Dimensions.get('window');

const ResultHolidayPackages = function ({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/image/bg.jpg')}
        style={{height: height, width: width}}
        resizeMode="stretch">
        <ScrollView>
          {/* header */}
          <View
            style={{
              flexDirection: 'row',
            }}>
            {/* <TouchableOpacity onPress={() => navigation.navigate("Holder")}> */}
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require('../../../assets/logo/back.png')}
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
                color: '#fff',
                marginTop: 35,
                marginLeft: 16,
                fontSize: 20,
                fontWeight: '500',
              }}>
              From {'>'} To
            </Text>
          </View>
          <View
            elevation={7}
            style={{
              backgroundColor: '#ffffff',
              margin: 6,
              borderRadius: 4,
              padding: 6,
            }}>
            <Text style={{fontSize: 20, fontWeight: 700, color: '#000000'}}>
              Our Bestseller Line-up for Goa!
            </Text>
            <Text style={{fontSize: 12, fontWeight: 500, color: '#000000'}}>
              Enjoy on the fantastic beaches of Goa with our handpicked
              Bestseller
            </Text>
            <ScrollView horizontal={true}>
              <View
                elevation={7}
                style={{
                  width: 250,
                  backgroundColor: 'white',
                  margin: 6,
                  borderRadius: 6,
                  padding: 6,
                }}>
                <Image
                  style={{width: '100%', height: 125, borderRadius: 6}}
                  source={require('../../../assets/image/sld3.png')}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                      style={{width: 23, height: 23, borderRadius: 6}}
                      source={require('../../../assets/icon/planeIcon.png')}
                    />
                    <Text style={{fontWeight: 600}}>Flight</Text>
                  </View>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                      style={{width: 23, height: 23, borderRadius: 6}}
                      source={require('../../../assets/icon/planeIcon.png')}
                    />
                    <Text style={{fontWeight: 600}}>Activity</Text>
                  </View>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                      style={{width: 23, height: 23, borderRadius: 6}}
                      source={require('../../../assets/icon/planeIcon.png')}
                    />
                    <Text style={{fontWeight: 600}}>Transfer</Text>
                  </View>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                      style={{width: 23, height: 23, borderRadius: 6}}
                      source={require('../../../assets/icon/planeIcon.png')}
                    />
                    <Text style={{fontWeight: 600}}>Transfer</Text>
                  </View>
                </View>
                <View
                  style={{
                    borderWidth: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View style={{width: '70%'}}>
                    <Text style={{fontWeight: 700}}>
                      Amazing Goa Flight Inclusive deal 3N
                    </Text>
                  </View>
                  <View style={{borderWidth: 1, justifyContent: 'flex-end'}}>
                    <Text
                      style={{
                        color: '#707070',
                        fontSize: 14,
                        fontWeight: 700,
                      }}>
                      ₹32,645
                    </Text>
                    <Text
                      style={{color: '#006fff', fontSize: 18, fontWeight: 700}}>
                      ₹24,521
                    </Text>
                    <Text
                      style={{color: '#707070', fontSize: 14, fontWeight: 700}}>
                      Per Person
                    </Text>
                  </View>
                </View>
              </View>
              <View
                elevation={7}
                style={{
                  backgroundColor: 'white',
                  margin: 6,
                  borderRadius: 4,
                  padding: 6,
                }}>
                <Text>Our Bestseller </Text>
              </View>
              <View
                elevation={7}
                style={{
                  backgroundColor: 'white',
                  margin: 6,
                  borderRadius: 4,
                  padding: 6,
                }}>
                <Text>Our Bestseller </Text>
              </View>
              <View
                elevation={7}
                style={{
                  backgroundColor: 'white',
                  margin: 6,
                  borderRadius: 4,
                  padding: 6,
                }}>
                <Text>Our Bestseller </Text>
              </View>
              <View
                elevation={7}
                style={{
                  backgroundColor: 'white',
                  margin: 6,
                  borderRadius: 4,
                  padding: 6,
                }}>
                <Text>Our Bestseller </Text>
              </View>
              <View
                elevation={7}
                style={{
                  backgroundColor: 'white',
                  margin: 6,
                  borderRadius: 4,
                  padding: 6,
                }}>
                <Text>Our Bestseller </Text>
              </View>
              <View
                elevation={7}
                style={{
                  backgroundColor: 'white',
                  margin: 6,
                  borderRadius: 4,
                  padding: 6,
                }}>
                <Text>Our Bestseller </Text>
              </View>
              <View
                elevation={7}
                style={{
                  backgroundColor: 'white',
                  margin: 6,
                  borderRadius: 4,
                  padding: 6,
                }}>
                <Text>Our Bestseller </Text>
              </View>
              <View
                elevation={7}
                style={{
                  backgroundColor: 'white',
                  margin: 6,
                  borderRadius: 4,
                  padding: 6,
                }}>
                <Text>Our Bestseller </Text>
              </View>
              <View
                elevation={7}
                style={{
                  backgroundColor: 'white',
                  margin: 6,
                  borderRadius: 4,
                  padding: 6,
                }}>
                <Text>Our Bestseller </Text>
              </View>
              <View
                elevation={7}
                style={{
                  backgroundColor: 'white',
                  margin: 6,
                  borderRadius: 4,
                  padding: 6,
                }}>
                <Text>Our Bestseller </Text>
              </View>
              <View
                elevation={7}
                style={{
                  backgroundColor: 'white',
                  margin: 6,
                  borderRadius: 4,
                  padding: 6,
                }}>
                <Text>Our Bestseller </Text>
              </View>
              <View
                elevation={7}
                style={{
                  backgroundColor: 'white',
                  margin: 6,
                  borderRadius: 4,
                  padding: 6,
                }}>
                <Text>Our Bestseller </Text>
              </View>
              <View
                elevation={7}
                style={{
                  backgroundColor: 'white',
                  margin: 6,
                  borderRadius: 4,
                  padding: 6,
                }}>
                <Text>Our Bestseller </Text>
              </View>
              <View
                elevation={7}
                style={{
                  backgroundColor: 'white',
                  margin: 6,
                  borderRadius: 4,
                  padding: 6,
                }}>
                <Text>Our Bestseller </Text>
              </View>
              <View
                elevation={7}
                style={{
                  backgroundColor: 'white',
                  margin: 6,
                  borderRadius: 4,
                  padding: 6,
                }}>
                <Text>Our Bestseller </Text>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: height,
    width: width,
    flex: 1,
  },
});
export default ResultHolidayPackages;
