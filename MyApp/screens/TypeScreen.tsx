/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {listType} from '../components/store/indexItem';
interface Props {
  itemType: any;
  onPress: any
}
const TypeScreen = ({ route, navigation }: { route: any, navigation: any }) => {
  const [type, setType] = useState(listType);
  const { onSelect } = route.params;

  const handleSelect = (itemType: any) => {
    let i = type.indexOf(itemType);
    let temp = type;
    temp.map((item, index) => {
      if (index === i) {
        item.isSelected = true;
      } else {
        item.isSelected = false;
      }
    });
    setType(temp);
    navigation.goBack();
    onSelect(itemType);
  };
  return (
    <View style={{flex: 1}}>
      {
        type.map((item: any, index: number) => {
          return (
            <TouchableOpacity
            onPress ={() => handleSelect(item)}
            key={index}
            style={[styles.item, {backgroundColor: index % 2 === 0 ? '#fafafa'  : '#fff'}]} >
              <Text style={[styles.text, {fontWeight: item.isSelected ? 'bold' : 'normal'}]}>{item.name}</Text>
              {
                item.isSelected && <Ionicons name="checkmark" size={20} color="black" />
              }
            </TouchableOpacity>
          );
        })
      }
    </View>
  );
};
export default TypeScreen;

const styles = StyleSheet.create({
  item: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
  },
});
