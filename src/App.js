import "./App.css";

import { useState } from "react";

import Tasks from "./components/Tasks.jsx";
import Header from "./components/Header";
import AddTask from "./components/AddTask";


function App() {
 
    const [tasks, setTasks] = useState([
      {
        id: 1,
        text: "Study React Pre-Class Notes",
        day: "Dec 12th at 2:30pm",
        isDone: false,
      },
      {
        id: 2,
        text: "Feed the Dog",
        day: "Dec 13th at 1:30pm",
        isDone: true,
      },
      {
        id: 3,
        text: "Attend In-Class",
        day: "Dec 14th at 3:00pm",
        isDone: false,
      },
    ]);

    const deleteTask= (silid)=>{
      console.log("silgitsin",silid );
      setTasks(tasks.filter((task)=>task.id !==silid))

    }

    const addTask=(newTask)=>{
      const id=Math.floor(Math.random()*100+1)
      const addNewTask={id, ...newTask  }
      setTasks([...tasks,addNewTask]);
    };
  
  return (
    <div className="container">
      <Header title="TASK TRACKER" />
      <AddTask addTask={addTask}/>
      <Tasks tasks={tasks} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
