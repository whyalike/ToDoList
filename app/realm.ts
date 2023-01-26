import Realm from "realm";
import { createRealmContext } from "@realm/react";

const Todo = {
    name: 'Todo',
    properties: {
        _id: 'objectid'
    }
}

export const todoContext = createRealmContext({
    schema: [Todo],
});