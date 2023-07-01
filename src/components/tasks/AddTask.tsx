import { useState } from 'react'
import Input from '../UI/Input'
import Button from '../UI/Button';
import IconCalendar from '../../assets/icons/Calendar';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddTask = () => {
  const [taskTitle, setTaskTitle] = useState("");  
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
     setSelectedDate(date);
  };

  return (
    <>
      <div className="flex flex-col w-full h-28 p-2 m-5 text-white bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
            <Input 
                  type="text"
                  value={taskTitle}
                  placeholder="Add Task"
                  className="w-full h-10 p-3 text-gray-900 bg-white border border-gray-300 rounded-lg sm:text-md focus:ring-gray-500 focus:border-gray-500"
                  onChange={e => setTaskTitle(e.target.value)}
               />
            <div className="flex justify-between items-center bg-gray-100 p-2">
              <div className="flex justify-center items-center">
                 <DatePicker
                   selected={selectedDate}
                   onChange={handleDateChange}
                   dateFormat="dd/MM/yyyy"
                   customInput={ <IconCalendar className="bg-gray-600"/>}
                 />
                 <p className="text-black ml-2">
                   { selectedDate?.toLocaleDateString('en-GB') }
                 </p>
              </div>

              <div>
                <Button
                  type="button"
                  className="bg-white w-16 flex items-center justify-center p-2 ml-1 rounded-lg text-black text-sm border"
                 >Add
               </Button>
             </div>
            </div>
      </div>
    </>
  )
}

export default AddTask
