/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import HeaderManage from '../components/HeaderManage';
import FooterManage from '../components/FooterManage';
import BaseFlatList from '../components/BaseFlatList';
import ButtonSort from '../components/ButtonSort';
import ViewItem from '../components/ViewItem';
import {dataTest} from '../data-test/data';

export default function ManageScreen() {
  interface IItem {
    id: number;
    name: string;
    isSelected: boolean;
  }
  const [data, setData] = useState<IItem[]>([]);
  const [isShowFooter, setIsShowFooter] = useState(false);
  const [isSelectedAll, setIsSelectedAll] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setData([...dataTest]);
  }, []);

  useEffect(() => {
    console.log('count: ', count);
    console.log('length: ', data.length);
    if (count === 0) {
      setIsShowFooter(false);
      setIsSelectedAll(false);
    } else if (count === data.length) {
      setIsShowFooter(true);
      setIsSelectedAll(true);
    } else {
      setIsShowFooter(true);
      // setIsSelectedAll(false);
    }
  }, [count, data.length]);

  function handlePressAdd(text: string) {
    const newItem = data;
    if (newItem.length === 0) {
      var itemNew = {
        id: 1,
        // lấy id của phần tử cuối cùng cộng thêm 1.
        name: text,
        isSelected: false,
      };
    } else {
      itemNew = {
        id: data[data.length - 1].id + 1,
        // lấy id của phần tử cuối cùng cộng thêm 1.
        name: text,
        isSelected: false,
      };
    }
    newItem.push(itemNew);
    setData([...newItem]);
    // :(
    setIsSelectedAll(false);
  }

  function handleSelectAll(isSelected: boolean) {
    if (isSelected) {
      let newList = data;
      data.forEach((item, index) => {
        newList[index] = {
          ...item,
          isSelected: true,
        };
      });
      setData([...newList]);
      setCount(data.length);
    } else {
      handleUnSelectAll();
    }
  }

  function handleUnSelectAll() {
    const newList = data;
    newList.forEach(item => {
      item.isSelected = false;
    });
    console.log('new: ', newList);
    setData([...newList]);
    setCount(0);
  }

  function handleSelectItem(item: any) {
    let index = data.indexOf(item as never);
    const isSelected = item.isSelected;
    // Dem so luong item duoc select
    if (isSelected) {
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }
    setData([
      ...data.slice(0, index),
      {
        ...item,
        isSelected: !isSelected,
      },
      ...data.slice(index + 1),
    ]);
  }

  function handleSort(option: number) {
    const newList = data;
      newList.sort(function (a: IItem, b: IItem) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (option === 0) {
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          // names must be equal
          return 0;
        } else if (option === 1) {
          if (nameA < nameB) {
            return 1;
          }
          if (nameA > nameB) {
            return -1;
          }
          // names must be equal
          return 0;
        } else {
          return a.id - b.id;
        }
      });
      setData([...newList]);
      console.log('sort: ', data);
      console.log('option: ', option);
  }

  function handlePressDelete() {
    const newList = [];
    data.map((item: any) => {
      if (!item.isSelected) {
        newList.push(item);
      }
    });
    console.log('xoa: ', newList);
    setData([...newList]);
    setCount(0);
  }

  function handlePressCancel() {
    handleUnSelectAll();
  }

  return (
    <View style={styles.container}>
      {console.log('data: ', data)}
      <HeaderManage
        onPressAdd={handlePressAdd}
        onSelect={handleSelectAll}
        onTick={isSelectedAll}
      />
      <ButtonSort onPressButton={handleSort} />

      <View style={styles.separator} />

      <View style={styles.body}>
        {console.log('Da di qua day')}
        <BaseFlatList
          data={data}
          ItemViewRender={ViewItem}
          onPress={handleSelectItem}
          onRefresh={() => {}}
        />
      </View>

      <FooterManage
        onShow={isShowFooter}
        onPressDelete={handlePressDelete}
        onPressCancel={handlePressCancel}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  body: {
    flex: 1,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
    elevation: 1,
  },
});
