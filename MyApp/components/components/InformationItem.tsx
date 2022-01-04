/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const InformationItem = ({item, onPress}) => {
  // const [color, setColor] = useState(false);
  const handlePress = (bool: boolean) => {
    // setColor(!bool);
  };
  const onReadMore = (item: any) => {
    onPress(item);
  };
  return (
    <View style={styles.container}>
      <View style={{...styles.lineItem, flex: 0.3}}>
        <Text style={{fontWeight: 'bold', color: 'blue'}} numberOfLines={1}>
          Name:{' '}
        </Text>
        <Text style={{fontWeight: 'bold', color: 'blue'}} numberOfLines={1}>
          Description:{' '}
        </Text>
      </View>
      <View style={{...styles.lineItem, flex: 0.5, paddingRight: 6}}>
        <Text numberOfLines={1} style={styles.textData}>
          {item.name}
        </Text>
        <Text numberOfLines={1} style={styles.textData}>
          {item.description}
        </Text>
      </View>
      <View style={{...styles.lineItem, flex: 0.2}}>
        <TouchableOpacity onPress={() => onReadMore(item)}>
          <View style={styles.button}>
            <Text
              style={{color: '#fff', fontSize: 10, fontWeight: 'bold'}}
              numberOfLines={1}>
              Read More
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress(color)}>
          <Ionicons
            name="notifications"
            size={20}
            style={{alignSelf: 'flex-end', marginTop: 5}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default InformationItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
  lineItem: {
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: 'blue',
    padding: 5,
  },
  textData: {
    alignSelf: 'flex-end',
  },
});
