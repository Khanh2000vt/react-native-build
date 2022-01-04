/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Svg, { Path } from 'react-native-svg';
export default function TestScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('./powerPNG.png')} style={styles.icon} height={50} width={50} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    // color: 'red',
    tintColor: 'red',
  },
});
