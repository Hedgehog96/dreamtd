/*
 * @Description: 点击节点区域外hook
 * @Author: Bugmakerrrr
 * @Date: 2021-11-13 14:59:31
 * @LastEditors: Bugmakerrrr
 * @LastEditTime: 2021-11-13 15:02:54
 */
import { RefObject, useEffect } from 'react'

export default function useClickOutside(ref: RefObject<HTMLElement>, handler: Function) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as HTMLElement)) {
        return
      }
      handler(event)
    }
    document.addEventListener('click', listener)

    return () => {
      document.removeEventListener('click', listener)
    }
  }, [ref, handler])
}