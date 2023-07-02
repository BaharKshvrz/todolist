import React from 'react'
import TasksList from '../tasks/TasksList';


const ListContent: React.FC = () => {
  return (
    <div className="flex flex-col m-2 mt-0 bg-white w-full rounded-tl-lg p-5 border-sm shadow-sm">
         <TasksList/>
   </div>
  )
}

export default ListContent
