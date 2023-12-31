import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import MyTasks from '../components/tasks/MyTasks';
import TaskCard from '../components/tasks/TaskCard';
import AddTaskModal from './../components/tasks/AddTaskModal';
import { useSelector } from 'react-redux';

const Tasks = () => {

  const [isOpen, setIsOpen] = useState(false)

  const { tasks } = useSelector((state) => state.tasksSlice)

  const pendingTasks = tasks.filter(item => item.status === 'pending')
  const runningTasks = tasks.filter(item => item.status === 'running')
  const doneTasks = tasks.filter(item => item.status === 'done')
  // console.log(tasks);

  return (
    <div className="h-screen grid grid-cols-12">
      <div className="col-span-9 px-10 pt-10">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-semibold text-3xl">Tasks</h1>
          </div>
          <div className="flex gap-5">
            <button className="border-2 border-secondary/20 hover:border-primary hover:bg-primary rounded-xl h-10 w-10  grid place-content-center text-secondary hover:text-white transition-all">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
            <button className="border-2 border-secondary/20 hover:border-primary hover:bg-primary rounded-xl h-10 w-10 grid place-content-center text-secondary hover:text-white transition-all">
              <BellIcon className="h-6 w-6" />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="btn btn-primary">Add Task</button>
            <AddTaskModal isOpen={isOpen} setIsOpen={setIsOpen}></AddTaskModal>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 mt-10">
          <div className="relative h-[800px] overflow-auto">
            <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
              <h1>Up Next</h1>
              <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                {pendingTasks.length}
              </p>
            </div>
            <div className="space-y-3">
              {pendingTasks.map(item => (
                <TaskCard key={item.id} task={item} />
              ))}
            </div>
          </div>
          <div className="relative h-[800px] overflow-auto">
            <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
              <h1>In Progress</h1>
              <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                {runningTasks.length}
              </p>
            </div>
            <div className="space-y-3">
              {runningTasks.map(item => (
                <TaskCard key={item.id} task={item} />
              ))}
            </div>
          </div>
          <div className="relative h-[800px] overflow-auto">
            <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
              <h1>Up Next</h1>
              <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                {doneTasks.length}
              </p>
            </div>
            <div className="space-y-3">
              {doneTasks.map(item => (
                <TaskCard key={item.id} task={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3 border-l-2 border-secondary/20 px-10 pt-10">
        <MyTasks />
      </div>
    </div>
  );
};

export default Tasks;
