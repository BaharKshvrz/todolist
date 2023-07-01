
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem"
import { selectLists } from "../../store/todo/todo.selectors";

type TodoListProps = {
  handleShowTasks: (id: string) => void;
};

const TodoList : React.FC<TodoListProps> = ({handleShowTasks}) => {
  let todos = useSelector(selectLists);
  let todosList = todos ? Object.values(todos) : null

  return (
    <>
        <div className="flex justify-center items-center">
          <div className="relative shadow-md sm:rounded-lg">
         <div className="p-4 bg-gray-200">
         <label htmlFor="table-search" className="sr-only">Search</label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
            </div>
            <input type="text"
             id="table-search"
             className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for name"/>
           </div>
        </div>
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
