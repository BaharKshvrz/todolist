import React from 'react'
import TaskForm from '../tasks/AddTask';
import TasksList from '../tasks/TasksList';

type MainContentProps = {
   showTasks: boolean,
   todoId: string;
};

const MainContent: React.FC<MainContentProps> = ({showTasks, todoId}) => {
  return (
    <div className="flex flex-col bg-white w-full mx-5 border-sm shadow-sm">
          <TaskForm listId={todoId}/>
          <TasksList listId={todoId}/>
   </div>
  )
}

export default MainContent
