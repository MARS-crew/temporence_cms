// ** Redux Imports
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../..'

interface InitialStateProps {
  user: {
    username: string
    accessToken: string
    refreshToken: string
    grade: string
  }
}

const initialState: InitialStateProps = {
  user: { username: '', accessToken: '', refreshToken: '', grade: '' },
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateUser: (state, { payload }) => {
      state.user = {
        ...state.user,
        ...payload,
      }
    },
    logout: (state) => {
      state.user = initialState.user
    },
    updateToken: (state, { payload }) => {
      state.user = {
        ...state.user,
        ...payload,
      }
    },
  },
  extraReducers: (builder) => {},
})

export default authSlice.reducer

export const { updateUser, logout, updateToken } = authSlice.actions
export const getAccessToken = (state: RootState) => state.auth.user.accessToken
