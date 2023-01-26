import Realm from "realm";
import { createRealmContext } from "@realm/react";

export class Todo extends Realm.Object {
    _id!: Realm.BSON.ObjectId
    description!: string
    completed!: boolean
    createdAt!: Date

    static schema = {
        name: 'Todo',
        properties: {
            _id: 'objectId',
            description: 'string',
            completed: {type: 'bool', default: false},
            createdAt: 'date'
        }
    }
}

export const todoContext = createRealmContext({
    schema: [Todo],
    onFirstOpen(realm) {
        realm.create('Todo', {
            _id: new Realm.BSON.ObjectId(),
            description: 'Learn something new',
            completed: false,
            createdAt: new Date()
        }
    );
        realm.create('Todo', {
            _id: new Realm.BSON.ObjectId(),
            description: 'Learn something new',
            completed: false,
            createdAt: new Date()
        }
    );
    }
});