/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ItemViewChild from './ItemViewChild';
import ListEmptyItem from './ListEmptyItem';
interface Props {
  item: any;
  onPress?: any;
}

export default function ItemViewParents({item, onPress}: Props) {
  const [isMore, setIsMore] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    if (isMore) {
      setData(item.data);
    }
    else {
      const temp = item.data.slice(0, 9);
      console.log('temp: ', temp);
      setData([...temp]);
    }
  }, [item.data, isMore]);
  function handlePressMore() {
    setIsMore(!isMore);
  }
  return (
    <View style={{flex: 1}}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{item.title}</Text>
      </View>
      <FlatList
        data={data}
        renderItem={ItemViewChild}
        keyExtractor={item => item.id}
        style={styles.flatList}
        horizontal={false}
        numColumns={3}
        ListEmptyComponent={ListEmptyItem}
      />

      <TouchableOpacity style={styles.buttonMore} onPress={handlePressMore}>
        <Text style={[styles.textMore, {color: isMore ? '#800080' : '#0000CD'}]}>{isMore ? 'Hide' : 'More'}</Text>
      </TouchableOpacity>

      <View style={styles.rule} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    height: 40,
    borderWidth: 2,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  flatList: {
      alignSelf: 'center',
  },
  rule: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
    elevation: 1,
  },
  textMore: {
    fontWeight: 'bold',
    // fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
  buttonMore: {
    alignSelf: 'flex-end',
    marginRight: 10,
  },
});
