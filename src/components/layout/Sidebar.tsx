import { ReactNode} from "react";
import AddNewTodo from '../lists/AddNewList';
import TodoList from '../lists/TodoList';

// Using Compound Components here
const SidebarContent = (props: {children: ReactNode}) => { 
   return <div className="flex flex-col m-2 p-5 mt-0 bg-white rounded-tr-lg shadow-sm border border-gray-200">
            {props.children} 
          </div>
};
SidebarContent.AddNewTodo = AddNewTodo;
SidebarContent.TodoList = TodoList;

 const Sidebar: React.FC = () => {
   return (
     <SidebarContent>
        <SidebarContent.AddNewTodo></SidebarContent.AddNewTodo>
        <SidebarContent.TodoList></SidebarContent.TodoList>
     </SidebarContent>
   );
}

export default Sidebar;