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
const {width, height} = Dimensions.get('window');

const SelectedHotelDetails = ({navigation, route}) => {
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
                  Hotel Name
                </Text>
                <Text style={{fontSize: 17, fontWeight: '900', color: 'red'}}>
                  50% OFF{/* Discount */}
                </Text>
              </View>

              <View style={styles.info}>
                <Text style={{fontSize: 20, fontWeight: '900', padding: 4}}>
                  Contacts
                </Text>
                <Text style={{fontSize: 17, fontWeight: '900', padding: 4}}>
                  Country : India
                </Text>
                <Text style={{fontSize: 17, fontWeight: '900', padding: 4}}>
                  Address : Near Noida sector 90
                </Text>
                <Text style={{fontSize: 17, fontWeight: '900', padding: 4}}>
                  Hotel Contact : 8786513323
                </Text>
                <Text style={{fontSize: 17, fontWeight: '900', padding: 4}}>
                  Fax Number : 8786513323
                </Text>
              </View>
              <View style={styles.info}>
                <Text style={{fontSize: 17, fontWeight: '900', padding: 4}}>
                  Rating : 4/5
                </Text>
                <Text style={{fontSize: 20, fontWeight: '900', padding: 4}}>
                  Location
                </Text>
                <Text style={{fontSize: 20, fontWeight: '900', padding: 4}}>
                  Facilities
                </Text>
                <Text style={{fontSize: 15, fontWeight: '900', padding: 4}}>
                  <HTML
                    source={source}
                    imagesMaxWidth={Dimensions.get('window').width}
                  />
                </Text>
                <Text style={{fontSize: 20, fontWeight: '900', padding: 4}}>
                  Description
                </Text>
                <Text style={{fontSize: 15, fontWeight: '900', padding: 4}}>
                  <HTML
                    source={source}
                    imagesMaxWidth={Dimensions.get('window').width}
                  />
                </Text>
              </View>
            </View>
          </View>
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
    margin: 4,
    // borderWidth: 1,
    borderRadius: 6,
    backgroundColor: 'white',
    padding: 8,
  },
});
