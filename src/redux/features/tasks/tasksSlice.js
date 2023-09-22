import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tasks: [
        {
            id: 1,
            title: 'test 1',
            description: 'des 1',
            status: 'pending',
            assigned: 'lipon'
        }
    ],
    userSpecificTasks: []
}

const tasksSlice = createSlice({
    name: 'tasksSlice',
    initialState,
    reducers: {
        // addTask: (state, action) => {
        //     state.tasks.push(action.payload)
        // }
        addTask: (state, { payload }) => {
            if (state.tasks.length === 0) {
                state.tasks.push({ id: 1, status: 'pending', ...payload })
            }
            else {
                const lastElement = state.tasks.at(-1); //last element
                state.tasks.push({ id: lastElement.id + 1, status: 'pending', ...payload })
            }
        },
        removeTask: (state, { payload }) => {
            state.tasks = state.tasks.filter(item => item.id !== payload)
        },
        updateStatus: (state, { payload }) => {
            const target = state.tasks.find(item => item.id === payload.id)
            target.status = payload.status
        },
        userTasks: (state, { payload }) => {
            state.userSpecificTasks = state.tasks.filter(item => item.assigned === payload)
        }
    }
})

export const { addTask, removeTask, updateStatus, userTasks } = tasksSlice.actions;

export default tasksSlice.reducer