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

import Header from '../../component/header';
import Footer from '../../component/hotelfooter';
const {width, height} = Dimensions.get('window');

const SelectRoom = function (props) {
  return (
    <View
      style={{
        height: height,
        width: width,
      }}>
      <ImageBackground
        source={require('../../../assets/image/bg.jpg')}
        style={{height: height, width: width}}>
        <Header headerLabel={'Select Room'} />

        <View style={{height: '85%', width: width}}>
          <ScrollView
            style={{
              height: '100%',
              flex: 1,
              borderWidth: 1,
              borderColor: 'red',
            }}>
            <View>
              <Text style={{fontSize: 20}}>mkdflsdkfmksdmfskfksd</Text>
            </View>
            <View>
              <Text style={{fontSize: 20}}>mkdflsdkfmksdmfskfksd</Text>
            </View>
            <View>
              <Text style={{fontSize: 20}}>mkdflsdkfmksdmfskfksd</Text>
            </View>
            <View>
              <Text style={{fontSize: 20}}>mkdflsdkfmksdmfskfksd</Text>
            </View>
            <View>
              <Text style={{fontSize: 20}}>mkdflsdkfmksdmfskfksd</Text>
            </View>
            <View>
              <Text style={{fontSize: 20}}>mkdflsdkfmksdmfskfksd</Text>
            </View>
            <View>
              <Text style={{fontSize: 20}}>mkdflsdkfmksdmfskfksd</Text>
            </View>
            <View>
              <Text style={{fontSize: 20}}>mkdflsdkfmksdmfskfksd</Text>
            </View>
            <View>
              <Text style={{fontSize: 20}}>mkdflsdkfmksdmfskfksd</Text>
            </View>
            <View>
              <Text style={{fontSize: 20}}>mkdflsdkfmksdmfskfksd</Text>
            </View>
            <View>
              <Text style={{fontSize: 20}}>mkdflsdkfmksdmfskfksd</Text>
            </View>
            <View>
              <Text style={{fontSize: 20}}>mkdflsdkfmksdmfskfksd</Text>
            </View>
            <View>
              <Text style={{fontSize: 20}}>mkdflsdkfmksdmfskfksd</Text>
            </View>
            <View>
              <Text style={{fontSize: 20}}>mkdflsdkfmksdmfskfksd</Text>
            </View>
            <View>
              <Text style={{fontSize: 20}}>mkdflsdkfmksdmfskfksd</Text>
            </View>
            <View>
              <Text style={{fontSize: 20}}>mkdflsdkfmksdmfskfksd</Text>
            </View>
            <View>
              <Text style={{fontSize: 20}}>mkdflsdkfmksdmfskfksd</Text>
            </View>
            <View>
              <Text style={{fontSize: 20}}>mkdflsdkfmksdmfskfksd</Text>
            </View>
            <View>
              <Text style={{fontSize: 20}}>mkdflsdkfmksdmfskfksd</Text>
            </View>
            <View>
              <Text style={{fontSize: 20}}>mkdflsdkfmksdmfskfksd</Text>
            </View>
            <View>
              <Text style={{fontSize: 20}}>mkdflsdkfmksdmfskfksd</Text>
            </View>
            <View>
              <Text style={{fontSize: 20}}>mkdflsdkfmksdmfskfksd</Text>
            </View>
            <View>
              <Text style={{fontSize: 20}}>mkdflsdkfmksdmfskfksd</Text>
            </View>
            <View>
              <Text style={{fontSize: 20}}>mkdflsdkfmksdmfskfksd</Text>
            </View>
            <View>
              <Text style={{fontSize: 20}}>mkdflsdkfmksdmfskfksd</Text>
            </View>
            <View>
              <Text style={{fontSize: 20}}>mkdflsdkfmksdmfskfksd</Text>
            </View>
            <View>
              <Text style={{fontSize: 20}}>mkdflsdkfmksdmfskfksd</Text>
            </View>
            <View>
              <Text style={{fontSize: 20}}>mkdflsdkfmksdmfskfksd</Text>
            </View>
            <View>
              <Text style={{fontSize: 20}}>mkdflsdkfmksdmfskfksd</Text>
            </View>
            <View>
              <Text style={{fontSize: 20}}>mkdflsdkfmksdmfskfksd</Text>
            </View>
            <View>
              <Text style={{fontSize: 20}}>mkdflsdkfmksdmfskfksd</Text>
            </View>
          </ScrollView>
        </View>
        <View style={{height: '10%', backgroundColor: 'red'}}>
          <Text>Footer</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SelectRoom;
