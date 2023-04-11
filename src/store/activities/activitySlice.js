import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataActivities = createAsyncThunk('actividades/dataActivity', async (payload) => {
    const {data} = await axios.get('http://localhost:3001/activities',payload);
    console.log(data);
    return data;
});

export const fetchpostActivity = createAsyncThunk('actividades/postActivity', async (payload) => {
    const {data} = await axios.post('http://localhost:3001/activities',payload);
    return data;
});

export const activitySlice = createSlice({
    name: 'actividades',
    initialState: {

        activities: [],
        allActivities: [],
        isSuccess: false,
        alertas: [],
        loading: false,
        message: "",
        error: null
    },
    reducers : {
        getActivities: (state, action) => {
            state.activities = action.payload;
            state.allActivities = action.payload;
        },
        postActivity: (state, action) => {
            // do nothing
        },
        deleteActivity: (state, action) => {
            const id = action.payload;
            return state.filter((c) => c.id !== id)
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    },
    extraReducers : builder => {
        builder.addCase(getDataActivities.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(getDataActivities.fulfilled, (state, action) => {
            state.loading = false;
            state.activities = action.payload;
            state.isSuccess = true;
        }),
        builder.addCase(getDataActivities.rejected, (state, action) => {
            state.message = action.payload;
            state.loading = false;
            state.isSuccess = false;
        }),
        builder.addCase(fetchpostActivity.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(fetchpostActivity.fulfilled, (state, action) => {
            state.loading = false;
            state.activities.push(action.payload);
            state.alertas.push({ type: 'success', message: 'Activity created successfully', id: new Date().getTime() });
        }),
        builder.addCase(fetchpostActivity.rejected, (state, action) => {
            state.loading = false;
            state.alertas.push({ type: 'error', message: action.error.message, id: new Date().getTime() });
        })
    }
})

export const {
    getActivities, 
    postActivity,  
    setLoading
} = activitySlice.actions;

export default activitySlice.reducer;