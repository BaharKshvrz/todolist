import { ReactNode} from "react";

import AddNewTodo from '../lists/AddNewTodo';
import TodoList from '../lists/TodoList';

type SidebarProps = {
   handleShowTasks: (id: string) => void;
 };

// Using Compound Components here
const SidebarContent = (props: {children: ReactNode}) => { 
   return <div className="flex flex-col m-2 p-5 mt-0 bg-white rounded-tr-lg shadow-sm border border-gray-200"> {props.children} </div>
};
SidebarContent.AddNewTodo = AddNewTodo;
SidebarContent.TodoList = TodoList;

 const Sidebar: React.FC<SidebarProps> = ({handleShowTasks}) => {
   return (
     <SidebarContent>
        <SidebarContent.AddNewTodo></SidebarContent.AddNewTodo>
        <SidebarContent.TodoList handleShowTasks={handleShowTasks}></SidebarContent.TodoList>
     </SidebarContent>
   );
}

export default Sidebar;