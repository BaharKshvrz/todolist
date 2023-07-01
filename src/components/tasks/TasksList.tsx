import { useSelector } from 'react-redux';
import { RootState, selectTasksForList } from '../../store/todo/todo.selectors';
import TaskItem from './TaskItem';

type AddTaskProps = {
  listId: string,
};

const TasksList: React.FC<AddTaskProps> = ({ listId }) => {
  const tasks = useSelector((state: RootState) => selectTasksForList(listId)(state));
  if (!listId) return <div className="flex justify-between items-center rounded-md bg-red-50 p-5 m-2">No List was Selected!</div>;

  return (
    <div className="p-1 m-1">
       { tasks && tasks.map((task, index) => 
              <TaskItem
                 key= {index}
                 task= {task}
                 listId={listId}
              />
         )}
    </div>
  )
}

export default TasksList
