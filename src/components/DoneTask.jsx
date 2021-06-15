import React, { useContext } from 'react'
import { AppContext } from '../createContext'


function DoneTask() {

    const { toDo, toDos, today, option, setTodo, setToDos, day, addToDo, showToDo, showOption, setOptiion } = useContext(AppContext)

    return (
        <div className="app">
        

        <div className="mainHeading">
            <h1 onClick={showToDo}>ToDo List</h1>
        </div>

        <div style={{ color: "white", paddingTop: "50px", paddingLeft: "10px", paddingBottom: "50px" }}>
            <input className="radioButton" type="radio" value="all" name="task" onChange={(e) => { setOptiion(e.target.value) }} /> All Task
            <input className="radioButton" type="radio" value="done" name="task" onChange={(e) => { setOptiion(e.target.value) }} /> Completed Task
            <input className="radioButton" type="radio" value="pending" name="task" onChange={(e) => { setOptiion(e.target.value) }} /> Pending Task
        </div>

        <div className="subHeading">
            <br />
            <h2>Whoop, it's {today} 🌝 ☕ </h2>
        </div>

        {toDos.map((jobs) => {
            if (jobs.deleted === false && jobs.done=== true) {
                return (
                    <div className="todos">
                        <div className="todo">
                            <div className="left">
                                <input type="checkbox" name="" id="" onChange={(e) => {
                                    setToDos(toDos.filter(obj => {
                                        if (obj.id === jobs.id) {
                                            obj.done = !obj.done
                                        }
                                        return obj
                                    }))
                                }} />
                                <p>{jobs.text}</p>
                            </div>
                            <div className="right">
                                <i onClick={() => {
                                    setToDos(toDos.filter(obj => {
                                        if (obj.id === jobs.id) {
                                            obj.deleted = true
                                        }
                                        return obj
                                    }))
                                }} className="fas fa-times"></i>
                            </div>
                        </div>
                    </div>

                )
            }
            return null
        })
        }

    </div>
    )
}

export default DoneTask
