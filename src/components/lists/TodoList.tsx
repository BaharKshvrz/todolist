
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem"
import { selectLists } from "../../store/todo/todo.selectors";
import IconSearch from "../../assets/icons/Search";
import Input from "../UI/Input";

type TodoListProps = {
  handleShowTasks: (id: string) => void;
};

const TodoList : React.FC<TodoListProps> = ({handleShowTasks}) => {
  let todos = useSelector(selectLists);
  let todosList = todos ? Object.values(todos) : null

  return (
    <>
        <div className="flex flex-col justify-center items-center">
          <div className="relative shadow-sm sm:rounded-lg bg-white my-2">
            <h1 className="text-base font-extrabold">My Lists:</h1>
            <label htmlFor="table-search" className="sr-only">Search</label>
            <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
               <IconSearch width="1em" height="1em" className="text-gray-400"/>
            </div>
            <Input 
              type="text"
              className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search"
              />
          </div>
          </div>

          <div className="w-full">
            { todosList && todosList.map((todo, index) => 
              <TodoItem
                 key= {index}
                 list= {todo}
                 handleShowTasks={handleShowTasks}
              />
            )}
          </div>

       </div>
  </>
  )
}

export default TodoList
