/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Switch} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import {listType, listRepeat} from '../components/store/indexItem';
import {HeaderBar} from '../components/store/indexItem';
export default function SettingsScreen({navigation}: {navigation: any}) {
  const option = {
    NOTIFICATION: 0,
    TYPE: 1,
    REPEAT: 2,
    ABOUT: 3,
    OPTION: 4,
  };
  const [isEnabled, setIsEnabled] = useState(false);
  const [data, setData] = useState({
    typeSelected: 'Type 1',
    repeatSelected: '1 time',
  });
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  const handleSelectItem = (itemType: any) => {
    setData({
      ...data,
      typeSelected: itemType.name,
    });
  };

  const handleSelectRepeatItem = (repeatItem: any) => {
    setData({
      ...data,
      repeatSelected: repeatItem.name,
    });
  };

  const handlePressItem = (index: number) => {
    switch (index) {
      case 0: {
        console.log('Notification');
        break;
      }
      case 1: {
        navigation.navigate('TypeScreen', {
          onSelect: handleSelectItem,
        });
        break;
      }
      case 2: {
        navigation.navigate('RepeatScreen', {
          onSelect: handleSelectRepeatItem,
        });
        break;
      }
      case 3: {
        console.log('About');
        break;
      }
    }
  };
  // console.log('prev: ', previousState );
  return (
    <View style={styles.container}>
      <HeaderBar />
      <TouchableOpacity
        style={[styles.item, styles.odd]}
        onPress={() => handlePressItem(option.NOTIFICATION)}>
        <Text style={styles.text}>Notifications</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => handlePressItem(option.TYPE)}>
        <Text style={styles.text}>Type</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text}>{data.typeSelected}</Text>
          <Ionicons
            name="chevron-forward"
            size={20}
            color="black"
            style={{alignSelf: 'center', marginLeft: 5}}
          />
        </View>
      </TouchableOpacity>

      <View style={styles.rule} />

      <TouchableOpacity
        style={[styles.item, styles.odd]}
        onPress={() => handlePressItem(option.REPEAT)}>
        <Text style={styles.text}>Repeat</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text}>{data.repeatSelected}</Text>
          <Ionicons
            name="chevron-forward"
            size={20}
            color="black"
            style={{alignSelf: 'center', marginLeft: 5}}
          />
        </View>
      </TouchableOpacity>

      <View style={styles.rule} />

      <TouchableOpacity
        style={styles.item}
        onPress={() => handlePressItem(option.ABOUT)}>
        <Text style={styles.text}>About</Text>
      </TouchableOpacity>
      <View style={[styles.item, styles.odd]}>
        <Text style={styles.text}>Option 1</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  rule: {
    width: '100%',
    height: 2,
    backgroundColor: 'gray',
    opacity: 0.2,
    marginVertical: 20,
  },
  item: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontFamily: 'TestFont',
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  odd: {
    backgroundColor: '#fafafa',
  },
});
