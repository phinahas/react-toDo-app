import React,{useState,useEffect} from 'react';
import './App.css';

function App() {

  const[toDos,setToDos]=useState([])
  const[toDo,setTodo]=useState('')
  const[today,setDay]=useState('')

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


  return (
    <div className="app">
      <div className="mainHeading">
        <h1 onClick={showToDo}>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {today} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>{setTodo(e.target.value)}} type="text" placeholder="🖊️ Add item..." />
        <i onClick={addToDo} className="fas fa-plus"></i>
      </div>

      {toDos.map((jobs)=>{
        if(jobs.deleted===false)
        {
          return(
          <div className="todos">
          <div className="todo">
            <div className="left">
              <input type="checkbox" name="" id="" onChange={(e)=>{
                setToDos(toDos.filter(obj=>{
                  if(obj.id===jobs.id){
                    obj.done=!obj.done
                  }
                  return obj
                }))
              }} />
              <p>{jobs.text}</p>
            </div>
            <div className="right">
              <i onClick={()=>{
                 setToDos(toDos.filter(obj=>{
                  if(obj.id===jobs.id){
                    obj.deleted=true
                  }
                  return obj
                }))
              }} className="fas fa-times"></i>
            </div>
          </div>
        </div>

         )}
        return null
        })
      }
     
    </div>
  );
}

export default App;
