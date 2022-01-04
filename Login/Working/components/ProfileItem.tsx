/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
interface Props {
  image: string;
  name: string;
  email: string;
  valid: number;
}
export default function ProfileItem({image, name, email, valid}: Props) {
  const icon = image
    ? require('../../assets/img/avt-test.png')
    : require('../../assets/img/logo.png');
  return (
    <View style={styles.container}>
      <View style={styles.imgView}>
        <Image source={icon} style={styles.img} />
      </View>
      <Text numberOfLines={1} style={{fontWeight: 'bold'}}>{name}</Text>
      <Text numberOfLines={1} style={{fontWeight: 'bold'}}>{email}</Text>
      <View style={{flexDirection: 'row'}}>
        <Text>Valid: </Text>
        <Text style={{color: 'red', fontWeight: 'bold'}}>{`${valid} day`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    padding: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  imgView: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  img: {
    height: 100,
    width: 100,
    //   resizeMode: 'stretch',
    borderRadius: 50,
  },
});
