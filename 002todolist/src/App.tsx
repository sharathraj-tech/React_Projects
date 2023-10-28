import React,{ useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

import "./App.css";




function App() {
  const [tasks, setTasks] = useState([]);
  const [taskData, settaskData] = useState('');

  useEffect(()=>{
    const storedTasks=JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  },[])

  const handleAddTask=()=>{
    if(taskData.trim()===""){
      return;
    }

    const newTask={id:uuid(),content:taskData};
    const updatedTasks=[...tasks,newTask];
    setTasks(updatedTasks);
    localStorage.setItem('tasks',JSON.stringify(updatedTasks));
    console.log(localStorage.getItem('tasks'));
    settaskData('');
  }

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="bg-white shadow-2xl border-purple-300 border-2 p-4 rounded-md">
        <div className="flex items-center justify-center mb-6">
          <h1 className="font-bold text-3xl text-center text-gray-700">Todo List</h1>
        </div>
        {/* Textbox and Add Button */}
        <div className="flex items-center">
          <input
            type="text"
            className="border border-gray-300 rounded-l px-4 py-2 w-64"
            placeholder="Enter text..."
            value={taskData}
            onChange={(e)=>{settaskData(e.target.value)}}
          />

          <button className="bg-blue-500 text-white rounded-r px-4 py-2" onClick={handleAddTask}>
            Add
          </button>
        </div>

        <div className="mt-4 shadow-lg rounded-sm  px-3 py-3">
          {tasks.map(task => (
            <div key={task.id} className="flex items-center justify-between rounded-lg border-2 px-2 py-2 shadow-sm bg-slate-700 mb-2">
              <div className="flex items-center">
                {/* <input type="checkbox" id={`item-${task.id}`} className="mr-2" /> */}
                <label htmlFor={`item-${task.id}`} className="mr-4 text-sm font-mono text-white">
                  {task.content}
                </label>
              </div>
              <button className="bg-red-500 text-white rounded px-2 py-1 text-xs" onClick={() => handleDeleteTask(task.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
