import { useDispatch } from "react-redux";
import { List } from "../../store/todo/todo.types";
import { removeTodoList, updateTodoList } from "../../store/todo/todo.slice";
import { useRef, useState } from "react";
import PopupModal from "../modal/PopupModal";
import Button from "../UI/Button";
import useDebounce from "../hooks/useDebounce";
import Input from "../UI/Input";
import IconListSettingsLine from "../../assets/icons/ListSetting";
import IconDeleteBin5Line from "../../assets/icons/Remove";
import IconArrowsHamburger from "../../assets/icons/IconArrowsHamburger";


type TodoItemProps = {
  list: List,
  handleShowTasks: (id: string) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({list, handleShowTasks}) => {
  const [showModal, setShowModal] = useState(false);
  const [editable, setEditable] = useState(false);
  const [todoTitle, setTodoTitle] = useState(list.name);  
  const dispatch = useDispatch();
  useDebounce(() => {setEditable(!editable); dispatch(updateTodoList({...list, name: todoTitle})) }, 2000, [ todoTitle ]);

  const onEditList = () => {
    setEditable(!editable)
  }

  const handleCloseModal = () => {
     setShowModal(false);
  };

  const handleConfirmDelete = () => {
     setShowModal(false);
     dispatch(removeTodoList(list.id));
  };
  
  const OnDelteHandler = () => {
    setShowModal(true);
  }

  const showTasks = () => {
    handleShowTasks(list.id)
  }
  
  return (
    <>
      <div className="flex flex-col border-b p-3 hover:bg-gray-100">
        <div className="flex items-center py-3">
         <IconArrowsHamburger className="mr-3 hover:cursor-pointer" onClick={showTasks}/>
          {  editable ? 
                       <Input 
                        type="text"
                        value={todoTitle}
                        className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                        onChange={e => setTodoTitle(e.target.value)}
                        />
                     : list.name
          }
        </div>
        <div className="flex items-center">
         <Button
           type="button"
           className="bg-red-500 flex items-center justify-center p-2 rounded-lg text-white text-sm"
           onClick={OnDelteHandler}
         >
         <IconDeleteBin5Line/> Delete
        </Button>
      
        <Button
           type="button"
           className="bg-orange-500 flex items-center justify-center p-2 ml-1 rounded-lg text-white text-sm"
           onClick={onEditList}
        >
          <IconListSettingsLine/>  Edit
        </Button>
        </div>
      </div>
      { showModal && <PopupModal onCancel={handleCloseModal} onDelete={handleConfirmDelete}/>}
    </>

  )
}

export default TodoItem

