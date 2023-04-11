import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from './countries/countriesSlice'
import activityReducer from './activities/activitySlice'

export const store = configureStore({
    reducer : {
        paises : countriesReducer,
        actividades : activityReducer
    }
});


/*
export const useAppSelector = useSelector;
export const useAppDispatch = useDispatch;
*/