import { useEffect, useState } from 'react';

import Header from './components/Header';

import Tasks from './components/Tasks';

import Spinner from './components/Spinner';

const LOCAL_STORAGE_KEY = 'todo:saveTasks';

function App() {
 
  const [tasks , setTasks] = useState([]);
  const [loading , setLoading] = useState(false);

  function loadSavedTasks(){
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }

  useEffect(()=> {
 setTimeout(()=> {
  loadSavedTasks();
  setLoading(!loading);
 },1200);
  },[]);

  function setTasksAndSave(newTasks){
   setTasks(newTasks);
   localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(newTasks));
  
}
  
  function addTask(taskTitle){
    setTasksAndSave([
      ...tasks,
      {
        id : crypto.randomUUID(),
        title : taskTitle,
        isCompleted : false
      }
    ])
  }

function toggleTaskCompletedById(taskId){
  const newTask = tasks.map(task => {
    if (task.id === taskId) {
      return {
        ...task,
        isCompleted : !task.isCompleted

      }
    }

    return task;
  });
  setTasksAndSave(newTask);
}




function deleteTasksById(taskId){
  const newTasks = tasks.filter(task => task.id !== taskId);
  setTasksAndSave(newTasks);
}

if (!loading) {
  return <Spinner/>
}


  return (
    <div className="App">
     <Header onAddTask = {addTask}/>
     <Tasks 
     tasks = {tasks}
     onComplete = {toggleTaskCompletedById}
     onDelete = {deleteTasksById}
     />

    </div>
  )
}

export default App
