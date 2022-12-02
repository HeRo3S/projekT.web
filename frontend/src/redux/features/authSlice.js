import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthService from "../../api/auth.service";
import { SEVERITY } from "../../utils/enum";
import { setMessage } from "./messageSlice";

const localData = JSON.parse(localStorage.getItem("user"));
const user = localData?.user;

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

export const register = createAsyncThunk(
  "auth/register",
  async ({ username, password, email }, thunkAPI) => {
    try {
      const res = await AuthService.register({ username, password, email });
      thunkAPI.dispatch(
        setMessage({
          message: "Register succesfully",
          severity: SEVERITY.SUCCESS,
        })
      );
      return res;
    } catch (err) {
      const message = err.toString();
      thunkAPI.dispatch(setMessage({ message, severity: SEVERITY.ALERT }));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const data = await AuthService.login({ email, password });
      thunkAPI.dispatch(
        setMessage({
          message: "Login success!",
          severity: SEVERITY.SUCCESS,
        })
      );
      return { user: data };
    } catch (err) {
      if (err.response.status === 401) {
        const message = "Wrong credentials!";
        thunkAPI.dispatch(setMessage({ message, severity: SEVERITY.ALERT }));
      }
      return thunkAPI.rejectWithValue();
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  AuthService.logout();
});

export const refresh = createAsyncThunk(
  "auth/refresh",
  async ({ refreshToken }, thunkAPI) => {
    try {
      const data = await AuthService.refresh({ refreshToken });
      return { user: data };
    } catch (err) {
      // TODO handle error here
      return thunkAPI.rejectWithValue();
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
    },
    [register.rejected]: (state, action) => {
      state.isLoggedIn = false;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user.user;
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [logout.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [refresh.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user.user;
    },
    [refresh.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export default authSlice.reducer;
