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
  ToastAndroid,
  ScrollView,
  Button,
} from 'react-native';
import axios from 'axios';
import Header from '../../component/header';
const {width, height} = Dimensions.get('window');

let DetailCard = function (props) {
  return (
    <View
      elevation={6}
      style={{
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 8,
        padding: 6,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{width: 25, height: 25, margin: 4}}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={require('../../../assets/logo/dot.png')}
          />
        </View>
        <View style={{margin: 4}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '500',
              color: '#000000',
            }}>
            Standard Room
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            width: '50%',
            marginLeft: 10,
            padding: 4,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
              color: '#000000',
            }}>{`\u25CF ${'mkalskdamlksdmlaksmd'}`}</Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
              color: '#000000',
            }}>{`\u25CF ${'mkalskdamlksdmlaksmd'}`}</Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
              color: '#000000',
            }}>{`\u25CF ${'mkalskdamlksdmlaksmd'}`}</Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
              color: '#000000',
            }}>{`\u25CF ${'mkalskdamlksdmlaksmd'}`}</Text>
        </View>
        <View
          style={{
            width: '40%',
            alignItems: 'flex-end',
          }}>
          <Text
            style={{
              fontSize: 15,
              color: '#666666',
              textDecorationLine: 'line-through',
            }}>
            ₹1240
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: '#006fff',
              fontWeight: '700',
            }}>
            ₹5,237
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: '#666666',
              fontWeight: '700',
            }}
            numberOfLines={2}>
            +1132 Taxes & serVice fees Per Night
          </Text>
        </View>
      </View>
    </View>
  );
};

const SelectRoom = function ({navigation, route}) {
  const PayLoad = {
    ResultIndex: '12',
    HotelCode: '901764',
    EndUserIp: '103.154.247.253',
    TokenId: 'c3957b8a-0030-41f0-b7ab-d2b4107ae8ca',
    TraceId: '2e455223-456d-4a30-9460-11299a7bf69e',
  };
  // const PayLoad = route.params.payLoad;
  console.log(PayLoad);
  console.log('Select Room PayLoad');
  const {ResultIndex, HotelCode, TokenId, TraceId, EndUserIp} = PayLoad;

  const [printData, setPrintData] = React.useState();
  console.log(PayLoad);
  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios({
          method: 'post',
          url: 'https://api.travvolt.com/travvolt/hotel/room',
          data: {
            ResultIndex,
            HotelCode,
            EndUserIp,
            TokenId,
            TraceId,
          },
          config: {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        });
        console.log(response.data.data.GetHotelRoomResult);
        console.log('HotelRoomsDetails Response');
        // // console.log(response.data.HotelInfoResult.TraceId);
        // // console.log('SelectHotel Detail Page TraceId');
        // // console.log(response.data.HotelInfoResult.HotelDetails.HotelName);
        // // console.log('SelectHotel Detail Page HotelName');

        // const responseData = response.data.data.HotelInfoResult.HotelDetails;
        // const description =
        //   response.data.data.HotelInfoResult.HotelDetails.Description;

        // var convertDescription = description.replace(/<[^>]+>/g, '');
        // const representData = {
        //   Image: responseData.Images,
        //   HotelName: responseData.HotelName,
        //   Description: convertDescription,
        //   CountryName: responseData.CountryName,
        //   Address: responseData.Address,
        //   HotelContactNo: responseData.HotelContactNo,
        //   FaxNumber: responseData.FaxNumber,
        //   StarRating: responseData.StarRating,
        //   HotelFacilities: responseData.HotelFacilities,
        //   location: {
        //     Latitude: responseData.Latitude,
        //     Longitude: responseData.Longitude,
        //   },
        // };

        // const updatedData = {...printData, ...representData};
        // setPrintData(updatedData);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [EndUserIp, HotelCode, ResultIndex, TokenId, TraceId, printData]);
  return (
    <View
      style={{
        height: height,
        width: width,
        backgroundColor: '#ffff',
      }}>
      <Header onPress={() => navigation.goBack()} headerLabel={'Select Room'} />

      <View style={{height: '85%', width: width}}>
        <ScrollView
          style={{
            height: '100%',
            flex: 1,
          }}>
          <View>
            <View style={styles.coverPicBox}>
              <Image
                style={styles.coverPic}
                source={require('../../../assets/image/sld3.png')}
              />
            </View>
            <View style={styles.textBox}>
              <Text style={{fontSize: 24, fontWeight: '800', color: '#000000'}}>
                Hotel Data
              </Text>
              <Text style={{fontSize: 17, fontWeight: '900', color: '#006fff'}}>
                Details
              </Text>
            </View>
            <View
              elevation={7}
              style={{
                marginHorizontal: 8,
                borderRadius: 6,
                padding: 4,
                justifyContent: 'center',
                backgroundColor: '#fff',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 17, fontWeight: '700', color: '#006fff'}}>
                Breakfast & Lunch / Dinner Included
              </Text>
            </View>
            <View
              style={{
                margin: 4,
                padding: 4,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 14, fontWeight: '500', color: '#00000'}}>
                Executive Room Free Wifi - Welcome Drink on Arrival Juice or
                Butter Milk (2 Aduits)
              </Text>
            </View>
            <View>
              <DetailCard />
              <DetailCard />
              <DetailCard />
              <DetailCard />
            </View>
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          position: 'relative',
          bottom: -6,
          width: '100%',
          height: 50,
          backgroundColor: '#fffff',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 6,
        }}>
        <View style={{padding: 4, paddingTop: 2}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View>
              <Text style={{fontSize: 26, color: '#ff8900', fontWeight: 900}}>
                ₹2343
              </Text>
            </View>
            <View style={{marginLeft: 4, flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 20,
                  textDecorationLine: 'line-through',
                  color: '#666666',
                  fontWeight: 500,
                }}>
                ₹4543
              </Text>
              <Text
                style={{
                  marginLeft: 2,
                  fontSize: 20,
                  color: '#666666',
                  fontWeight: 500,
                }}>
                Per Night
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                fontSize: 15,
                color: '#666666',
                fontWeight: 500,
              }}>
              +565 Taxes & Fees
            </Text>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            padding: 8,
            margin: 4,
            backgroundColor: '#006fff',
            height: 42,
            borderRadius: 18,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ReviewBooking')}>
            <Text style={{fontSize: 20, fontWeight: '500', color: '#ffff'}}>
              Select Room
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  coverPicBox: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6,
    marginTop: 4,
  },
  coverPic: {
    borderWidth: 1,
    width: '100%',
    height: '100%',
  },
  textBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // justifyContent: 'center',
    padding: 8,
  },
});
export default SelectRoom;
