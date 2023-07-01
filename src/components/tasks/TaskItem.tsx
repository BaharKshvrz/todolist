import React, { useState } from 'react'
import { Task } from '../../store/todo/todo.types';
import IconCalendar from '../../assets/icons/Calendar';
import Time from '../../libs/timeHelper';
import Checkbox from '../UI/Checkbox';
import { toggleTaskCompletion } from '../../store/todo/todo.slice';
import { useDispatch } from 'react-redux';

type TodoItemProps = {
    task: Task,
    listId: string,
  };

const TaskItem: React.FC<TodoItemProps> = ({listId, task}) => {
  const [completionChecked, setCompletionChecked] = useState(false);
  const dispatch = useDispatch();

  const handleCheckboxChange = (value: string, checked: boolean) => {
       dispatch(toggleTaskCompletion({ listId,  taskId: task.id }));
       setCompletionChecked(!checked);
  };

 return (
    <div className="flex flex-col w-full min-h-14 py-1 px-5 mb-3 text-gray-500 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
      <div className="flex items-center mb-4">
        <Checkbox
             value={task.completion.toString()}
             label={task.title}
             checked={completionChecked}
             onChange={handleCheckboxChange}
             htmlTag={task.completion.toString()}
             classes="w-4 h-4 text-gray-400 bg-gray-100 border-gray-300 rounded hover:cursor-pointer focus:ring-gray-500 focus:ring-1"
             labelCalsses='w-full ml-2 text-base font-semibold text-gray-500 text-lg'
             />
       </div>
       { task.date ? 
                   <time className="flex items-center text-base font-thin text-gray-900"><IconCalendar/>  Due <Time date={new Date(task.date)}/> </time> 
                   : ""
         }
    </div>
  )
}

export default TaskItem
