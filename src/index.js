import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const ToDoList = () =>{
  const toDo = text => updateTask([...task,{text}]);

  const[task, updateTask] =useState([
    {
      text: "list-01",
      isCompleted: false
    },
    {
      text: "list-02",
      isCompleted: false
    },
    {
      text: "list-03",
      isCompleted: false
    }
  ]);

  const AddTask = ({toDo}) =>{
    const[value, updateValue] = useState(" ");

    const handleSubmit = e =>{
      e.preventDefault();
      if(value !==" ")
      {
        toDo(value)
        updateValue(" ");
      }
    };

    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} placeholder="Add Here..." onChange ={ e => updateValue(e.target.value)}/>
        <button type="submit"><i class="material-icons">add</i></button>
      </form>
    );
  }
  const toogleTask = iValue =>{
    const newTask = [...task];
    if(newTask[iValue].isCompleted)
    {
      newTask[iValue].isCompleted = false; 
    }
    else
    {
      newTask[iValue].isCompleted = true; 
    }
    updateTask(newTask);
  }

  const removeTask = iValue =>{
    const newTask = [...task];
    newTask.splice(iValue,1);
    updateTask(newTask);
  }

  return (
    <div className="list-of-TodoList">
        {
          task.map((cValue, iValue) =>(
            <div className="list-view">
              <span onClick ={ () => toogleTask(iValue) } className={ cValue.isCompleted? "task-name completed-task": "task-name"}>
                                {cValue.text}
              </span>
              <button onClick ={ ()  => removeTask(iValue) }> 
                <i class="material-icons">delete</i>
              </button>
            </div>
          ))
        }
        <AddTask toDo={toDo} />
    </div>
  );
}

ReactDOM.render(<ToDoList/>, document.getElementById('root'));