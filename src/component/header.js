import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

let Header = function (props) {
  return (
    <View
      style={{
        height: '5%',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View style={{width: 25, height: 25}}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Image
            source={require('../../assets/logo/back.png')}
            style={{
              width: 25,
              height: 25,
              marginHorizontal: 6,
              paddingHorizontal: 6,
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          margin: 4,
          // backgroundColor: 'red',
          padding: 4,
          paddingBottom: 0,
          paddingTop: 0,
          marginLeft: 10,
        }}>
        <Text
          style={{
            color: '#fff',
            fontSize: 20,
            fontWeight: '800',
          }}>
          {props.headerLabel}
        </Text>
      </View>
    </View>
  );
};

// const style = StyleSheet.create({});
export default Header;
