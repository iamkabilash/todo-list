import { useEffect, useState } from "react";
import ListItem from "./todo/ListItem";
import "./App.css"

const App = () =>{
    
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("listItems")) || []);

    useEffect(() => {
       localStorage.setItem("listItems", JSON.stringify(todoList));
    }, [todoList]);

    const updateTodo = (e) =>{
        setTodo(e.target.value);
        //console.log(e.target.value);
    }

    const addTodo = () =>{
        setTodoList([...todoList, {name: todo, completed: false}]);
        setTodo("");
    }

    const onDone = (item) =>{
        let doneList = todoList.map((test) => {
            if (item.name === test.name){
                return {...test, completed: !test.completed}
            } 
            return test
        });
        setTodoList(doneList);
        //console.log(doneList);
    }

    const onDelete = (item) =>{
        let doneList = todoList.filter((test) => {
            if (test.name === item.name){
                return false;
            }
            return true;
        });
        setTodoList(doneList);
    }

    return (
        <div>
            <h2 className="w-screen text-center justify-center my-[24px] text-white text-3xl font-bold">Todo App</h2>
            <div className="w-screen flex flex-row gap-[5px] justify-center items-center mb-[50px]">
                <input className="border-solid border-green-500 border-2 rounded" type="text" placeholder="Enter a todo" value={todo} onChange={updateTodo} />
                <button className="bg-green-300 px-[10px] font-semibold rounded hover:bg-green-500" onClick={addTodo}>Add</button>
            </div>
            {todoList.map((item, index) => {
                return(
                    <ListItem key={index} obj={item} onDone={onDone} onDelete={onDelete} />
                )
            })}
        </div>
    );
}

export default App;