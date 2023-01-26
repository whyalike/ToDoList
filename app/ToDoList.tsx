import React from "react";
import { SafeAreaView, FlatList, Text, View } from "react-native";
import TodoItem from "./Todo";
import { todoContext, Todo } from "./realm";

const {useQuery} = todoContext;

type ItemData = {
    id: string;
    title: string;
  };

const DATA: ItemData[] = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Learn something',
    }
  ];

export const TodoList = () => {
    const todos = useQuery(Todo);
    console.log("Found todos: ", todos);

    const renderItem = ({item}: {item: Todo}) => {
        return (
            <Text>{item.description}</Text>
        )
    }

    return (
        <SafeAreaView>
            {todos.map((todo) => {
                return <TodoItem item={todo}></TodoItem>
            })}
        </SafeAreaView>
    )
    
}