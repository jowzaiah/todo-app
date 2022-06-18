import React from "react";
import "./styles.css";
import { Todo } from "./../../model";
import TodoCard from "./../TodoCard";

//type Props =
interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

//{todo: string; setTodo: React.Dispatch<React.SetStateAction<string>>;}
//{todo, setTodo}:{todo: string; setTodo: React.Dispatch<React.SetStateAction<string>>;}
// const InputField = ({todo, setTodo}:Props) 



const TodoList: React.FC<Props> = ({todos, setTodos}) => {
    return(
        <div className="todos">
            {todos.map((todo)=>(
            //<li>{todo.id} {todo.todo} {todo.isDone}</li>
                <TodoCard 
                    todo={todo} 
                    key={todo.id} 
                    todos={todos} 
                    setTodos={setTodos}
                /> 
            ))}
        </div>
    );   
};

export default TodoList;