
import {createSlice} from '@reduxjs/toolkit'

const Slice = createSlice({
    name : 'list',
    initialState : [],
    reducers : {
        collect : (state,action)=>{
           return action.payload
           
        }
    }
})
export const {collect} = Slice.actions;
export default Slice.reducer;