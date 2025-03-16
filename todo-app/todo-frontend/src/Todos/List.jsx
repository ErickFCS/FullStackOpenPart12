import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo)
  }

  const onClickComplete = (todo) => () => {
    completeTodo(todo)
  }

  return (
    <>
      {todos.map((todo, i) => {
        return <Todo
          key={`todo${i}`}
          todo={todo}
          onClickComplete={onClickComplete(todo)}
          onClickDelete={onClickDelete(todo)}
        />
      }).reduce((acc, cur, i) => [...acc, <hr key={`hr${i}`} />, cur], [])}
    </>
  )
}

export default TodoList
