import React,{useState,useEffect} from 'react';
import {AppContext} from './createContext'
import './App.css';
 import AllTask from './components/AllTask';
 import DoneTask from './components/DoneTask';
 import PendingTask from './components/PendingTask'

function App() {

  const[toDos,setToDos]=useState([])
  const[toDo,setTodo]=useState('')
  const[today,setDay]=useState('')
  const[option,setOptiion]=useState("all")


  let componenet;

  useEffect(()=>{
    console.log("Use effect running");
    day();
//console.log(today.getDay());
  },[])


const day =()=>{
  console.log("function running");
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var today = new Date();
  var dayName = days[today.getDay()];
  setDay(dayName)

}

const addToDo=()=>{
  setToDos([...toDos,{id:Date.now(),text:toDo,done:false,deleted:false}])
  setTodo('')
}

const showToDo=()=>{
  console.log(toDos);
  
}


const showOption= ()=>{
  console.log("heloo");
  console.log(option);
}

if(option==='all'){
  componenet=<AllTask></AllTask>
}else if(option==='done'){
  componenet=<DoneTask></DoneTask>
}else if(option==='pending'){
  componenet=<PendingTask></PendingTask>
}

  return (

    <AppContext.Provider value={{toDo:toDo,toDos:toDos,today:today,option:option,setTodo:setTodo,setToDos:setToDos,day:day,addToDo:addToDo,showToDo:showToDo,showOption:showOption,setOptiion:setOptiion}}>
   {componenet}
   </AppContext.Provider>
  );
}

export default App;
