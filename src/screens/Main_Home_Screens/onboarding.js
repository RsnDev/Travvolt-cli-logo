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
  ActivityIndicator,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const Onboarding = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      <View
        style={{
          flexDirection: 'column',
          marginTop: 10,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Image
          source={require('../../../assets/logo/tra.png')}
          style={{
            padding: 10,
            marginTop: 76,
            height: 86,
            width: 86,
            resizeMode: 'stretch',
            alignItems: 'center',
          }}
        />
        <Text
          style={{
            fontSize: 38,
            fontWeight: '700',
            marginBottom: 500,
            marginTop: 9,
            color: '#1B6FB6',
          }}>
          TRAVVOLT
        </Text>
      </View>
      <View style={{width: width, alignItems: 'center', marginTop: -500}}>
        <Image
          source={require('../../../assets/logo/hello.gif')}
          style={{
            width: width,
            height: 700,
            resizeMode: 'cover',
          }}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Holder')}>
          <View
            style={{
              height: 56,
              marginTop: -240,
              marginBottom: 40,
              width: 256,
              backgroundColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 40,
            }}>
            <Text
              style={{
                fontSize: 20,
              }}>
              Let's Start
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C7E5F0',
    height: height,
    width: width,
  },
});
export default Onboarding;
