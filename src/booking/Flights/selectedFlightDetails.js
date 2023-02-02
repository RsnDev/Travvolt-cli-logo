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
  Button,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

//import retrieveToken from '../../screens/Main_Home_Screens/home';
const {width, height} = Dimensions.get('window');

const SelectedFlightDetails = ({navigation, route}) => {
  //  const [data, setData] = useState(null);
  const ResultIndex = route?.params?.ResultIndex;
  //console.log(ResultIndex);
  const [responseData, setResponseData] = useState(null);

  // AsyncStorage.getItem('token', token => {
  //   console.log(token);
  // });

  // useEffect(() => {
  //   const requestBody = {
  //     EndUserIp: '103.154.247.217',
  //     TokenId: '4fdb791a-c320-4569-95f2-8e2eaa5eef6d',
  //     TraceId: 'b6741e50-d925-497c-88aa-f6c3f9ddd5c5',
  //     ResultIndex: 'OB1',
  //   };
  //   axios
  //     .post('https://api.travvolt.com/travvolt/flight/farequote', requestBody)
  //     .then(res => {
  //       //console.log(response.data.data.Response.Results);
  //       const response = res?.data.data.Response.Results;
  //       // console.log('resss', response);
  //       const response2 = response?.Segments;
  //       console.log('resss', response2);
  //     })
  //     .catch(error => console.log(error));
  // }, []);

  useEffect(() => {
    const requestBody = {
      EndUserIp: '116.206.156.58',
      TokenId: 'e064d5cf-02fe-4be1-b87c-54ace2f27a0f',
      TraceId: '014ab14f-0a83-4d36-951a-b06e0ec29f24',
      ResultIndex: 'OB1',
    };
    axios
      .post('https://api.travvolt.com/travvolt/flight/farequote', requestBody)
      .then(res => {
        //console.log(response.data.data.Response.Results);
        const response = res?.data.data.Response.Results;
        // console.log('resss', response);
        const response2 = response?.Segments;
        setResponseData(response2);
      })
      .catch(error => console.log(error));
  }, []);

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
          {/* header */}
          <View
            style={{
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              // onPress={() => navigation.navigate("OneWayFlight")}
              //onPress={() => navigation.navigate("SearchFlights")}
              onPress={() => navigation.goBack()}>
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
            {responseData?.map(data1 => {
              return data1?.map(data2 => {
                return (
                  <View>
                    <Text
                      style={{
                        marginTop: 40,
                        marginLeft: 20,
                        color: '#fff',
                      }}>
                      {data2?.Origin?.Airport?.AirportCode}
                    </Text>
                  </View>
                );
              });
            })}
          </View>

          {/* details */}
          <View
            style={{
              marginTop: 20,
              flex: 1,
              height: height,
              width: width,
              backgroundColor: '#EFF5FF',
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
            }}>
            {/* title */}
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 18,
              }}>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 16,
                }}>
                Flight details
              </Text>
            </View>
            {/* ori - desti */}
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: 24,
              }}>
              <Text
                style={{
                  color: '#005CFF',
                  fontSize: 16,
                  fontWeight: '500',
                  marginRight: 20,
                }}>
                {/* {data?.Segments.map((data) => {
                  console.log("Data", data);
                  //  return data.name;
                })} */}
              </Text>
              <Image
                source={require('../../../assets/logo/airplane.png')}
                style={{
                  width: 35,
                  height: 25,
                }}
              />
              <Text
                style={{
                  color: '#005CFF',
                  fontSize: 16,
                  fontWeight: '500',
                  marginLeft: 20,
                }}>
                DES
              </Text>
            </View>

            {/* N-S / DURATION / CLASS */}

            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: 5,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '500',
                  marginRight: 5,
                }}>
                N-S |
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '500',
                  marginRight: 5,
                }}>
                DURATION
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '500',
                }}>
                | CLASS
              </Text>
            </View>

            {/* DTAILS */}
            <View
              style={{
                justifyContent: 'space-around',
                flexDirection: 'row',
                marginTop: 22,
              }}>
              {/* origin details */}
              <View
                style={{
                  flexDirection: 'column',
                  marginLeft: 1,
                }}>
                <Text>ORI-CODE</Text>
                <Text
                  style={{fontSize: 18, color: '#005CFF', fontWeight: '500'}}>
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
                  justifyContent: 'flex-start',
                  flexDirection: 'column',
                }}>
                <Text>duration</Text>
                <Text> n-s</Text>
              </View>

              {/* destination Details */}
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  marginRight: 4,
                }}>
                <Text>DES-CODE</Text>
                <Text
                  style={{fontSize: 18, color: '#005CFF', fontWeight: '500'}}>
                  TIME
                </Text>
                <Text>DAY/YYYY</Text>
                <Text>DEST-NAME</Text>
                <Text>AIRPORT-NAME</Text>
                <Text>TERMINAL</Text>
              </View>
            </View>

            {/* container */}

            <View
              elevation={10}
              style={{
                height: 273,
                // width:327,
                marginLeft: 20,
                marginRight: 20,
                marginTop: 18,
                backgroundColor: '#fff',
                borderRadius: 20,
              }}>
              {/* categories heading */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginTop: 14,
                }}>
                <Image
                  source={require('../../../assets/logo/airplane.png')}
                  style={{
                    width: 18,
                    height: 18,
                  }}
                />
                <Text style={{fontWeight: '500', fontSize: 16}}>
                  Flexi plus
                </Text>
                <Text
                  style={{color: '#FF951A', fontWeight: '500', fontSize: 16}}>
                  ₹ price
                </Text>
              </View>
              {/* cabin bag */}
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View
                  elevation={5}
                  style={{
                    flexDirection: 'row',
                    height: 26,
                    width: 140,
                    backgroundColor: '#DAF2FC',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    borderRadius: 20,
                    margin: 10,
                  }}>
                  <Image
                    source={require('../../../assets/logo/airplane.png')}
                    style={{
                      width: 16,
                      height: 11,
                      marginLeft: 5,
                    }}
                  />
                  <Text style={{fontSize: 11, fontWeight: '500'}}>
                    Cabin Bags
                  </Text>
                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: '500',
                      color: '#005CFF',
                    }}>
                    ?kg
                  </Text>
                </View>
                <View
                  elevation={5}
                  style={{
                    flexDirection: 'row',
                    height: 26,
                    width: 139,
                    backgroundColor: '#DAF2FC',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    borderRadius: 20,
                    margin: 10,
                  }}>
                  <Image
                    source={require('../../../assets/logo/airplane.png')}
                    style={{
                      width: 16,
                      height: 11,
                    }}
                  />
                  <Text style={{fontSize: 11, fontWeight: '500'}}>
                    Check-In Bags
                  </Text>
                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: '500',
                      color: '#005CFF',
                    }}>
                    ?kg
                  </Text>
                </View>
              </View>
              {/* cancellation */}
              <View
                elevation={5}
                style={{
                  flexDirection: 'row',
                  height: 26,
                  width: 280,
                  backgroundColor: '#DAF2FC',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  borderRadius: 20,
                  marginLeft: 10,
                }}>
                <Image
                  source={require('../../../assets/logo/airplane.png')}
                  style={{
                    width: 16,
                    height: 11,
                    marginLeft: 5,
                  }}
                />
                <Text style={{fontSize: 11, fontWeight: '500'}}>
                  Cancellation
                </Text>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: '500',
                    color: '#005CFF',
                    marginRight: 5,
                  }}>
                  Cancellation Fee Starting $300
                </Text>
              </View>
              {/* date change */}
              <View
                elevation={5}
                style={{
                  flexDirection: 'row',
                  height: 26,
                  width: 288,
                  backgroundColor: '#DAF2FC',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  borderRadius: 20,
                  marginLeft: 10,
                  marginTop: 10,
                }}>
                <Image
                  source={require('../../../assets/logo/airplane.png')}
                  style={{
                    width: 16,
                    height: 11,
                    marginLeft: 5,
                  }}
                />
                <Text style={{fontSize: 11, fontWeight: '500'}}>
                  Date Change
                </Text>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: '500',
                    color: '#005CFF',
                    marginRight: 5,
                  }}>
                  Cancellation Fee Starting $250
                </Text>
              </View>
              {/* seat */}
              <View
                elevation={5}
                style={{
                  flexDirection: 'row',
                  height: 26,
                  width: 188,
                  backgroundColor: '#DAF2FC',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  borderRadius: 20,
                  marginLeft: 10,
                  marginTop: 10,
                }}>
                <Image
                  source={require('../../../assets/logo/airplane.png')}
                  style={{
                    width: 16,
                    height: 11,
                    marginLeft: 5,
                  }}
                />
                <Text style={{fontSize: 11, fontWeight: '500'}}>Seat</Text>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: '500',
                    color: '#005CFF',
                    marginRight: 5,
                  }}>
                  Free Seat Available
                </Text>
              </View>
              {/* meal */}
              <View
                elevation={5}
                style={{
                  flexDirection: 'row',
                  height: 26,
                  width: 216,
                  backgroundColor: '#DAF2FC',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  borderRadius: 20,
                  marginLeft: 10,
                  marginTop: 10,
                }}>
                <Image
                  source={require('../../../assets/logo/airplane.png')}
                  style={{
                    width: 16,
                    height: 11,
                    marginLeft: 5,
                  }}
                />
                <Text style={{fontSize: 11, fontWeight: '500'}}>Meal</Text>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: '500',
                    color: '#005CFF',
                    marginRight: 5,
                  }}>
                  Get Complimentary Meals
                </Text>
              </View>

              {/* button */}
              <View style={{alignItems: 'center', marginTop: 15}}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('PassengerFlightDetails')}>
                  <View
                    style={{
                      width: 140,
                      height: 24,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: '#006FFF',
                      borderRadius: 30,
                    }}>
                    <Text
                      style={{fontSize: 11, color: '#fff', fontWeight: '500'}}>
                      Book Now
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default SelectedFlightDetails;

const style = StyleSheet.create({});
