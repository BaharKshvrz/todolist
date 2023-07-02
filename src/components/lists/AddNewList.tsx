import { FormEvent, useState } from 'react'
import { List } from '../../store/todo/todo.types';
import { useDispatch } from 'react-redux';
import { addTodoList } from '../../store/todo/todo.slice';
import uuid from 'react-uuid';
import Input from '../ul/Input';
import IconAdd from '../../assets/icons/Add';

const AddNewList = () => {
  const [listName, setlistName] = useState("");  
  const dispatch = useDispatch();

  const addHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (listName) {
       let newList: List = {
         name: listName,
         id: uuid(),  
         tasks: [] 
       };
      dispatch(addTodoList(newList));
      setlistName("");
    }
  }

  return (
    <>
      <form onSubmit={addHandler}>
         <div className="flex justify-center items-center w-full">
         <Input 
              type="text"
              value={listName} 
              placeholder="Add New List"
              onChange={e => setlistName(e.target.value)}
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg sm:text-sm focus:ring-blue-500 focus:border-blue-500"
        />
         <button 
             type="submit" 
             className="bg-black text-white font-medium p-3 m-2 border rounded-md hover:bg-white hover:text-black hover:border">
             <IconAdd/>
        </button>
        </div>
      </form>
    </>
  )
}

export default AddNewList
