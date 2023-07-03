
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem"
import { selectLists } from "../../store/todo/todo.selectors";
import IconSearch from "../../assets/icons/Search";
import Input from "../ul/Input";
import { ChangeEvent, useState } from "react";
import { List} from "../../store/todo/todo.types";
import { inActiveTodoList } from "../../store/todo/todo.slice";
import { useDispatch } from "react-redux";

const TodoList : React.FC = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  let todos = useSelector(selectLists);
  let todosList = todos ? Object.values(todos) : null
  let filteredList: List[] = [];

  // Filter the data based on the search term
  if (todosList) {
        filteredList = todosList.filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
  }

  // Handle search term input change
  const handleSearchTermChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Handle search term input change
  const handleShowAllListas = () => {
     dispatch(inActiveTodoList(null));
  };
  
  return (
    <>
        <div className="flex flex-col items-center">
          <div className="relative flex flex-col w-full mb-3 shadow-sm sm:rounded-lg bg-white my-2">
            <h1 
                 className="text-base font-bold text-amber-900 hover:cursor-pointer" 
                 onClick={handleShowAllListas}>
              My Lists:
           </h1>
            <label htmlFor="table-search" className="sr-only">Search</label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
               <IconSearch width="1em" height="1em" className="text-gray-400"/>
            </div>
            <Input 
              type="text"
              onChange={handleSearchTermChange}
              className="block p-2 pl-10 text-sm w-full text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Search"
              />
          </div>
          </div>

          <div className="w-full">
            { filteredList.length > 0  && filteredList.map((todo, index) => 
              <TodoItem
                  key= {index}
                  list= {todo}
              />
            )}
          </div>
      </div>
  </>
  )
}

export default TodoList
