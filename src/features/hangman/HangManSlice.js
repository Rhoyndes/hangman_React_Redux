import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://random-word-api.herokuapp.com/word?number=1';

const initialState = {
    password: '',
    misstake: 0,
    usedChart: [],
    lost: 0,
    wins: 0
};

export const getPassword = createAsyncThunk(
    'hangman/getPassword',
    async (thunkAPI) => {
        try {
            const resp = await axios(url)
            return resp.data
        } catch(error){
            return thunkAPI.rejectWithValue('api not working');
        }
    }
);

const HangManSlice = createSlice({
    name: 'hangman',
    initialState,
    reducers: {
        increaseError: (state) => {
            state.misstake += 1
        },
        increaseWins: (state) => {
            state.wins += 1
        },
        decrease: (state) => {
            state.lost += 1
        },
        usedCharts: (state, action) => {
            state.usedChart.push(action.payload)
        },
        restart: (state) => {
            state.misstake = 0
            state.usedChart = []
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPassword.fulfilled, (state, action) => {
                state.password = action.payload;
            })
    }
})

export const { increaseError, increaseWins, decrease, usedCharts, restart } = HangManSlice.actions

export default HangManSlice.reducer