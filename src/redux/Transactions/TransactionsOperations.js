import { instance } from '../operations';
import { createAsyncThunk } from '@reduxjs/toolkit';

const setAuthHeader = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const balance = createAsyncThunk(
  'user/balance',
  async (credentials, thunkAPI) => {
    try {
      const res = await instance.patch('/user/balance', credentials);
      console.log(res);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addIncomeTransaction = createAsyncThunk(
  '/income/addIncome',
  async (income, thunkAPI) => {
    try {
      const res = await instance.post('transaction/income', income);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addExpenseTransaction = createAsyncThunk(
  '/expense/addExpense',
  async (expense, thunkAPI) => {
    try {
      const res = await instance.post('transaction/expense', expense);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getPeriodData = createAsyncThunk(
  'transaction/getTransactionData',
  async (periodData, thunkApi) => {
    try {
      const { data } = await instance.get(
        `transaction/period-data?date=${periodData}`
      );
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);


export const getTransactionIncome = createAsyncThunk(
  '/transaction/getIncome',
  async (_, thunkAPI) => {
    try {
      const res = await instance.get('transaction/income');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getTransactionExpense = createAsyncThunk(
  '/transaction/getExpense',
  async (_, thunkAPI) => {
    try {
      const res = await instance.get('transaction/expense');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTransacton = createAsyncThunk(
  'transaction/deleteTransaction',
  async (transactionId, thunkAPI) => {
    try {
      const res = await instance.delete(`transaction/${transactionId}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

