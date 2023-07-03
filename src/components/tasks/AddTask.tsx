import { FormEvent, useState } from 'react'
import Input from '../ul/Input'
import Button from '../ul/Button';
import IconCalendar from '../../assets/icons/Calendar';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Task } from '../../store/todo/todo.types';
import uuid from 'react-uuid';
import { useDispatch } from 'react-redux';
import { addTaskToList } from '../../store/todo/todo.slice';
import IconAdd from '../../assets/icons/Add';
import SelectBox from '../ul/SelectBox';
import { priorityList } from '../../data/priorityList';

type AddTaskProps = {
   listId: string,
};

const AddTask: React.FC<AddTaskProps> = ({listId}) => {
  const dispatch = useDispatch();
  const [ taskTitle, setTaskTitle ] = useState("");  
  const [selectedOption, setSelectedOption] = useState("");
  const handleSelectChange = (value: string) => {
      setSelectedOption(value);
  };
  const [ selectedDate, setSelectedDate ] = useState<Date | null>(null);
  const handleDateChange = (value: Date) => {
     setSelectedDate(value);
  };

  const handleAddTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (taskTitle) {
       let newTask: Task = {
          title: taskTitle,
          id: uuid(),  
          completion: false,
          priority: selectedOption ? selectedOption : "medium",
          date: selectedDate!
       };
      dispatch(addTaskToList({listId: listId!,task: newTask}));
      setTaskTitle("");
      setSelectedDate(null);
    }
  }
  return (
          <form onSubmit={handleAddTask}>
              <div className="flex items-center space-x-1 hover:cursor-pointer">
                 <label htmlFor="table-search" className="sr-only">Insert</label>
                 <div className="relative mt-1">
                       <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <IconAdd width="1em" height="1em" className="text-gray-400"/>
                      </div>
                      <Input 
                        type="text"
                        value={taskTitle}
                        placeholder="Add New Task"
                        onChange={e => setTaskTitle(e.target.value)}
                        className="block p-2 pl-10 text-sm w-full text-gray-900 border border-gray-300 rounded-lg"
                      />
                 </div>
                 <SelectBox 
                      options={priorityList} 
                      value={selectedOption}
                      onChange={handleSelectChange}
                      classes="w-20"
                 />    
                <DatePicker
                   selected={selectedDate}
                   onChange={handleDateChange}
                   dateFormat="dd/MM/yyyy"
                   customInput={<IconCalendar/>}
                 />
                 <p className="text-black ml-2">
                   { selectedDate?.toLocaleDateString('en-GB') }
                 </p>
                <Button
                  type="submit"
                  disabled={taskTitle && listId ? false : true}
                  className="bg-white w-16 flex items-center justify-center p-2 ml-1 rounded-lg text-black text-sm border"
                 >
                  Add
               </Button>
              </div>
         </form>
       )
 }

export default AddTask
