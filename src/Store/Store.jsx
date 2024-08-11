import {configureStore} from '@reduxjs/toolkit';
import Slice from './Slice';
import FilterSlice from './Slice/FilterSlice';

export const store = configureStore({
    reducer :{
        datalist : Slice,
        toggler: FilterSlice
    }

})