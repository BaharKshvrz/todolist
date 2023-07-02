import { useDispatch } from "react-redux";
import { List } from "../../store/todo/todo.types";
import { removeTodoList, updateTodoList } from "../../store/todo/todo.slice";
import { useState } from "react";
import PopupModal from "../modal/PopupModal";
import Button from "../ul/Button";
import useDebounce from "../hooks/useDebounce";
import Input from "../ul/Input";
import IconDeleteBin5Line from "../../assets/icons/Remove";
import IconEdit from "../../assets/icons/Edit";

type TodoItemProps = {
  list: List,
};

const TodoItem: React.FC<TodoItemProps> = ({ list }) => {
  const [showModal, setShowModal] = useState(false);
  const [editable, setEditable] = useState(false);
  const [todoTitle, setTodoTitle] = useState(list.name);  
  const dispatch = useDispatch();

  useDebounce(() => {
     setEditable(!editable); 
     dispatch(updateTodoList({...list, name: todoTitle})) 
  }, 1000, [ todoTitle ]);

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

  return (
    <>
      <div className="flex justify-between border-b p-2 hover:bg-gray-50">
        <div className="flex items-center py-2 font-base">
          {  editable ? 
                       <Input 
                        type="text"
                        value={todoTitle}
                        className="block w-full p-2 text-gray-900 border border-gray-200 rounded-lg bg-white text-md"
                        onChange={e => setTodoTitle(e.target.value)}
                        />
                     : list.name
          }
        </div>
        <div className="flex items-center justify-end">
            <Button
              type="button"
              className="bg-gray-50 flex items-center justify-center p-2 ml-1 rounded-lg text-gray-500 text-sm"
              onClick={onEditList}
            >
             <IconEdit/>
            </Button>
            <Button
              type="button"
              className="bg-gray-50 flex items-center justify-center p-2 ml-1 rounded-lg text-gray-500 text-sm"
              onClick={OnDelteHandler}
            >
            <IconDeleteBin5Line/>
            </Button>
        </div>
      </div>
      { showModal && <PopupModal onCancel={handleCloseModal} onDelete={handleConfirmDelete}/>}
    </>

  )
}

export default TodoItem

