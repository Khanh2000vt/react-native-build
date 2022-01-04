/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from 'react-native';

export default function ModalAddEvent({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const [text, setText] = useState('');
  const {date, itemsAdd, onSelect} = route.params;
  console.log('modal item: ' + itemsAdd);
  function handleSave() {
    let itemTemp = [
      ...itemsAdd,
      {
        name: text,
      },
    ];

    navigation.goBack();
    onSelect(itemTemp, date);
  }
  return (
    <View style={styles.container}>
      <Pressable
        style={[
          StyleSheet.absoluteFill,
          {backgroundColor: 'rgba(0, 0, 0, 0.5)'},
        ]}
        onPress={navigation.goBack}
      />
      <View style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.title}>Please enter event</Text>
          <Text style={styles.noteDay}>{date}</Text>
        </View>
        <TextInput
          style={styles.textInput}
          placeholder="Please enter event!"
          onChangeText={text => setText(text)}
          defaultValue={text}
          autoCapitalize={'sentences'}
        />
        <View style={styles.option}>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={handleSave}>
            <Text style={[styles.buttonBase, styles.buttonSave]}>Save</Text>
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => navigation.goBack()}>
            <Text style={[styles.buttonBase, styles.buttonCancel]}>Cancel</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  body: {
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  header: {
    backgroundColor: '#008B8B',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    paddingVertical: 3,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
  },
  noteDay: {
    textAlign: 'center',
    fontSize: 12,
    color: '#fff',
  },
  textInput: {
    backgroundColor: '#A9A9A9',
    marginHorizontal: 5,
    marginVertical: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 10,
  },
  buttonBase: {
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 30,
    width: 100,
    color: '#fff',
  },
  buttonSave: {
    backgroundColor: '#008B8B',
  },
  buttonCancel: {
    backgroundColor: '#DC143C',
  },
});
