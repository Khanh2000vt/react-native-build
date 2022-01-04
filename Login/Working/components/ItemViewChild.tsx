/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
interface Props {
  item: any;
}
const {width} = Dimensions.get('window');
const itemWidth = width / 3;
export default function ItemViewChild({item}: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.title}>
        <Text style={styles.titleText} numberOfLines={1}>
          {item.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: itemWidth - 20,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    margin: 5,
  },
  title: {},
  titleText: {},
});
