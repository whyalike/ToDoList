import React, { useCallback } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import TodoItem from "./Todo";
import { todoContext, Todo } from "./realm";

const {useQuery, useRealm} = todoContext;

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
    const realm = useRealm();

    const [newTodoText, setNewTodoText] = React.useState('');

    const addTodo = useCallback(() => {
        realm.write(() => {
            realm.create(Todo.schema.name, {
                _id: new Realm.BSON.ObjectId(),
                description: newTodoText, 
                completed: false,
                createdAt: new Date()
            });
        })
    }, [realm])
    console.log("Found todos: ", todos);

    return (
        <View style={{flexGrow: 1, padding: 30}}>
            <View style={{flexDirection: 'row'}}>
                <TextInput value={newTodoText}
                    onChangeText={(text) => setNewTodoText(text)}
                    style={{fontSize: 24, padding: 12, borderColor: "gray", borderWidth: 1, backgroundColor:'#EEEEE', flexGrow:1}} placeholder="Add a todo" />
                <Pressable onPress={() => addTodo(newTodoText)}>
                    <Text style={{fontSize: 24, padding: 12}}>Add</Text>
                </Pressable>
            </View>
            <ScrollView>
                    {todos.map((todo) => {
                        return (
                            <View>
                                <TodoItem item={todo}></TodoItem>
                            </View>
                        )
                    })}
            </ScrollView>
        </View>
    )
    
}