/* eslint-disable prettier/prettier */
import {useState} from 'react';

function useHandleNotification(listItem: any) {
  const [list, setList] = useState(listItem);
  function updateList(item: any) {
    let temp = list;
    let index = temp.indexOf(item);
    const isNotification = item.isNotification;
    setList([
      ...temp.slice(0, index),
      {
        ...item,
        isNotification: !isNotification,
      },
      ...temp.slice(index + 1),
    ]);
  }
  return [list, updateList];
}

export {useHandleNotification};
