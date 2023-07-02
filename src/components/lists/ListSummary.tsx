import { useSelector } from "react-redux";
import IconArrowRightShort from "../../assets/icons/ArrowRight";
import { RootState, selectListById } from "../../store/todo/todo.selectors";

type MainContentProps = {
  listId: string;
};

const ListSummary: React.FC<MainContentProps> = ({listId}) => {
  const listData =  useSelector((state: RootState) => selectListById(listId)(state));

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between w-full">
      <div className="flex justify-center items-center">
         <IconArrowRightShort/>
         <div className="pl-1 pr-2 font-bold text-base min-w-fit text-gray-500">
           {listData.name}
         </div>
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
              <th scope="col" className="px-6 py-3">
                  Due Date
              </th>
              <th scope="col" className="px-6 py-3">
                Reamainig
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <th className="p-1"> </th>
                <td>
                      <div className="flex h-5 px-20">
                      <div className="w-2/3 h-full grow bg-red-500"></div>
                      <div className="w-1/3 h-full grow bg-green-500"></div>
                    </div>
                </td>
                <td>
                <div className="flex h-5 px-20">
                      <div className="w-2/5 h-full grow bg-blue-500"></div>
                      <div className="w-1/5 h-full grow bg-green-500"></div>
                      <div className="w-2/5 h-full grow bg-red-500"></div>
                    </div>
                </td>
                <td className="p-1">
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                      2-20 July
                    </span>
                </td>
                <td className="p-1 text-sm">
                    3days
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
