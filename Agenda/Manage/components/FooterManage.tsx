/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
  onShow: boolean;
  onPressDelete: any;
  onPressCancel: any;
}
export default function FooterManage({
  onShow,
  onPressDelete,
  onPressCancel,
}: Props) {
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    setIsShow(onShow);
  },[onShow]);
  return (
    <View style={[styles.footerManage, {display: isShow ? 'flex' : 'none'}]}>
      <View style={styles.separator} />
      <View style={styles.container}>
        <TouchableOpacity style={[styles.button, styles.buttonDelete]} onPress={onPressDelete}>
          <Ionicons name="trash" size={20} color="white" />
          <Text style={styles.text}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonCancel]} onPress={onPressCancel}>
          <Ionicons name="refresh-circle" size={20} color="white" />
          <Text style={styles.text}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footerManage: {
    backgroundColor: '#00BFFF',
  },
  container: {
    height: 55,
    flexDirection: 'row',
    // backgroundColor: '#FFFAFA'
    marginBottom: 2,
  },
  separator: {
    marginVertical: 5,
    // borderBottomColor: '#737373',
    borderBottomColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    // elevation: 1,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 1,
  },
  text: {
    color: 'white',
  },
  buttonDelete: {
    backgroundColor: 'red',
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  buttonCancel: {
    backgroundColor: '#006400',
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
});
