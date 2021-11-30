/*
 * @Description: 防抖hook
 * @Author: Bugmakerrrr
 * @Date: 2021-11-11 16:48:26
 * @LastEditors: Bugmakerrrr
 * @LastEditTime: 2021-11-11 16:53:03
 */
import { useState, useEffect } from 'react'

export default function useDebounce(value: any, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timerId = window.setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(timerId) 
    }
  }, [value, delay])

  return debouncedValue
}