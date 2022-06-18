import React, { useState } from 'react';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import './App.css';
import { Todo } from './model';
import { isDefaultClause } from 'typescript';


/*
let name: string;            //string
let age: number | string;    //number or string
let isStudent: boolean;      //boolean
let hobbies: string[];       //array of strings
let role: [number, string];  //tuple: has to follow that order
let stuff: any;              // any type (not reccomended)
let personName: unknown;      //Should be used instead of any


//"void" and "never" types "void" returns undefined, "never" returns nothing
let PrintName: (name: string) => void | never//let PrintName: Function;

function printName(name: string): void{
  console.log(name);
}

printName("Goodness");

//let person: Object;     //not suggested

type Person = {
  name: string;
  age?: number;
}; 

type employee = Person & {
  id: string;
}

let test_2: employee= {
  name:"Jim",
  age: 45,
  id: "emp456"
}

//difference between type and interface

interface X {
  a: number;
  b: string;
};

interface Y extends X{
  c: number;
  d: string;
};

let test:Y ={
  a: 34,
  b: "sdf",
  c: 89,
  d: "hh",
}

//person has a type of Person and must contain all keys of the type Person (name, age)
//To make key of a Type optional use "?:" in the type definition

// let person: Person ={   
//   name: "Goodness",
// }

// //create an arrayof the person object by using the "[]" beside the person type

// let lotsOfPeople: Person[];
*/



const App: React.FC = () => {

  const [todo, setTodo] = useState<string>(""); //todo value

  const [todos, setTodos] = useState<Todo[]>([]); //An array of Todo elements (id,todo,isDone)

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo){
      setTodos([...todos,{id:Date.now(), todo:todo, isDone:false }])
      setTodo("");
    }
    //setTodos()
  }

  console.log(todos);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      {/*<InputField />*/}
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
      {/*todos.map((t)=>(
        <li>{t.todo}</li>
      ))*/}
    </div>
  );
}

export default App;

