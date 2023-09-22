import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: "lipon",
    email: "www.mirnatul@gmail.com"
};

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {}
})

export default userSlice.reducer;