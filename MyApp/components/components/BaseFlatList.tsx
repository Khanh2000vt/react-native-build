/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {FlatList, ActivityIndicator, View} from 'react-native';
interface Props {
  data?: any;
  url?: any;
  onPress?: any;
  itemViewRender: any;
  onEndReached?: any;
  onEndReachedThreshold?: number;
  onRefresh?: any;
  currentPage?: any;
}
export default function BaseFlatList({
  data,
  url,
  onPress,
  itemViewRender,
  onEndReached,
  onEndReachedThreshold,
  onRefresh,
  currentPage,
}: Props) {
  const [isLoading, setLoading] = useState(true);
  const [isFetching, setFetching] = useState(false);
  const [dataList, setDataList] = useState([]);
  async function handleRefresh() {
    /* Will reassign dataList value as empty.
       Await for onRefresh function to complete. */
    setFetching(true);
    try {
      if (onRefresh) {
        setDataList([]);
        await onRefresh();
      }
    } catch (error) {
      console.error(error);
    }
    setFetching(false);
  }

  async function getAPI() {
    try {
      const response = await fetch(`${url}${currentPage}`);
      const json = await response.json();
      if (!dataList.length) {
        setDataList([json as never]);
      } else {
        setDataList([...dataList, json as never]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  function setData() {
    setDataList(data);
    setLoading(false);
  }

  useEffect(() => {
    try {
      if (url) {
        getAPI();
      } else if (data) {
        setData();
      }
    } catch (error) {
      console.error(error);
    }
  }, [currentPage]);

  // console.log('load: ', isFetching);
  return (
    <View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={dataList}
          // contentContainerStyle={{paddingBottom: 20}}
          renderItem={({item}) => itemViewRender(item, onPress)}
          keyExtractor={(item) => item.id}
          onEndReached={onEndReached}
          onEndReachedThreshold={onEndReachedThreshold}
          onRefresh={handleRefresh}
          refreshing={isFetching}
        />
      )}
    </View>
  );
}
