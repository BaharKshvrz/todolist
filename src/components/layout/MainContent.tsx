import React from 'react'
import TaskForm from '../tasks/AddTask';

type MainContentProps = {
   showTasks: boolean,
   todoId: string;
};

const MainContent: React.FC<MainContentProps> = ({showTasks, todoId}) => {
  return (
    <div className="flex justify-center bg-white w-full mx-5 border-sm shadow-sm">
          {todoId}
          <TaskForm/>

    </div>
  )
}

export default MainContent
