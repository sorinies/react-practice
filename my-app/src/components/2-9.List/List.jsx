import React from 'react'

export default function List() {
  // const numbers = [1,2,3,4,5];
  // return (
  //   <div>
  //     {numbers.map(item => (
  //       <li key={item.toString()}>{item}</li>
  //     ))}
  //   </div>
  // )
  const todos = [
    {id: 1, text: 'Drink Beer'},
    {id: 2, text: 'Drink Water'},
    {id: 3, text: 'Drink Coke'},
    {id: 4, text: 'Drink Drink'},
    {id: 5, text: 'Drink Sleep'}
  ]

  const Item = (props) => {
    return <li>{props.text}</li> // {props.key} ... key는 전달되지 않음.
  }

  const todoList = todos.map(todo => <Item key={todo.id} {...todo} />)

  return (
    <>
      {todoList}
    </>
  )
}
