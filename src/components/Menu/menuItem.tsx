/*
 * @Description: 子导航栏组件
 * @Author: Bugmakerrrr
 * @Date: 2021-04-20 21:31:23
 * @LastEditors: Bugmakerrrr
 * @LastEditTime: 2021-11-09 11:01:44
 */
import { FC, useContext, CSSProperties } from 'react'
import classnames from 'classnames'

import { MenuContext } from './menu'

export interface MenuItemProps {
  className?: string
  index?: string
  disabled?: boolean
  style?: CSSProperties
}

const MenuItem: FC<MenuItemProps> = ({
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