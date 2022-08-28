import React from "react";
import { PeopleList } from '../PeopleList';

const people = [{
    name: 'Fred',
    age: 25,
    pet: 'cat',
} , {
    name: 'Koni',
    age: 23,
    pet: 'cat',
} , {
    name: 'Bao',
    age: 26,
    pet: 'cat',
}];

export const PeopleListPage = () => (
    <>
    <h1>The People List Page</h1>
    <PeopleList people={people} />
    </>
);