/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
  item: any;
  onPress: any;
}

export default function ViewItem({item, onPress}: Props) {
  const [isSelect, setIsSelect] = useState(false);
  useEffect(() => {
    setIsSelect(item.isSelected);
  }, [item.isSelected]);

  const iconSelect = isSelect ? 'checkbox' : 'square';

  function handleSelect() {
    setIsSelect(!isSelect);
    onPress(item);
  }
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isSelect ? '#B0E0E6' : '#C0C0C0'},
        {elevation: isSelect ? 5 : 0},
      ]}>
      <Text
        style={[
          styles.text,
          {
            backgroundColor: isSelect ? '#FFA07A' : '#fff',
            color: isSelect ? 'white' : 'black',
          },
        ]}
        numberOfLines={2}>
        {item.name}
      </Text>
      <TouchableOpacity style={styles.checkbox} onPress={handleSelect}>
        <Ionicons
          name={iconSelect}
          size={25}
          color={isSelect ? '#FF7F50' : 'white'}
          style={{elevation: 10}}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 55,
    borderRadius: 2,
    margin: 2,
    alignItems: 'center',
    // elevation: 5,
  },
  checkbox: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    height: '100%',
  },
  text: {
    alignSelf: 'center',
    flex: 1,
    borderRadius: 5,
    padding: 2,
    height: '100%',
    textAlignVertical: 'center',
  },
});
