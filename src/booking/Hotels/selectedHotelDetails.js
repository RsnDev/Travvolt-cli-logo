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
import HTML from 'react-native-render-html';
import Footer from '../../component/hotelfooter';
const {width, height} = Dimensions.get('window');

const InfoBox = function (props) {
  return (
    <View style={styles.infoBox}>
      <View
        style={{
          width: 20,
          height: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image style={{width: 20, height: 20}} source={props.image} />
      </View>
      <Text style={{fontSize: 17, fontWeight: '600', padding: 4}}>
        {props.label} : {props.value}
      </Text>
    </View>
  );
};

const SelectedHotelDetails = ({navigation, route}) => {
  // const data = route.params && route.params.data ? route.params.data : [];
  // let [printData.setPrintData]=React.useState({})
  const PayLoad = route.params.payLoad;
  const hotelPriceDetail = route.params.hotelPriceDetail;
  let [printData, setPrintData] = React.useState(hotelPriceDetail);

  console.log(hotelPriceDetail);
  console.log('hotelPriceDetail');
  const source = {
    html: `
    <ul>
        <li onclick="showDetails(this)" id="gitanjali"
                data-book-author="Rabindra Nath Tagore">
            Gitanjali
        </li>
         
        <li onclick="showDetails(this)" id="conquest_of_self"
                data-book-author="Mahatma Gandhi">
            Conquest of Self
        </li>
        
        <li onclick="showDetails(this)" id="broken_wings"
                data-book-author="Sarojini Naidu">
            Broken Wings
        </li>
    </ul>`,
  };

  React.useEffect(() => {
    const getData = async function () {
      try {
        axios({
          method: 'post',
          url: 'https://api.travvolt.com/travvolt/hotel/searchinfo',
          data: PayLoad,
          config: {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        }).then(res => {
          const response1 = res?.data;
          const response2 = response1?.data?.HotelInfoResult?.HotelDetails;
          // hotelFullDetails = response2;
          console.log('HotelSearchResult');
          console.log(response2);
          //representData
          const cloneDec = response2.Description;
          const updateDec = cloneDec.replace(/<[^>]+>/g, '');
          console.log(updateDec);
          console.log('Description');
          const representData = {
            Image: response2.Images,
            HotelName: response2.HotelName,
            CountryName: response2.CountryName,
            Address: response2.Address,
            HotelContactNo: response2.HotelContactNo,
            FaxNumber: response2.FaxNumber,
            StarRating: response2.StarRating,
            HotelFacilities: response2.HotelFacilities,
            Description: updateDec,
            location: {
              Latitude: response2.Latitude,
              Longitude: response2.Longitude,
            },
          };
          console.log(representData);
          console.log('representData');
          const cloneObject = {...printData, ...representData};
          console.log(cloneObject);
          console.log('cloneObject');

          setPrintData(cloneObject);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    // const data = && route.params.data ? route.params.data : [];
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
        <ScrollView style={{flex: 1, borderWidth: 1, borderColor: 'red'}}>
          {/* header */}
          <View>
            <TouchableOpacity
              style={{
                padding: 4,
                width: '100%',
                justifyContent: 'center',
              }}
              onPress={() => navigation.goBack()}>
              <Image
                source={require('../../../assets/logo/back.png')}
                style={{
                  width: 25,
                  height: 25,
                  marginLeft: 14,
                }}
              />
            </TouchableOpacity>
          </View>
          <View>
            <View>
              <View style={styles.coverPicBox}>
                <Image
                  style={styles.coverPic}
                  source={require('../../../assets/image/sld3.png')}
                />
              </View>
              <View style={styles.textBox}>
                <Text style={{fontSize: 23, fontWeight: '900'}}>
                  {printData && printData.HotelName
                    ? printData.HotelName
                    : 'Hotel Data'}
                </Text>
                <Text style={{fontSize: 17, fontWeight: '900', color: 'red'}}>
                  {printData && printData.Discount ? printData.Discount : 0}%
                  OFF{/* Discount */}
                </Text>
              </View>

              <View elevation={5} style={styles.info}>
                <Text style={{fontSize: 20, fontWeight: '900', padding: 4}}>
                  Contact
                </Text>
                <InfoBox
                  image={require('../../../assets/icon/country.png')}
                  label={'Country'}
                  value={
                    printData && printData.CountryName
                      ? printData.CountryName
                      : null
                  }
                />
                <InfoBox
                  image={require('../../../assets/icon/location.png')}
                  label={'Address'}
                  value={
                    printData && printData.Address ? printData.Address : null
                  }
                />
                <InfoBox
                  image={require('../../../assets/icon/location.png')}
                  label={'Hotel Contact'}
                  value={
                    printData && printData.HotelContactNo
                      ? printData.HotelContactNo
                      : null
                  }
                />
                <InfoBox
                  image={require('../../../assets/icon/fax.png')}
                  label={'Fax Number'}
                  value={
                    printData && printData.FaxNumber
                      ? printData.FaxNumber
                      : null
                  }
                />
              </View>
              <View style={styles.info}>
                <Text style={{fontSize: 17, fontWeight: '900', padding: 4}}>
                  Rating :{' '}
                  {printData && printData.StarRating ? printData.StarRating : 0}
                  /5
                </Text>
                <Text style={{fontSize: 20, fontWeight: '900', padding: 4}}>
                  Location
                </Text>
                <Text style={{fontSize: 20, fontWeight: '900', padding: 4}}>
                  Facilities
                </Text>
                {/* <Text style={{fontSize: 15, fontWeight: '900', padding: 4}}> */}
                {printData && printData.HotelFacilities ? (
                  printData.HotelFacilities.map((val, index) => {
                    return (
                      <Text
                        style={{fontSize: 15, fontWeight: '900', padding: 4}}>
                        {`\u25CF ${val}`}
                      </Text>
                    );
                  })
                ) : (
                  <Text>Data is Loading</Text>
                )}
                <Text style={{fontSize: 20, fontWeight: '900', padding: 4}}>
                  Description
                </Text>
                <Text style={{fontSize: 15, fontWeight: '900', padding: 4}}>
                  {printData && printData.Description
                    ? printData.Description
                    : 'Description is loding'}
                </Text>
              </View>
            </View>
          </View>
          {/* <Footer /> */}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default SelectedHotelDetails;

const styles = StyleSheet.create({
  coverPicBox: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6,
    marginTop: 4,
  },
  coverPic: {width: '100%', height: '100%'},
  textBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // justifyContent: 'center',
    padding: 8,
  },
  info: {
    margin: 5,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    borderRadius: 6,
    backgroundColor: 'white',
    padding: 8,
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
