/*
 * @Description: 导航栏组件
 * @Author: Pokkio
 * @Date: 2021-04-20 21:16:28
 * @LastEditors: Pokkio
 * @LastEditTime: 2021-04-21 23:07:58
 */
import React, { useState, createContext } from 'react'
import classnames from 'classnames'

type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectIndex: number) => void

export interface IMenuProps {
  defaultIndex?: number
  className?: string
  classPrefix?: string
  mode?: MenuMode
  style?: React.CSSProperties
  onSelect?: SelectCallback
}

interface IMenuContext {
  index: number
  onSelect?: SelectCallback
}

export const MenuContext = createContext<IMenuContext>({ index: 0 })

const Menu: React.FC<IMenuProps> = ({
  defaultIndex,
  className,
  mode,
  style,
  onSelect,
  children
}) => {
  const [currentActive, setActive] = useState<number>(defaultIndex || 0)
  const classess = classnames('dreamtd-menu', className, {
    'dreamtd-menu-horizontal': mode === 'horizontal',
    'dreamtd-menu-vertical': mode === 'vertical',
  })
  const handleClickMenuItem = (index: number) => {
    setActive(index)
    onSelect && onSelect(index)
  }
  
  const menuItemContext: IMenuContext = {
    index: currentActive,
    onSelect: handleClickMenuItem
  }

  return (
    <ul className={classess} style={style}>
      <MenuContext.Provider value={menuItemContext}>
        {children}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}

export default Menu