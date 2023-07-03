import { useSelector } from "react-redux";
import IconArrowRightShort from "../../assets/icons/ArrowRight";
import { RootState, selectListById } from "../../store/todo/todo.selectors";
import Fraction from "../../libs/mathHelper";
import { List } from "../../store/todo/todo.types";

function getCountOfPriority(list: List, type: string): number {
   return list.tasks.filter(todo => todo.priority === type).length 
}

type MainContentProps = {
   listId: string;
};

const ListSummary: React.FC<MainContentProps> = ({listId}) => {
  const listData =  useSelector((state: RootState) => selectListById(listId)(state));
  /* calculate the count of tasks */
  const listCount = listData.tasks.length;
  const completedTask = listData.tasks.filter(todo => todo.completion === true) 
  const completedCount = Fraction(completedTask.length, listCount);
  const uncompletedCount = Fraction(listCount - completedTask.length, listCount)

  /* calculate the count of priorities */
  const highPriority = getCountOfPriority(listData, "high")
  const mediumPriority = getCountOfPriority(listData, "medium")
  const lowPriority = listCount - highPriority - mediumPriority;

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between w-full">
      <div className="flex justify-center items-center min-w-fit">
          <IconArrowRightShort/>
          <span className="pl-1 pr-2 font-bold text-base min-w-fit text-gray-500">
            {listData.name}
         </span>
      </div>

       <div className="overflow-x-auto w-full">
         <table className="min-w-full divide-y divide-gray-200 text-center">
          <thead className="text-xs text-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3">
              </th>
              <th scope="col" className="px-6 py-3">
                  Completion Status
              </th>
              <th scope="col" className="px-6 py-3">
                  Priority
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <th className="p-1"></th>
                <td>  
                     <div className="flex h-6 px-20">
                       <div className={`w-${uncompletedCount} h-full grow bg-red-500`}></div>
                       <div className={`w-${completedCount} h-full grow bg-green-500`}></div>
                    </div>
                </td>
                <td>
                <div className="flex h-6 px-20 justify-center space-x-1 font-thin text-sm">
                   <p className="flex items-start justify-center">
                      High <span className="w-6 h-6 rounded-full text-white bg-red-500">{highPriority}</span>
                  </p>
                  <p className="flex items-start justify-center">
                      Medium <span className="w-6 h-6 rounded-full text-white bg-blue-500">{mediumPriority}</span>
                  </p>
                  <p className="flex items-start justify-center">
                      Low <span className="w-6 h-6 rounded-full text-white bg-green-500">{lowPriority}</span>
                  </p>
                </div>
                </td>
            </tr>
          </tbody>
        </table>
       </div>
    </div>

    <div className="text-gray-400 ml-5">
       <h6>{listData.tasks.length} tasks</h6>
    </div>
    </div>
  );
};

export default ListSummary;
