import { useSelector } from 'react-redux';
import { RootState, selectTasksForList } from '../../store/todo/todo.selectors';
import TaskItem from './TaskItem';
import Accordion from '../UI/Accordion';
import NoDataFound from '../layout/NotDataFound';
import TextualComponent from '../UI/TextualComponent';

type AddTaskProps = {
  listId: string,
};

const TasksList: React.FC<AddTaskProps> = ({ listId }) => {
  const tasks = useSelector((state: RootState) => selectTasksForList(listId)(state));
  const currentTasks = tasks.filter(task => task.completion === false) || null;
  const completedTasks = tasks.filter(task => task.completion === true) || null;

  if (!listId) return ( 
               <TextualComponent 
                  elemType="div" 
                  classes="flex items-center justify-center mx-auto w-full">
                   <hr className="w-full h-px my-8 bg-gray-200 border-0"/>
                   <span className="absolute px-2 text-lg italic font-bold text-gray-900  bg-white">
                     No List was Selected !
                   </span>
                </TextualComponent>
                );
  
  return (
    <>
        { currentTasks && currentTasks.map((task, index) => 
              <TaskItem
                 key= {index}
                 task= {task}
                 listId={listId}
              />
         )}

        <div className="mt-5">
               <Accordion title={`Completed ${completedTasks.length}`}>
                    <div className="bg-white border">
                        { completedTasks && completedTasks.map((task, index) => 
                          <TaskItem
                            key= {index}
                            task= {task}
                            listId={listId}
                           />
                        )}
                    </div>
                </Accordion>
        </div>
    </>
  )
}

export default TasksList
