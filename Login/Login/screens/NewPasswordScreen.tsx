/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useState, useRef} from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function NewPasswordScreen({navigation}: {navigation: any}) {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const ref_confirm = useRef();

  function handleToggleShowPass() {
    setHidePassword(!hidePassword);
  }

  function handlePressContinue() {
    if (password !== confirm) {
      setError(true);
    } else {
      navigation.popToTop();
    }
  }

  function handleReturnLogin() {
    navigation.popToTop();
  }
  return (
    <View style={styles.container}>
      <View style={{marginBottom: 100}}>
        <View>
          {password !== '' ? (
            <Text style={{color: 'blue'}}>Password</Text>
          ) : (
            <Text> </Text>
          )}
        </View>
        <View style={[styles.input, styles.inputPass]}>
          <TextInput
            style={{flex: 1}}
            placeholder="Password"
            onChangeText={text => {
              setPassword(text);
              setError(false);
            }}
            defaultValue={password}
            secureTextEntry={hidePassword}
            autoFocus={true}
            onSubmitEditing={() => {ref_confirm.current.focus()}}
          />
          {password !== '' && (
            <TouchableOpacity onPress={handleToggleShowPass}>
              <Ionicons
                name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
                size={20}
                color="black"
                style={{marginHorizontal: 5}}
              />
            </TouchableOpacity>
          )}
        </View>

        <View>
          {confirm !== '' ? (
            <Text style={{color: error ? 'red' : 'blue'}}>Confirm Password</Text>
          ) : (
            <Text> </Text>
          )}
        </View>
        <View
          style={[
            styles.input,
            styles.inputPass,
            {borderColor: error ? 'red' : 'black'},
          ]}>
          <TextInput
            style={{flex: 1}}
            placeholder="Confirm Password"
            onChangeText={text => {
              setConfirm(text);
              setError(false);
            }}
            defaultValue={confirm}
            secureTextEntry={hidePassword}
            ref={ref_confirm}
          />
          {password !== '' && (
            <TouchableOpacity onPress={handleToggleShowPass}>
              <Ionicons
                name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
                size={20}
                color="black"
                style={{marginHorizontal: 5}}
              />
            </TouchableOpacity>
          )}
        </View>
        {error ? (
          <Text style={{color: 'red'}}>Confirm password is incorrect !!!!</Text>
        ) : (<Text> </Text>)}
      </View>
      {password.length >= 6 ? (
        <TouchableOpacity
          onPress={handlePressContinue}
          style={{alignSelf: 'center'}}>
          <Text style={styles.button}>Continue</Text>
        </TouchableOpacity>
      ) : (
        <View style={{alignSelf: 'center', opacity: 0.2}}>
          <Text style={styles.button}>Continue</Text>
        </View>
      )}

      <TouchableOpacity onPress={handleReturnLogin} style={styles.buttonLogin}>
        <Text style={styles.textLogin}>Login?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderWidth: 1,
    marginVertical: 5,
  },
  inputPass: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    height: 40,
    width: 100,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: '#fff',
  },
  buttonLogin: {
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
  textLogin: {
    color: 'blue',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
});
