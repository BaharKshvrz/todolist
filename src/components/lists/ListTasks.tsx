import "react-datepicker/dist/react-datepicker.css";
import AddTask from '../tasks/AddTask';
import Checkbox from "../ul/Checkbox";
import { useSelector } from "react-redux";
import { RootState, selectTasksForList } from "../../store/todo/todo.selectors";
import { useDispatch } from "react-redux";
import { removeTaskFromList, toggleTaskCompletion } from "../../store/todo/todo.slice";
import { priorityColors } from "../../data/priorityList";
import IconDeleteBin5Line from "../../assets/icons/Remove";
import { RemainingDays, Time } from "../../libs/timeHelper";

type MainContentProps = {
    listId: string;
};

const ListTasks: React.FC<MainContentProps> = ({ listId }) => {
  const todoTasks = useSelector((state: RootState) => selectTasksForList(listId)(state));
  const incompletedTask = todoTasks.filter(todo => todo.completion === false) 
  const completedTask = todoTasks.filter(todo => todo.completion === true) 
  let completedTaskTr = completedTask.length ? (<tr>
                                                   <td colSpan={6} className="text-left py-2 font-semibold bg-gray-100">
                                                        Completed!
                                                    </td>
                                                 </tr>)
                                              : "";
  const dispatch = useDispatch();

  const handleCheckboxChange = (taskId: string) => {
       dispatch(toggleTaskCompletion({ listId,  taskId: taskId }));
  };

  const removeTaskHandler = (taskId: string) => {
    dispatch(removeTaskFromList({ listId,  taskId }));
  }
  return (
       <div className="overflow-x-auto">
         <table className="min-w-full divide-y divide-gray-200 text-center">
          <thead className="text-xs text-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 text-left">
                  Task
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
           { incompletedTask && incompletedTask.map((task) => 
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
                    <div className="text-black w-full ml-2">
                       { task.completion ? <s className="font-bold">ccc {task.title}</s> : task.title }
                    </div>
                  </div>
                  </th>
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
                     {task.date ? <RemainingDays date={new Date(task.date)}/> : "" }
                  </td>
                  <td className="p-1 flex justify-center items-center space-x-1 hover:cursor-pointer">
                    <IconDeleteBin5Line onClick={() => removeTaskHandler(task.id)}/>
                  </td>
             </tr>
            )}
           {completedTaskTr}
           { completedTask && completedTask.map((task) => 
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
                    <div className="text-black w-full ml-2">
                      { task.completion ? <s> {task.title} </s> : task.title }
                    </div>
                  </div>
                  </th>
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
                     {task.date ? <RemainingDays date={new Date(task.date)}/> : "" }
                  </td>
                  <td className="p-1 flex justify-center items-center space-x-1 hover:cursor-pointer">
                    <IconDeleteBin5Line onClick={() => removeTaskHandler(task.id)}/>
                  </td>
             </tr>
            )}

            <tr className="border-b-2 border-gray-100 border-none bg-gray-50">
               <td colSpan={4} className="text-left">
                   <AddTask listId={listId}/>
                </td>
            </tr>
          </tbody>
        </table>
       </div>
  );
};

export default ListTasks;
