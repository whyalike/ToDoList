import React from "react";
import { Text, View } from "react-native";

import {Todo} from './realm';

export default function TodoItem({item}: {item: Todo & Realm.Object}) {
  return (
    <View style={{flexDirection: 'row', paddingVertical: 5}}>
        <Text style={{fontSize: 30, paddingRight: 15}}>{item.completed ? '✔️' : '☐'}</Text>
        <Text style={{fontSize: 30}}>{item.description}</Text>
    </View>
  )
}
