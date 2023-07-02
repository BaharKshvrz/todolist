import "react-datepicker/dist/react-datepicker.css";
import AddTask from '../tasks/AddTask';
import Checkbox from "../ul/Checkbox";
import { useSelector } from "react-redux";
import { RootState, selectTasksForList } from "../../store/todo/todo.selectors";
import { useDispatch } from "react-redux";
import { removeTaskFromList, toggleTaskCompletion, updateTaskInList } from "../../store/todo/todo.slice";
import Time from "../../libs/timeHelper";
import { priorityColors } from "../../data/priorityList";
import IconDeleteBin5Line from "../../assets/icons/Remove";
import { useState } from "react";
import Input from "../ul/Input";
import { Task } from "../../store/todo/todo.types";
import useDebounce from "../hooks/useDebounce";

type MainContentProps = {
    listId: string;
};

const ListTasks: React.FC<MainContentProps> = ({ listId }) => {
  const tasks = useSelector((state: RootState) => selectTasksForList(listId)(state));
  const [editItem, setEditItem] = useState("");
  const [taskTitle, setTaskTitle] = useState("");
  const dispatch = useDispatch();

  useDebounce(() => {
    setEditItem(""); 
    let selectedTask = tasks.filter(task => task.id === editItem);
    let updatedItem = {...selectedTask[0], title: taskTitle}
    dispatch(updateTaskInList({listId: listId!, task: updatedItem}));
 }, 1000, [ taskTitle ]);

  const handleCheckboxChange = (taskId: string) => {
       dispatch(toggleTaskCompletion({ listId,  taskId: taskId }));
  };

  const removeTaskHandler = (taskId: string) => {
    dispatch(removeTaskFromList({ listId,  taskId }));
  }

  const handleEditTask = (task: Task) => {
    setEditItem(task.id);
    setTaskTitle(task.title)
  }

  return (
       <div className="overflow-x-auto">
         <table className="min-w-full divide-y divide-gray-200 text-center">
          <thead className="text-xs text-gray-700">
                        <tr>
                          <th scope="col" className="px-6 py-3">
                            Task
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Priority
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Due Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Reamainig
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Action
                        </th>
                        </tr>
          </thead>
          <tbody className="text-center text-sm text-gray-600 font-thin">
           { tasks && tasks.map((task) => 
              <tr key={task.id} className="border-b-2 p-5 border-gray-100">
                  <th className="text-left">
                  <div className="flex items-center w-full">
                     <Checkbox
                           value={task.completion.toString()}
                           label=""
                           checked={task.completion}
                           onChange={() => handleCheckboxChange(task.id)}
                           htmlTag={task.completion.toString()}
                           classes="w-4 h-4 text-gray-400 bg-gray-100 border-gray-300 rounded hover:cursor-pointer focus:ring-gray-500 focus:ring-1"
                           labelCalsses=""
                     />
                    <div className="text-black hover:cursor-pointer w-full ml-2" onClick={() => handleEditTask(task)}>
                       { editItem === task.id ?  (
                                <Input 
                                      type="text"
                                      value={taskTitle}
                                      className="block w-full p-2 text-gray-900 border border-gray-200 rounded-lg bg-white text-md"
                                      onChange={e => setTaskTitle(e.target.value)}
                                      />
                                    )
                          :  task.completion ? <s>{task.title}</s> : task.title
                      }
                    </div>
                  </div>
                 
                   </th>
                   <td>
                      <div className="flex h-8 px-5">
                        <div className={`w-2 h-full grow bg-${task.completion ? "green": "red"}-500`}></div>
                      </div>
                  </td>
                  <td>
                      <div className="flex h-8 px-5">
                         <div className={`w-2 h-full grow bg-${priorityColors[task.priority]}-500`}></div>
                      </div>
                  </td>
                  <td>
                      { task.date ? 
                                  ( 
                                    <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
                                      <Time date={new Date(task.date)}/> 
                                    </span>
                                  ) : ""
                        }      
                  </td>
                  <td className="p-1 text-sm">
                    3days
                  </td>
                  <td className="p-1 flex justify-center items-center space-x-1 hover:cursor-pointer">
                    <IconDeleteBin5Line onClick={() => removeTaskHandler(task.id)}/>
                  </td>
             </tr>
            )}
            <tr className="border-b-2 border-gray-100 border-none bg-gray-50">
               <td colSpan={54} className="text-left">
                   <AddTask listId={listId}/>
                </td>
            </tr>
          </tbody>
        </table>
       </div>
  );
};

export default ListTasks;
