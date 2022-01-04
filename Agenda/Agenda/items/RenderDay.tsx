/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BaseButtonAdd from '../components/BaseButtonAdd';

interface Props {
  onPress: any;
  item: any;
  day: any;
}
export default function RenderItem({day, item, onPress}: Props) {
  const [dayString, monthString, dayNumber, yearNumber] = day
    ? timeToString(day)
    : [null];

  function timeToString(time: any) {
    const date = new Date(time);

    console.log('date-aaaaa: ', date.toDateString());
    //Fri Dec 24 2021
    return date.toDateString().split(' ');
  }

  console.log('date: ', day);
  return (
    <View style={styles.renderDay}>
      {day && (
        <View>
          <View>
            <Text>{dayNumber}</Text>
            <Text>{dayString}</Text>
          </View>
          <BaseButtonAdd onPress={() => onPress(day, item)} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  renderDay: {
    backgroundColor: 'cyan',
    width: 50,
    height: 50,
  },
});
