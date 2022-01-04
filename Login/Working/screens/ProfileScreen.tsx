/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import ProfileItem from '../components/ProfileItem';
export default function ProfileScreen({navigation}: {navigation: any}) {
  const avt = '../../assets/img/avt-test.png';

  function handleLogout() {
    navigation.navigate('LoginStack');
  }

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <ProfileItem
          image={avt}
          name="Nguyễn Ngọc Khánh"
          email="khanh123456@gmail.com"
          valid={3}
        />
      </View>
      <View style={styles.button}>
        <TouchableOpacity onPress={handleLogout} style={{alignSelf: 'center'}}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  body: {
    flex: 0.6,
    marginTop: 50,
    width: '100%',
    paddingHorizontal: 50,
  },
  button: {
    justifyContent: 'center',
    flex: 0.4,
  },
  buttonText: {
    borderWidth: 1,
    height: 40,
    width: 100,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: '#fff',
  },
});
