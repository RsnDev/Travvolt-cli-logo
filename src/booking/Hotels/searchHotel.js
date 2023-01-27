import React, {useState, useEffect} from 'react';
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
} from 'react-native';
const {width, height} = Dimensions.get('window');

const SearchHotel = ({navigation, route}) => {
  const data = route?.params?.data;
  //const data2 = data.data;

  // console.log('=============', data2);

  return (
    <View
      style={{
        height: height,
        width: width,
      }}>
      <ImageBackground
        source={require('../../../assets/image/bg.jpg')}
        style={{height: height, width: width}}>
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
            }}>
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
                fontSize: 17,
                fontWeight: '500',
              }}>
              Destination
            </Text>
          </View>

          {/* Hotel details */}

          <TouchableOpacity>
            <View
              elevation={8}
              style={{
                backgroundColor: '#fff',
                borderRadius: 10,
                height: 315,
                //width: "100%",
                margin: 12,
                flexDirection: 'column',
              }}>
              <Image
                source={require('../../../assets/image/sld3.png')}
                style={{
                  width: '95%',
                  height: 142,
                  margin: 8,
                  borderRadius: 10,
                }}
              />

              <View
                style={{
                  flexDirection: 'row',
                  // justifyContent: 'space-around',
                }}>
                {/* column 1 for name address rating */}
                <View
                  style={{
                    flexDirection: 'column',
                    marginLeft: 13,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: 'black',
                    }}>
                    The Taj Hotel
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: '600',
                      color: 'black',
                    }}>
                    SuperTech Ecociti,Sector:75,{'\n'}Noida Uttar Pradesh
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../../../assets/logo/rate.png')}
                      style={{
                        width: 15,
                        height: 15,
                        borderRadius: 50,
                        marginTop: 5,
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 11,
                        fontWeight: '600',
                        color: '#006FFF',
                        marginLeft: 7,
                        marginTop: 5,
                      }}>
                      4.5/5
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../../../assets/logo/fre.png')}
                      style={{
                        width: 15,
                        height: 15,
                        borderRadius: 50,
                        marginTop: 5,
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 13,
                        fontWeight: '600',
                        color: '#FF8900',
                        marginLeft: 7,
                        marginTop: 3,
                      }}>
                      Free Cancellation Included
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../../../assets/logo/brkfst.png')}
                      style={{
                        width: 15,
                        height: 15,
                        borderRadius: 50,
                        marginTop: 5,
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 13,
                        fontWeight: '600',
                        color: '#FF8900',
                        marginLeft: 7,
                        marginTop: 3,
                      }}>
                      Free Breakfast Included
                    </Text>
                  </View>
                </View>
                {/* column 2 for discount tax & price */}
                <View
                  style={{
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                  }}>
                  <Text>50% OFF</Text>
                  <Text>₹ 6200</Text>
                  <Text>₹ 3100</Text>
                  <Text>
                    + ₹433 Taxes & Fees
                    {'\n'}
                    Per Night
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default SearchHotel;

const style = StyleSheet.create({
  container: {},
});
