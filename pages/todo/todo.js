import React,{useState} from "react";
import {addTask} from '../../redux/reducers/todoReducer.ts'
import { useDispatch } from "react-redux";
export default function AddTodo() {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
  return (
     <div className="todoapp stack-large">
      <h1>일정등록</h1>
      <form onSubmit={ e => {
          e.preventDefault()
          alert('value ?'+value)
          if(value) dispatch(addTask({task: value})) // value가 있으면 dispatch에게 전달
      }}>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          onChange={e => {
              e.preventDefault()
              setValue(e.target.value)
          }}
        />
        <button type="submit" style={{marginLeft:"20px"}} className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
       {/**
      <h2 id="list-heading">
        3 tasks remaining
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        <li className="todo stack-small">
          <div className="c-cb">
            <input  id="todo-0" type="checkbox" defaultChecked={false} onChange={()=>{
              setCheck(!check)
            }}/>
            <label className="todo-label" htmlFor="todo-0">
              운동 24시간 하기
            </label>
            { check ? <Image class="rotate-center"
            style={{ visibility: "visible", float: "right" }}
            src="/vercel.svg" width="64" height="64"  />
            :<Image
            style={{ width: '6%', visibility: "hidden", float: "right" }}
            src="/vercel.svg" width="64" height="64"  />}
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Eat</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Eat</span>
            </button>
          </div>
        </li>
      </ul>*/}
    </div>
  );
}