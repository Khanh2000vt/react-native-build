/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
  onPressAdd: any;
  onSelect: any;
  onTick: boolean;
}

export default function HeaderManage({onPressAdd, onSelect, onTick}: Props) {
  const [text, setText] = useState('');
  const [isSelectAll, setIsSelectAll] = useState(false);
  useEffect(() => {
    setIsSelectAll(onTick);
  }, [onTick]);
  const iconSelect = isSelectAll ? 'checkbox' : 'square';
  async function handleSelectAll() {
    await onSelect(!isSelectAll);
    setIsSelectAll(!isSelectAll);
  }

  function handleButtonAdd() {
      console.log('text: ', text);
      onPressAdd(text);
      setText('');
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Type here to translate!"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <TouchableOpacity style={styles.buttonAdd} onPress={handleButtonAdd}>
        <Ionicons name="person-add" size={20} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.checkbox} onPress={handleSelectAll}>
        <Ionicons
          name={iconSelect}
          size={25}
          color={isSelectAll ? '#FF7F50' : 'white'}
          style={{elevation: 10}}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 55,
    backgroundColor: '#00BFFF',
    elevation: 5,
  },
  textInput: {
    backgroundColor: '#DCDCDC',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 20,
    flex: 3,
    marginHorizontal: 2,
    elevation: 5,
  },
  buttonAdd: {
    borderWidth: 0.5,
    borderColor: '#fff',
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    flex: 1,
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    marginHorizontal: 2,
    backgroundColor: '#FF7F50',
    elevation: 5,
  },
  checkbox: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    width: '100%',
    marginLeft: 2,
  },
});
