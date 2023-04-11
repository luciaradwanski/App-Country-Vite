import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getDataCountries = createAsyncThunk('paises/getData', 
async (arg, { rejectWithValue }) => {
  try {
    const {data} = await axios.get('http://localhost:3001/countries')
    console.log(data);
    return data;
  } catch (error) {
    rejectWithValue(error.response.data)
  }
})

export const nameCountry = createAsyncThunk('paises/getName', async (name, { rejectWithValue }) => {
  try {
    const {data} = await axios.get(`http://localhost:3001/countries?name=${name}`);
    console.log(data);
    return data;
  } catch (error) {
    rejectWithValue(error.response.data) 
  };
});
export const detailCountry = createAsyncThunk('paises/detailPais', async (id, { rejectWithValue }) => {
  try {
    const {data} = await axios.get(`http://localhost:3001/countries/${id}`);
    console.log(data)
    return data;
  } catch (error) {
    rejectWithValue(error.response.data) 
  }
});







export const countriesSlice = createSlice({
    name: 'paises',
    initialState: {
      countries: [],
      isSuccess: false,
      allCountries: [],
      activities: [],
      detail: {},
      alertas: [],
      loading: false,
      message: "",
      error: null
    },
    reducers: {
      getCountries: (state, action) => {
        state.countries = action.payload;
        state.allCountries = action.payload;
      },
      getNameCountry: (state, action) => {
        state.countries = action.payload;
      },
      getDetail: (state, action) => {
        state.detail = action.payload;
      },
      filterByContinent: (state, action) => {
        const allCountries = state.allCountries;
        const continentFilter =
          action.payload === 'All'
            ? allCountries
            : allCountries.filter((el) => el.continent === action.payload);
        state.countries = continentFilter;
      },
      filterByActivity: (state, action) => {
            
        const filterCountries = state.allCountries.filter((el) =>
            el.activities.some((act) => act.name === action.payload)
        );
        state.countries = filterCountries;
    },
      orderByName: (state, action) => {
        let sortedArr =
          action.payload === 'asc'
            ? state.countries.sort(function (a, b) {
                if (a.name > b.name) {
                  return 1;
                }
                if (b.name > a.name) {
                  return -1;
                }
                return 0;
              })
            : state.countries.sort(function (a, b) {
                if (a.name > b.name) {
                  return -1;
                }
                if (b.name > a.name) {
                  return 1;
                }
                return 0;
              });
        state.countries = sortedArr;
      },
      filterByPopulation: (state, action) => {
        let sortPopulation;
        if (action.payload === 'all') sortPopulation = state.allCountries;
        else
          sortPopulation =
            action.payload === 'ASC'
              ? state.countries.sort((a, b) => a.population - b.population)
              : state.countries.sort((a, b) => b.population - a.population);
        state.countries = sortPopulation;
      },
      setLoading: (state, action) => {
        state.loading = action.payload;
      }
    },
    extraReducers: builder => {
      builder.addCase(getDataCountries.pending, (state, action) => {
        state.loading = true;
      }),
      builder.addCase(getDataCountries.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.countries = payload;
        state.allCountries = payload;
        state.isSuccess = true;
      }),
      builder.addCase(getDataCountries.rejected, (state, {payload}) => {
        state.message = payload;
        state.loading = false;
        state.isSuccess = false;
      }),
      builder.addCase(nameCountry.pending, (state, action) => {
        state.loading = true;
      }),
      builder.addCase(nameCountry.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.countries = payload;
        state.allCountries = payload;
        state.isSuccess = true;
      }),
      builder.addCase(nameCountry.rejected, (state, {payload}) => {
        state.message = payload;
        state.loading = false;
        state.isSuccess = false;
      }),
      builder.addCase(detailCountry.pending, (state, action) => {
        state.loading = true;
      }),
      builder.addCase(detailCountry.fulfilled, (state, action) => {
        state.loading = false;
        state.detail = action.payload;
        state.isSuccess = true;
      }),
      builder.addCase(detailCountry.rejected, (state, {payload}) => {
        state.message = payload;
        state.loading = false;
        state.isSuccess = false;
      })
    }
  });
      
  export const { 
    getCountries, 
    getNameCountry, 
    getDetail, 
    filterByContinent, 
    filterByPopulation, 
    filterByActivity,
    orderByName, 
    orderByPopulation, 
    setAlert, 
    deleteAlert, setLoading } = countriesSlice.actions;
      
  export default countriesSlice.reducer;