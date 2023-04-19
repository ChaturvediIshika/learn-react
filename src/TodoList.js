import React from 'react'

const Todos=[{name:"sleep",isDone:true},
{name:"dance",isDone:true},
{name:"singing",isDone:false}];

const TodoList = () => {
  return (
    <div>
        <ul> 
        {
        Todos.map((todo)=>{
            return <li>{todo.name},{todo.isDone.toString()}</li> 
        })
        }
        </ul> 
    </div>
  )
}

export default TodoList