/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const HeaderBar = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Ionicons name="list-outline" size={20} style={styles.search} />
      </TouchableOpacity>
      <Text style={styles.title}>Khanh</Text>
      <TouchableOpacity>
        <Ionicons name="search-outline" size={20} style={styles.search} />
      </TouchableOpacity>
    </View>
  );
};
export default HeaderBar;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: 'blue',
    height: 40,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
  },
  search: {
    color: '#fff',
    flexDirection: 'column',
  },
});
