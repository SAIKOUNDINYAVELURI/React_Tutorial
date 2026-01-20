import {configureStore} from '@reduxjs/toolkit'
import SocialSlice from './slice/SocialSlice';
import  ScienceSlice from './slice/ScienceSlice';

const store=configureStore({
    reducer:{
        social: SocialSlice,
        science:ScienceSlice,
    }
})

export default store;