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
import axios from 'axios';

import publicIP from 'react-native-public-ip';

const {width, height} = Dimensions.get('window');
// source={require('../../../assets/image/sld3.png')}

let HotelCard = function (props) {
  return (
    <View elevation={8} style={styles.card}>
      <TouchableOpacity onPress={() => props.moveDataToDetailPage()}>
        <View style={styles.cardImageBox}>
          <Image style={styles.image} source={{uri: props.imageCover}} />
        </View>
        <View
          style={{
            padding: 6,
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <View style={{width: '50%'}}>
            <Text style={styles.cardText} numberOfLines={1}>
              {props.hotelName}
            </Text>
            <Text style={styles.cardText} numberOfLines={1}>
              {props.hotelAddress}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                // justifyContent: 'center',
              }}>
              <View style={styles.cardIconBox}>
                <Image
                  style={styles.cardIcon}
                  source={require('../../../assets/logo/rate.png')}
                />
              </View>
              <Text style={styles.cardText} numberOfLines={1}>
                {props.StarRating}/5
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                // justifyContent: 'center',
              }}>
              <View style={styles.cardIconBox}>
                <Image
                  style={styles.cardIcon}
                  source={require('../../../assets/logo/fre.png')}
                />
              </View>
              <Text style={styles.cardText} numberOfLines={1}>
                Free Cancellation Included
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                // justifyContent: 'center',
              }}>
              <View style={styles.cardIconBox}>
                <Image
                  style={styles.cardIcon}
                  source={require('../../../assets/logo/brkfst.png')}
                />
              </View>
              <Text style={styles.cardText} numberOfLines={1}>
                Free Breakfast Included
              </Text>
            </View>
          </View>
          <View style={{width: '40%', alignItems: 'flex-end'}}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: 'red',
              }}
              numberOfLines={1}>
              {props.discount}%OFF
            </Text>
            <Text style={styles.cardText} numberOfLines={1}>
              ₹{props.publishedPriceRoundedOff}
            </Text>
            <Text
              style={{fontSize: 20, fontWeight: 'bold', color: '#e5de00'}}
              // numberOfLines={2}
            >
              ₹{props.roomPrice}
            </Text>
            <Text style={styles.cardText} numberOfLines={2}>
              ₹{props.taxableAmount} Taxes & Fees Per Night
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const SearchHotel = ({navigation, route}) => {
  const [ip, setIp] = useState('');
  // const paramsData = route.params;
  // const data = paramsData.data ? paramsData.data : [];
  // const representData = data.HotelResults;
  // const hotelPriceData = representData.Price;
  // const hotelPriceDetailPass = {
  //   CurrencyCode: hotelPriceData.CurrencyCode,
  //   RoomPrice: hotelPriceData.RoomPrice,
  //   Discount: hotelPriceData.Discount,
  //   PublishedPriceRoundedOff: hotelPriceData.PublishedPriceRoundedOff,
  //   GST: {
  //     TaxableAmount: hotelPriceData.GST.TaxableAmount,
  //   },
  // };
  const hotelPriceDetail = {
    CurrencyCode: 'INR',
    RoomPrice: 1006.18,
    Discount: 0,
    PublishedPriceRoundedOff: 1542,
    GST: {
      TaxableAmount: 200.92,
    },
  };
  // console.log(data);
  console.log('Result Data');
  // const traceId = data.TraceId;
  // console.log(traceId);
  console.log('traceId');

  // const UserIp = paramsData.userIp;
  // console.log(UserIp + ' UserIp');
  // const tokenId = paramsData.tokenId ? paramsData.tokenId : null;
  // console.log(tokenId);
  console.log('tokenId');
  console.log('SEARCH HOTEL');
  let data = {
    ResponseStatus: 1,
    Error: {
      ErrorCode: 0,
      ErrorMessage: '',
    },
    TraceId: '2b3c0405-9f7e-4305-a798-e263cc1184f3',
    CityId: '130205',
    Remarks: 'india - land of mystries "//" "  /// "  ',
    CheckInDate: '2023-02-15',
    CheckOutDate: '2023-02-16',
    PreferredCurrency: 'INR',
    NoOfRooms: 1,
    RoomGuests: [
      {
        NoOfAdults: 1,
        NoOfChild: 0,
        ChildAge: null,
      },
    ],
    HotelResults: [
      {
        IsHotDeal: false,
        ResultIndex: 1,
        HotelCode: '1500369',
        HotelName: 'OYO Rooms Noida Sector 50 Block C',
        HotelCategory: '',
        StarRating: 3,
        HotelDescription:
          'Property Location With a stay at OYO Rooms Noida Sector 50 Block C in Noida, you&apos;ll be close to Nodia Golf Course and Great India Place.  This hotel is within the vicinity of Jamia Millia Islamia and Indraprashtha Apollo Hospital.Rooms Make yourself at home in one of the 15 air-conditioned rooms featuring flat-screen televisions. Complimentary wireless Internet access keeps you connected, and cable programming is available for your entertainment. Bathrooms have bathtubs or showers and complimentary toiletries. Conveniences include safes and desks, and housekeeping is provided daily.Dining Take advantage of the hotel&apos;s 24-hour room service.Business, Other Amenities Featured amenities include complimentary newspapers in the lobby, dry cleaning/laundry services, and a 24-hour front desk. Free self parking is available onsite. ',
        HotelPromotion: '',
        HotelPolicy: '',
        Price: {
          CurrencyCode: 'INR',
          RoomPrice: 1006.18,
          Tax: 0,
          ExtraGuestCharge: 0,
          ChildCharge: 0,
          OtherCharges: 200.92,
          Discount: 0,
          PublishedPrice: 1542.23,
          PublishedPriceRoundedOff: 1542,
          OfferedPrice: 1207.1,
          OfferedPriceRoundedOff: 1207,
          AgentCommission: 335.13,
          AgentMarkUp: 0,
          ServiceTax: 56.38,
          TCS: 0,
          TDS: 0,
          ServiceCharge: 0,
          TotalGSTAmount: 56.38,
          GST: {
            CGSTAmount: 0,
            CGSTRate: 0,
            CessAmount: 19.85,
            CessRate: 10,
            IGSTAmount: 36.53,
            IGSTRate: 18,
            SGSTAmount: 0,
            SGSTRate: 0,
            TaxableAmount: 200.92,
          },
        },
        HotelPicture:
          'https://api.tbotechnology.in/imageresource.aspx?img=k6DH+39xpEWJ6sshsBgEUY9oKBj/b6OqzQcmXbJdJ1Fw5DB1G7cMZ9usTTS1gIIQaHXwXSJrMFLqvtDx04cytMzBHqYPiPb2vCelv6T8EbCT4/+Txex0yg==',
        HotelAddress: 'C 74 Sector 50 Noida 201301, ',
        HotelContactNo: '',
        HotelMap: null,
        Latitude: '',
        Longitude: '',
        HotelLocation: null,
        SupplierPrice: null,
        RoomDetails: [],
      },
      {
        IsHotDeal: false,
        ResultIndex: 45,
        HotelCode: '1500369',
        HotelName: 'OYO Rooms Noida Sector 50 Block C',
        HotelCategory: '',
        StarRating: 3,
        HotelDescription:
          'Property Location With a stay at OYO Rooms Noida Sector 50 Block C in Noida, you&apos;ll be close to Nodia Golf Course and Great India Place.  This hotel is within the vicinity of Jamia Millia Islamia and Indraprashtha Apollo Hospital.Rooms Make yourself at home in one of the 15 air-conditioned rooms featuring flat-screen televisions. Complimentary wireless Internet access keeps you connected, and cable programming is available for your entertainment. Bathrooms have bathtubs or showers and complimentary toiletries. Conveniences include safes and desks, and housekeeping is provided daily.Dining Take advantage of the hotel&apos;s 24-hour room service.Business, Other Amenities Featured amenities include complimentary newspapers in the lobby, dry cleaning/laundry services, and a 24-hour front desk. Free self parking is available onsite. ',
        HotelPromotion: '',
        HotelPolicy: '',
        Price: {
          CurrencyCode: 'INR',
          RoomPrice: 1341.31,
          Tax: 0,
          ExtraGuestCharge: 0,
          ChildCharge: 0,
          OtherCharges: 200.92,
          Discount: 0,
          PublishedPrice: 1542.23,
          PublishedPriceRoundedOff: 1542,
          OfferedPrice: 1542.23,
          OfferedPriceRoundedOff: 1542,
          AgentCommission: 0,
          AgentMarkUp: 0,
          ServiceTax: 56.38,
          TCS: 0,
          TDS: 0,
          ServiceCharge: 0,
          TotalGSTAmount: 56.38,
          GST: {
            CGSTAmount: 0,
            CGSTRate: 0,
            CessAmount: 19.85,
            CessRate: 10,
            IGSTAmount: 36.53,
            IGSTRate: 18,
            SGSTAmount: 0,
            SGSTRate: 0,
            TaxableAmount: 200.92,
          },
        },
        HotelPicture:
          'https://api.tbotechnology.in/imageresource.aspx?img=k6DH+39xpEWJ6sshsBgEUY9oKBj/b6OqzQcmXbJdJ1Fw5DB1G7cMZ9usTTS1gIIQaHXwXSJrMFLqvtDx04cytMzBHqYPiPb2vCelv6T8EbCT4/+Txex0yg==',
        HotelAddress: 'C 74 Sector 50 Noida 201301, ',
        HotelContactNo: '',
        HotelMap: null,
        Latitude: '',
        Longitude: '',
        HotelLocation: null,
        SupplierPrice: null,
        RoomDetails: [],
      },
    ],
  };

  const moveDataToDetailPage = function (resultIndex, hotelCode) {
    // const payLoad = {
    //   ResultIndex: resultIndex,
    //   HotelCode: hotelCode,
    //   EndUserId: UserIp,
    //   TokenId: tokenId,
    //   TraceId: traceId,
    // };
    const payLoad = {
      ResultIndex: '1',
      HotelCode: '1500369',
      EndUserIp: '103.154.247.253',
      TokenId: '102a9fff-e8db-412d-b77a-110d6a91ad39',
      TraceId: '83f3fc06-68ac-4243-940c-373d4a9174f3',
    };
    return navigation.navigate('SelectedHotelDetails', {
      payLoad: payLoad,
      // hotelPriceDetail:hotelPriceDetailPass
      hotelPriceDetail: hotelPriceDetail,
    });
  };

  // useEffect(() => {
  //   publicIP()
  //     .then(ip => {
  //       //     console.log(ip);
  //       setIp(ip);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <View
      style={{
        height: height,
        width: width,
        justifyContent: 'center',
      }}>
      <ImageBackground
        source={require('../../../assets/image/bg.jpg')}
        style={{
          height: height,
          width: width,
        }}>
        <ScrollView>
          {/* "Header" */}
          <View style={{borderColor: 'red', borderWidth: 1}}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 8,
                }}>
                <View style={{width: 25, height: 25}}>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                      source={require('../../../assets/logo/back.png')}
                      style={{
                        width: 25,
                        height: 25,
                        marginHorizontal: 6,
                        paddingHorizontal: 6,
                      }}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <Text
                    style={{
                      color: '#fff',
                      margin: 6,
                      padding: 6,
                      marginLeft: 10,
                      fontSize: 20,
                      fontWeight: '700',
                    }}>
                    Destination
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                width: width,
                alignItems: 'center',
              }}>
              {data &&
                data.HotelResults &&
                data.HotelResults.map((val, index) => {
                  return (
                    <HotelCard
                      key={index}
                      moveDataToDetailPage={() =>
                        moveDataToDetailPage(val.ResultIndex, val.HotelCode)
                      }
                      imageCover={
                        val.HotelPicture
                          ? val.HotelPicture
                          : 'https://unsplash.com/photos/n_IKQDCyrG0='
                      }
                      hotelName={val.HotelName ? val.HotelName : 'HotelName'}
                      hotelAddress={
                        val.HotelAddress ? val.HotelAddress : 'HotelAddress'
                      }
                      StarRating={val.StarRating ? val.StarRating : 0}
                      discount={
                        val.Price && val.Price.Discount ? val.Price.Discount : 0
                      }
                      publishedPriceRoundedOff={
                        val.Price && val.Price.PublishedPriceRoundedOff
                          ? val.Price.PublishedPriceRoundedOff
                          : null
                      }
                      roomPrice={
                        val.Price && val.Price.RoomPrice
                          ? val.Price.RoomPrice
                          : 'room price'
                      }
                      taxableAmount={
                        val.Price &&
                        val.Price.GST &&
                        val.Price.GST.TaxableAmount
                          ? val.Price.GST.TaxableAmount
                          : null
                      }
                    />
                  );
                })}
            </View>
          </View>

          {/* Hotel details */}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default SearchHotel;

const styles = StyleSheet.create({
  card: {
    margin: 8,
    width: '90%',
    padding: 6,
    borderRadius: 8,
    backgroundColor: '#ffff',
  },
  cardImageBox: {
    width: '100%',
    height: 142,
    borderRadius: 8,
  },
  image: {width: '100%', height: '100%', borderRadius: 8},
  cardIconBox: {
    width: 15,
    margin: 4,
    marginRight: 6,
    height: 15,
    marginLeft: 0,
  },
  cardIcon: {
    width: '100%',
    height: '100%',
  },
  cardText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
  },
});
