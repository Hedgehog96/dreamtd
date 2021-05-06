/*
 * @Description: 导航栏组件
 * @Author: Pokkio
 * @Date: 2021-04-20 21:16:28
 * @LastEditors: Pokkio
 * @LastEditTime: 2021-05-05 23:08:02
 */
import React, { useState, createContext, FunctionComponentElement } from 'react'
import classnames from 'classnames'

import { IMenuItemProps } from './menuItem'

type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectIndex: string) => void

export interface IMenuProps {
  defaultIndex?: string
  defaultOpenSubMenus?: string[]
  className?: string
  mode?: MenuMode
  style?: React.CSSProperties
  onSelect?: SelectCallback
}

interface IMenuContext {
  index: string
  mode?: MenuMode
  defaultOpenSubMenus?: string[]
  onSelect?: SelectCallback
}

export const MenuContext = createContext<IMenuContext>({ index: '0' })

const InternalMenu: React.FC<IMenuProps> = ({
  defaultIndex,
  defaultOpenSubMenus,
  className,
  mode,
  style,
  onSelect,
  children
}) => {
  const [currentActive, setActive] = useState<string>(defaultIndex || '0')
  const classess = classnames('dreamtd-menu', className, {
    'dreamtd-menu-horizontal': mode === 'horizontal',
    'dreamtd-menu-vertical': mode === 'vertical',
  })
  
  const handleClickMenuItem = (index: string) => {
    setActive(index)
    onSelect && onSelect(index)
  }
  
  const menuItemContext: IMenuContext = {
    index: currentActive,
    mode,
    defaultOpenSubMenus,
    onSelect: handleClickMenuItem,
  }

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as FunctionComponentElement<IMenuItemProps>
      const { displayName } = childElement.type
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, { index: index.toString() })
      }
    })
  }

  return (
    <ul className={classess} style={style} data-testid='test-menu'>
      <MenuContext.Provider value={menuItemContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

InternalMenu.defaultProps = {
  defaultIndex: '0',
  defaultOpenSubMenus: [],
  mode: 'horizontal'
}

export default InternalMenu