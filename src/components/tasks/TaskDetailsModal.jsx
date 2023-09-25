import React from 'react';
import Modal from '../ui/Modal';
import { useSelector } from 'react-redux/es/exports';

const TaskDetailsModal = ({ isOpen, setIsOpen, id }) => {

    const { tasks } = useSelector((state) => state.tasksSlice)
    const task = tasks.find(item => item.id === id)

    return (
        <div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={task?.title}>
                {task?.description}
            </Modal>
        </div>
    );
};

export default TaskDetailsModal;