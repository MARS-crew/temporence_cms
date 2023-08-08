// ** Redux Imports
import { RootState } from '@/store'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {
    email: '',
    name: '',
    accessToken: '',
    refreshToken: '',
  },
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
})

export default authSlice.reducer

export const getAccessToken = (state: RootState) => state.auth.user.accessToken
