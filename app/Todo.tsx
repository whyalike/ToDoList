import React from "react";
import { Text, View } from "react-native";

import {Todo} from './realm';

export default function TodoItem({item}: {item: Todo & Realm.Object}) {
  return (
    <View>
        <Text style={{fontSize: 20}}>{item.description}</Text>
    </View>
  )
}
