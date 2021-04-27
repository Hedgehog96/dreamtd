/*
 * @Description: 子导航栏组件
 * @Author: Pokkio
 * @Date: 2021-04-20 21:31:23
 * @LastEditors: Pokkio
 * @LastEditTime: 2021-04-26 21:18:35
 */
import React, { useContext } from 'react'
import classnames from 'classnames'

import { MenuContext } from './menu'

export interface IMenuItemProps {
  className?: string
  index?: string
  disabled?: boolean
  style?: React.CSSProperties
}

const MenuItem: React.FC<IMenuItemProps> = ({
  className,
  index,
  disabled,
  style,
  children
}) => {
  const context = useContext(MenuContext)
  const classes = classnames('dreamtd-menu-item', className, {
    'dreamtd-menu-item-disabled': disabled,
    'dreamtd-menu-item-actived': context.index === index
  })
  const handleClick = () => {
    if (context.onSelect && !disabled && (typeof index === 'string')) {
      context.onSelect(index)
    }
  }

  return (
    <li className={classes} style={style} onClick={handleClick}>{children}</li>
  )
}

MenuItem.displayName = 'MenuItem'

export default MenuItem