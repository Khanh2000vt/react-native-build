/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import BaseButtonAdd from '../components/BaseButtonAdd';
import {Agenda} from 'react-native-calendars';
const data = {
  '2021-12-22': [{name: 'item 1 - any js object'}],
  '2021-12-23': [{name: 'item 2 - any js object', height: 100}],
  '2021-12-25': [
    {name: 'item 4 - any js object'},
    {name: 'any js object'},
    {name: 'any js object'},
    {name: 'any js object'},
    {name: 'any js object'},
  ],
  '2022-01-20': [
    {name: 'item 3 - any js object'},
    {name: 'any js object'},
    {name: 'any js object'},
    {name: 'any js object'},
    {name: 'any js object'},
    {name: 'any js object'},
    {name: 'any js object'},
    {name: 'any js object'},
    {name: 'any js object'},
    {name: 'any js object'},
    {name: 'any js object'},
  ],
};

export default function CalendarScreen() {
  const [items, setItems] = useState(data);
  // const date = new Date();

  function rowHasChanged(r1: any, r2: any) {
    return r1.name !== r2.name;
  }

  return (
    <Agenda
      items={items}
      loadItemsForMonth={month => {
        console.log('moth: ', month);
      }}
      onCalendarToggled={calendarOpened => {
        console.log(calendarOpened);
      }}
      onDayPress={day => {
        console.log('day: ', day);
      }}
      onDayChange={day => {
        console.log('day changed: ', day);
      }}
      //'2021-12-16'
      // selected={false}
      renderItem={renderItem}
      renderEmptyDate={renderEmptyDate}
      renderDay={renderDay}
      rowHasChanged={rowHasChanged}
      // renderKnob={() => {return (<View><Text>Khanhkk</Text></View>);}}
      showClosingKnob={true}
      renderEmptyData={() => {
        return <View />;
      }}
      theme={{
        agendaDayTextColor: 'red',
        agendaDayNumColor: 'green',
        agendaTodayColor: 'red',
        agendaKnobColor: 'pink',
      }}
    />
  );
}

function renderItem(item: any) {
  return (
    <TouchableOpacity
      // testID={testIDs.agenda.ITEM}
      style={[styles.item, {height: item.height}]}
      onPress={() => Alert.alert(item.name)}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );
}

function renderEmptyDate() {
  return (
    <View style={styles.emptyDate}>
      <Text>This is empty date!</Text>
    </View>
  );
}

function renderDay(day: any, item: any) {
  const [dayString, monthString, dayNumber, yearNumber] = day
    ? timeToString(day)
    : [null];

  function handlePressAddEvent() {}

  return (
    <View style={styles.renderDay}>
      {day && (
        <View>
          <View>
            <Text>{dayNumber}</Text>
            <Text>{dayString}</Text>
          </View>
          <BaseButtonAdd onPress={handlePressAddEvent} />
        </View>
      )}
    </View>
  );
}

function timeToString(time: any) {
  const date = new Date(time);

  console.log('date: ', date.toDateString());
  //Fri Dec 24 2021
  return date.toDateString().split(' ');
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
  renderDay: {
    backgroundColor: 'cyan',
    width: 50,
    height: 50,
  },
});
