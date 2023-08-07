/* eslint-disable */
// ** Redux Imports
import { updateToken, logout } from '../../store/app/auth'
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// ** Other  Imports
import { Mutex } from 'async-mutex'

const baseUrl = process.env.REACT_APP_SERVER_URL + '/api'
const baseQuery = fetchBaseQuery({
  prepareHeaders: (headers, { getState }) => {
    const {
      auth: {
        user: { accessToken },
      },
    }: any = getState()
    if (accessToken) {
      headers.set('authorization', `Bearer ${accessToken}`)
    }
    return headers
  },
  baseUrl,
})

const mutex = new Mutex()
export const customFetchBase = async (
  args: any,
  api: any,
  extraOptions: any,
) => {
  await mutex.waitForUnlock()
  let result = await baseQuery(args, api, extraOptions)
  if (result.error?.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()
      try {
        const {
          auth: {
            user: { refreshToken },
          },
        } = api.getState()
        const { data }: any = await baseQuery(
          {
            url: '/auth/admin/reissue',
            method: 'POST',
            body: { refreshToken },
          },
          api,
          extraOptions,
        )
        if (data.status === 200) {
          const { accessToken, refreshToken } = data.responseData
          api.dispatch(updateToken({ accessToken, refreshToken }))
          result = await baseQuery(args, api, extraOptions)
        } else {
          api.dispatch(logout())
        }
      } finally {
        release()
      }
    } else {
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }

  return result
}
