import { createSlice } from '@reduxjs/toolkit'
import { getCookie } from 'utils'

const initialState = {
  isAuth: false || getCookie('isAuth'),
  token: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.isAuth = true
      state.token = action.payload
      document.cookie = `isAuth=${true}; path=/`
    },
  },
})

export const { setToken } = userSlice.actions

export default userSlice.reducer
