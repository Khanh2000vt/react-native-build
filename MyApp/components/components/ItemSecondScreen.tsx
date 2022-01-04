/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
interface ItemSecondScreenProps {
  item: any;
  onPress: any;
  backgroundColor: any;
}
//style={[styles.item, backgroundColor]}
//style={[styles.title, textColor]}
const {width} = Dimensions.get('window');
const itemWidth = width / 3;
const ItemSecondScreen = ({item, onPress, backgroundColor}: ItemSecondScreenProps) => {
  return (
    <View style={styles.view}>
      <TouchableOpacity
      style={{...styles.containerOpacity,borderColor: backgroundColor}}
      onPress={onPress}>
        <Ionicons name="flower" color="red" size={20} />
        <Text style={styles.title} numberOfLines={1}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ItemSecondScreen;
const styles = StyleSheet.create({
  view: {
    height: itemWidth,
    width: itemWidth,
    padding: 15,
  },
  containerOpacity: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: '#fff'
  },
  title: {
  }
});
