import { useSelector } from 'react-redux';
import { selectActiveList, selectLists } from '../../store/todo/todo.selectors';
import Accordion from '../ul/Accordion';
import ListTasks from '../lists/ListTasks';
import ListSummary from '../lists/ListSummary';

const TasksList: React.FC = () => {
  const activeList =  useSelector(selectActiveList);
  let todos = useSelector(selectLists);
  let todosList = todos ? Object.values(todos) : null
  if (activeList && todosList) {
     todosList = todosList.filter(todo => todo.id === activeList)
  }
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
