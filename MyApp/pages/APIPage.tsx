/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable radix */
import React from 'react';
import {StyleSheet, Text, View, Dimensions, Alert, TouchableOpacity} from 'react-native';

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;
interface Props {
  item: any;
}
export default function TestPage(item: any, onPress: any) {

  function handleLike() {
    Alert.alert('Thông báo', 'Bạn đã click Like thành công!');
  }
  function handleComment() {
    Alert.alert('Thông báo', 'Bạn đã click Comment thành công!');
  }
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: parseInt(item.id) % 2 === 0 ? '#FFFAF0' : '#F8F8FF'},
      ]}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>
      <View style={styles.option}>
      <TouchableOpacity onPress={handleLike}>
        <Text style={[styles.textOption, {backgroundColor: '#00CED1'}]}>Like</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleComment}>
        <Text style={[styles.textOption, {backgroundColor: '#E9967A'}]}>Comment</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.separator} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // width: windowWidth,
    // height: windowHeight + 10,
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
  body: {
    fontSize: 18,
    backgroundColor: 'white',
    padding: 10,
    marginTop: 40,
    elevation: 10,
  },
  option: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textOption: {
    borderWidth: 1,
    borderColor: '#fff',
    padding: 10,
    borderRadius: 10,
    width: 110,
    textAlign: 'center',
    color: '#fff',
    elevation: 10,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
    elevation: 1,
  },
});
