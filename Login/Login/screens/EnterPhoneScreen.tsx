/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

export default function EnterPhoneScreen({navigation}: {navigation: any}) {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [phone]);

  function handleContinue() {
    if (phoneCheck(phone)) {
      navigation.navigate('OTPScreen', {
        phone: phone,
      });
    } else {
      setError(true);
    }
  }

  function phoneCheck(inputTxt: string) {
    const phoneNo = /^\d{10}$/;
    if (inputTxt.match(phoneNo)) {
      return true;
    }
    return false;
  }
  return (
    <View style={styles.container}>
      {phone !== '' ? (
        <Text
          style={{
            color: error ? 'red' : 'blue',
            width: '80%',
          }}>
          Phone Number
        </Text>
      ) : (
        <Text> </Text>
      )}
      <TextInput
        style={[styles.input, {borderColor: error ? 'red' : 'black'}]}
        placeholder="Phone Number"
        onChangeText={text => setPhone(text)}
        defaultValue={phone}
        // returnKeyType={(Platform.OS === 'ios') ? 'done' : 'next'}
        keyboardType="phone-pad"
        maxLength={10}
        autoFocus={true}
      />

      {phone.length > 2 ? (
        <TouchableOpacity
          onPress={handleContinue}
          style={{alignSelf: 'center'}}>
          <Text style={styles.button}>Submit</Text>
        </TouchableOpacity>
      ) : (
        <View style={{alignSelf: 'center', opacity: 0.2}}>
          <Text style={styles.button}>Submit</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 50,
    width: '80%',
    borderWidth: 1,
    marginVertical: 5,
    backgroundColor: '#fff',
    padding: 5,
    paddingHorizontal: 10,
  },

  button: {
    borderWidth: 1,
    height: 40,
    width: 100,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: '#fff',
    marginTop: 50,
  },
});
