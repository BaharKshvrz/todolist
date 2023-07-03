import { useSelector } from 'react-redux';
import { selectLists } from '../../store/todo/todo.selectors';
import Accordion from '../ul/Accordion';
import ListTasks from '../lists/ListTasks';
import ListSummary from '../lists/ListSummary';

const TasksList: React.FC = () => {
  let todos = useSelector(selectLists);
  let todosList = todos ? Object.values(todos) : null

  return (
    <>
       <div className="mt-5">
        { todosList && todosList.map((task) => 
           <Accordion 
                key={task.id}
                title={task.name}
                classes="bg-black rounded-sm"
                summary={<ListSummary listId={task.id}/>}
            >
              <div className="bg-white border p-1">
                 <ListTasks listId={task.id}/>
              </div>
           </Accordion>
        )}
        </div>
    </>
  )
}

export default TasksList
