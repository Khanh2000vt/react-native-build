/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Agenda} from 'react-native-calendars';
import RenderItem from '../items/RenderItem';
import RenderDay from '../items/RenderDay';
const data = {
  '2021-12-23': [{name: 'Event 1'}],
};
export default function AgendaScreen({navigation}: { navigation: any}) {
  const [items, setItems] = useState(data);

  function rowHasChanged(r1: any, r2: any) {
    return r1.name !== r2.name;
  }

  function handlePressAdd(day: any, item: any) {
    //   console.log('dateee: ', day.split('T'));
      let date ='';
      if (day) {
        date = day.split('T')[0];
      }
    //   const date = day.split('T')[0];
    // navigation.navigate('ModalAddEvent', {
    //     date: date,
    //     itemsAdd: item,
    //     onSelect: handleSelectSave,
    //   });
  }

  function handleSelectSave(item: any, date: string) {
    const listItem = items;
    if (!listItem[date]) {
        listItem[date] = [];
        items[strTime].push(item);
    }
    const newItems = {};
    Object.keys(listItem).forEach(key => {
        newItems[key] = listItem[key];
      });
      console.log('new item: ', newItems)
    //   setItems({listItem: newItems});
    }

  return (
    <Agenda
      //   testID={testIDs.agenda.CONTAINER}
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
      //   selected={'2017-05-16'}
      renderItem={(item, firstItemInDay) => {
        return (
          <RenderItem
            item={item}
            firstItemInDay={firstItemInDay}
            onPress={() => {}}
          />
        );
      }}
      renderDay={(day, item) => {
        return (
          <RenderDay
            item={item}
            day={day}
            onPress={handlePressAdd}
          />
        );
      }}
      //   renderEmptyDate={renderEmptyDate}
      rowHasChanged={rowHasChanged}
      showClosingKnob={true}
      renderEmptyData={() => {
        return <View />;
      }}
    />
  );
}
