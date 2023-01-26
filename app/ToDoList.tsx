import React from "react";
import { ScrollView, Text, View } from "react-native";
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

    return (
        <View style={{flexGrow: 1, padding: 30}}>
            <ScrollView>
                    {todos.map((todo) => {
                        return (
                            <View style={{backgroundColor: 'orange', marginBottom: 10}}>
                                <TodoItem item={todo}></TodoItem>
                            </View>
                        )
                    })}
            </ScrollView>
        </View>
    )
    
}