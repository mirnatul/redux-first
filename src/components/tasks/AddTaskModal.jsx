import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/features/tasks/tasksSlice';
import Modal from './../ui/Modal';


const AddTaskModal = ({ isOpen, setIsOpen }) => {

    const { register, handleSubmit, reset } = useForm()

    const dispatch = useDispatch();

    const onCancel = () => {
        reset();
        setIsOpen(false)
    }


    const onSubmit = (data) => {
        // console.log(data);
        dispatch(addTask(data))
        onCancel()
    }


    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={""}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col gap-1 mb-4'>
                    <label htmlFor="title">Title</label>
                    <input className='w-full rounded-md' type="text" id='title' {...register('title')} />
                </div>
                <div className='flex flex-col gap-1 mb-4'>
                    <label htmlFor="assigned">Assigned</label>
                    <input className='w-full rounded-md' type="text" id='assigned' {...register('assigned')} />
                </div>
                <div className='flex flex-col gap-1 mb-4'>
                    <label htmlFor="description">Description</label>
                    <textarea className='w-full rounded-md' id="description" cols="30" rows="3" {...register('description')}></textarea>
                </div>
                <div className='w-full flex gap-4'>
                    <button onClick={() => onCancel()} type='submit' className='bg-red-600 px-2 py-2 rounded-md font-bold text-white mt-2 w-full'>Cancel</button>
                    <button type='submit' className='bg-blue-600 px-2 py-2 rounded-md font-bold text-white mt-2 w-full'>Submit</button>
                </div>
            </form>
        </Modal>
    );
};

export default AddTaskModal;