import { ArrowRightIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import { updateStatus } from '../../redux/features/tasks/tasksSlice';

const TaskCard = ({ task }) => {

  const dispatch = useDispatch()

  let updatedStatus;

  if (task.status === 'pending') {
    updatedStatus = 'running'
  }
  else if (task.status === 'running') {
    updatedStatus = 'done'
  }
  else {
    updatedStatus = 'archive'
  }

  return (
    <div className="bg-secondary/10 rounded-md p-5">
      <h1>{task?.title}</h1>
      <p className="mb-3">{task?.description}</p>
      <div className="flex justify-between mt-3">
        <div className="flex gap-3">
          <button onClick={() => dispatch(removeTask(task.id))} title="Delete">
            <TrashIcon className="h-5 w-5 text-red-500" />
          </button>
          <button
            onClick={() =>
              dispatch(updateStatus({ id: task.id, status: updatedStatus }))
            }
            title="Update status"
          >
            <ArrowRightIcon className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
