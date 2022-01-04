/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function RegisterScreen({navigation}: {navigation: any}) {
  const [user, setUser] = useState({
    text: '',
    isError: false,
  });
  const [email, setEmail] = useState({
    text: '',
    isError: false,
  });
  const [phone, setPhone] = useState({
    text: '',
    isError: false,
  });
  const [password, setPassword] = useState({
    text: '',
    isError: false,
  });
  const [confirm, setConfirm] = useState({
    text: '',
    isError: false,
  });
  const [hidePassword, setHidePassword] = useState<boolean>(true);

  const ref_email = useRef();
  const ref_phone = useRef();
  const ref_password = useRef();
  const ref_confirm = useRef();

  function handleToggleShowPass() {
    setHidePassword(!hidePassword);
  }

  function handlePressRegister() {
    if (user.text === '') {
      setUser({...user, isError: true});
    } else if (!validateEmail(email.text)) {
      setEmail({...email, isError: true});
    } else if (phone.text.length <= 8) {
      setPhone({...phone, isError: true});
    } else if (password.text.length < 6) {
      setPassword({...password, isError: true});
    } else if (confirm.text !== password.text) {
      setConfirm({...confirm, isError: true});
    } else if (
      !user.isError &&
      !email.isError &&
      !phone.isError &&
      !password.isError &&
      !confirm.isError
    ) {
      navigation.navigate('OTPScreen', {phone: phone.text});
    }
  }

  function handlePressReset() {
    setUser({text: '', isError: false});
    setEmail({text: '', isError: false});
    setPhone({text: '', isError: false});
    setPassword({text: '', isError: false});
    setConfirm({text: '', isError: false});
    setHidePassword(true);
  }

  function validateEmail(emailCheck: any) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(emailCheck)) {
      return true;
    }
    return false;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.title}>Register</Text>
          <View style={{marginVertical: 5}}>
            {user.text !== '' ? (
              <Text style={{color: 'blue'}}>User Name</Text>
            ) : (
              <Text> </Text>
            )}
            <TextInput
              style={[
                styles.input,
                {borderColor: user.isError ? 'red' : 'black'},
              ]}
              placeholder="User Name"
              onChangeText={text => setUser({text: text, isError: false})}
              defaultValue={user.text}
              autoCapitalize="words"
              autoFocus={true}
              onSubmitEditing={()=> ref_email.current.focus()}
            />
            <View>
              {user.isError && (
                <Text style={{color: 'red', fontSize: 9}}>
                  Please enter user name!
                </Text>
              )}
            </View>
          </View>

          <View style={{marginVertical: 5}}>
            {email.text !== '' ? (
              <Text style={{color: email.isError ? 'red' : 'blue'}}>Email</Text>
            ) : (
              <Text> </Text>
            )}
            <TextInput
              style={[
                styles.input,
                {borderColor: email.isError ? 'red' : 'black'},
              ]}
              placeholder="Email"
              onChangeText={text => setEmail({text: text, isError: false})}
              defaultValue={email.text}
              ref={ref_email}
              onSubmitEditing={()=> ref_phone.current.focus()}
            />
            <View>
              {email.isError && (
                <Text style={{color: 'red', fontSize: 9}}>
                  Please enter email!
                </Text>
              )}
            </View>
          </View>

          <View style={{marginVertical: 5}}>
            {phone.text !== '' ? (
              <Text style={{color: phone.isError ? 'red' : 'blue'}}>Phone</Text>
            ) : (
              <Text> </Text>
            )}
            <TextInput
              style={[
                styles.input,
                {borderColor: phone.isError ? 'red' : 'black'},
              ]}
              placeholder="Phone"
              onChangeText={text => setPhone({text: text, isError: false})}
              defaultValue={phone.text}
              keyboardType="phone-pad"
              maxLength={10}
              ref={ref_phone}
              onSubmitEditing={()=> ref_password.current.focus()}
            />
            <View>
              {phone.isError && (
                <Text style={{color: 'red', fontSize: 9}}>
                  Please enter phone number!
                </Text>
              )}
            </View>
          </View>

          <View style={{marginVertical: 5}}>
            {password.text !== '' ? (
              <Text style={{color: password.isError ? 'red' : 'blue'}}>
                Password
              </Text>
            ) : (
              <Text> </Text>
            )}
            <View
              style={[
                styles.input,
                styles.inputPass,
                {borderColor: password.isError ? 'red' : 'black'},
              ]}>
              <TextInput
                style={{flex: 1}}
                placeholder="Password"
                onChangeText={text => setPassword({text: text, isError: false})}
                defaultValue={password.text}
                secureTextEntry={hidePassword}
                ref={ref_password}
              onSubmitEditing={()=> ref_confirm.current.focus()}
              />
              {password.text !== '' && (
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
              {password.isError && (
                <Text style={{color: 'red', fontSize: 9}}>
                  Please enter length password more than 6 characters!
                </Text>
              )}
            </View>
          </View>

          <View style={{marginVertical: 5}}>
            {confirm.text !== '' ? (
              <Text style={{color: confirm.isError ? 'red' : 'blue'}}>
                Confirm Password
              </Text>
            ) : (
              <Text> </Text>
            )}
            <View
              style={[
                styles.input,
                styles.inputPass,
                {
                  opacity: password.text === '' ? 0.2 : 1,
                  borderColor: confirm.isError ? 'red' : 'black',
                },
              ]}>
              <TextInput
                style={{flex: 1}}
                placeholder="Confirm Password"
                onChangeText={text => setConfirm({text: text, isError: false})}
                defaultValue={confirm.text}
                secureTextEntry={hidePassword}
                editable={password.text === '' ? false : true}
                ref={ref_confirm}
              />
              {password.text !== '' && (
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
              {confirm.isError && (
                <Text style={{color: 'red', fontSize: 9}}>
                  Confirm password is incorrect!
                </Text>
              )}
            </View>
          </View>
        </View>
        <View style={styles.options}>
          <TouchableOpacity
            style={[styles.register, {backgroundColor: '#fff'}]}
            onPress={handlePressRegister}>
            <Text style={styles.textButton}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.reset, {backgroundColor: '#fff'}]}
            onPress={handlePressReset}>
            <Text style={styles.textButton}>Reset</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    marginBottom: 5,
  },
  inputPass: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textButton: {
    borderWidth: 1,
    padding: 10,
    width: 100,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  register: {},
  reset: {},
});
