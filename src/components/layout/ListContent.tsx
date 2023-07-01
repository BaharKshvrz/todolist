import React from 'react'
import TaskForm from '../tasks/AddTask';
import TasksList from '../tasks/TasksList';

type MainContentProps = {
   todoId: string;
};

const ListContent: React.FC<MainContentProps> = ({todoId}) => {
  return (
    <div className="flex flex-col bg-white w-full pt-0 p-5 border-sm shadow-sm">
          <TaskForm listId={todoId}/>
          <TasksList listId={todoId}/>
   </div>
  )
}

export default ListContent
