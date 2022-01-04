/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable radix */
import React from 'react';
import {StyleSheet, Text, View, Dimensions, Alert, TouchableOpacity} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
interface Props {
  item: any;
}
export default function TestPage(item: any, onPress: any) {

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: parseInt(item.name) % 2 === 0 ? '#FFFAF0' : '#F8F8FF'},
      ]}>
      <Text style={styles.title}>{item.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight + 10,
    flex: 1,
    padding: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});
