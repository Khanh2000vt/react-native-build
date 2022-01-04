/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity, Alert, Text, StyleSheet} from 'react-native';

interface Props {
  onPress: any;
  item: any;
  firstItemInDay?: boolean;
}
export default function RenderItem({item}: Props) {
  return (
    <TouchableOpacity
      //   testID={testIDs.agenda.ITEM}
      style={[styles.item, {height: item.height}]}
      onPress={() => Alert.alert(item.name)}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
});
