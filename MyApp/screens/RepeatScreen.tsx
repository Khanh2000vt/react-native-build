/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {listRepeat} from '../components/store/indexItem';

interface Props {
  itemType: any;
  onPress: any;
}
const RepeatScreen = ({route, navigation}: {route: any; navigation: any}) => {
  const [repeat, setRepeat] = useState(listRepeat);
  const {onSelect} = route.params;
  console.log('params: ', route);
  const handleSelect = (repeatItem: any) => {
    let i = repeat.indexOf(repeatItem);
    let temp = repeat;
    temp.map((item: any, index: any) => {
      if (index === i) {
        item.isSelected = true;
      } else {
        item.isSelected = false;
      }
    });
    setRepeat(temp);
    navigation.goBack();
    onSelect(repeatItem);
  };
  return (
    <View style={styles.container}>
      <Pressable
        style={[
          StyleSheet.absoluteFill,
          {backgroundColor: 'rgba(0, 0, 0, 0.5)'},
        ]}
        onPress={navigation.goBack}
      />

      <Text style={styles.textTitle}>Repeat</Text>
      {repeat.map((item: any, index: number) => {
        return (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => handleSelect(item)}
            key={index}
            style={[
              styles.item,
              {backgroundColor: index % 2 === 0 ? '#fafafa' : '#fff'},
            ]}>
            <Text
              style={[
                styles.text,
                {fontWeight: item.isSelected ? 'bold' : 'normal'},
              ]}>
              {item.name}
            </Text>
            {item.isSelected && (
              <Ionicons name="checkmark" size={16} color="black" />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
export default RepeatScreen;

const styles = StyleSheet.create({
  item: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  textTitle: {
    backgroundColor: 'blue',
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 30,
    fontSize: 16,
  },
});
