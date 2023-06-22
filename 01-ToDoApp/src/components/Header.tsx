import { type TodoTitle } from '../types'
import { CreateToDo } from './CreateToDo'

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void
}

// eslint-disable-next-line react/prop-types
export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header className="header">
      <h1>ToDoList <img style={{ width: '60px', height: 'auto' }} src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png'/></h1>
      <CreateToDo saveTodo={onAddTodo}/>
    </header>
  )
}
