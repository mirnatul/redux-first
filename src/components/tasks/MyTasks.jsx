import { useSelector, useDispatch } from 'react-redux/es/exports';
import { CheckIcon, DocumentMagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useEffect } from 'react';
import { userTasks, updateStatus } from '../../redux/features/tasks/tasksSlice';

const MyTasks = () => {
  const { tasks, userSpecificTasks } = useSelector((state) => state.tasksSlice)
  const { name: userName } = useSelector((state) => state.userSlice)
  // console.log(name);


  const dispatch = useDispatch()
  // we have to use useEffect because we have dependencies
  useEffect(() => {
    dispatch(userTasks(userName))
  }, [userName, dispatch, tasks]) // for every task change >> very very important

  return (
    <div>
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        {userSpecificTasks?.map(item => (
          <div
            key={item.id}
            className="bg-secondary/10 rounded-md p-3 flex justify-between"
          >
            <h1>{item.title}</h1>
            <div className="flex gap-3">
              <button className="grid place-content-center" title="Details">
                <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
              </button>
              <button onClick={() => dispatch(updateStatus({ id: item.id, status: 'done' }))} className="grid place-content-center" title="Done">
                <CheckIcon className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTasks;
