/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import OptionsLogin from '../components/items/OptionsLogin';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function LoginScreen({navigation}: {navigation: any}) {
  const logo = '../../assets/img/logo.png';
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [hidePassword, setHidePassword] = useState<boolean>(true);

  function handleToggleShowPass() {
    setHidePassword(!hidePassword);
  }

  function handleRegister() {
    navigation.navigate('RegisterScreen');
  }

  function handleForgotPass() {
    navigation.navigate('EnterPhoneScreen');
  }

  function handlePressLogin() {
    navigation.navigate('WorkingStacks');
  }

  return (
    <View style={styles.container}>
      <Image source={require(logo)} style={styles.logo} />

      <View style={styles.body}>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={text => setEmail(text)}
            defaultValue={email}
          />
          <View style={[styles.input, styles.inputPass]}>
            <TextInput
              style={{flex: 1}}
              placeholder="Password"
              onChangeText={text => setPassword(text)}
              defaultValue={password}
              secureTextEntry={hidePassword}
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
        </View>
        <OptionsLogin
          onPressRegister={handleRegister}
          onPressForgotPass={handleForgotPass}
        />
      </View>

      <View style={styles.optionButton}>
        <TouchableOpacity style={styles.button} onPress={handlePressLogin}>
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="logo-google" size={20} />
          <Text style={styles.textButton}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="logo-facebook" size={20} />
          <Text style={styles.textButton}>Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // paddingVertical: 50,
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'stretch',
  },
  body: {
    width: '60%',
    justifyContent: 'center',
    marginVertical: 40,
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
  optionButton: {
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    borderWidth: 1,
    padding: 5,
    width: 120,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    backgroundColor: '#fff',
    paddingVertical: 8,
  },
  textButton: {
    marginHorizontal: 10,
  },
});
