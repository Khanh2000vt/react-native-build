/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
interface Props {
  onPressRegister: any;
  onPressForgotPass: any;
}
export default function OptionsLogin({
  onPressRegister,
  onPressForgotPass,
}: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressRegister}>
      <Text style={[styles.text, {textDecorationLine: 'underline'}]}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressForgotPass}>
        <Text style={styles.text}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 11,
  },
});
