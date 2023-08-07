// ** React Imports
import { useState, useCallback } from 'react'

const useInput = (initalValue: any) => {
  const [data, setData] = useState<any>(initalValue)

  const handler = useCallback(
    (e: any) => {
      const { value, name } = e.target
      setData({
        ...data,
        [name]: value,
      })
    },
    [data],
  )

  return [data, handler, setData]
}

export default useInput
