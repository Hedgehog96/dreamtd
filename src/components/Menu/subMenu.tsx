/*
 * @Description: 子导航栏组件
 * @Author: Pokkio
 * @Date: 2021-04-24 20:44:49
 * @LastEditors: Pokkio
 * @LastEditTime: 2021-05-23 18:02:13
 */
import React, { FC, useState, useContext, MouseEvent, Children, FunctionComponentElement } from 'react'
import classnames from 'classnames'

import { MenuContext } from './menu'
import { MenuItemProps } from './menuItem'
import Icon from '../Icon'

export interface SubMenuProps {
  index?: string
  title: string
  className?: string
}

const SubMenu: FC<SubMenuProps> = ({ index, title, className, children }) => {
  const context = useContext(MenuContext)
  const openedSubMenus = context.defaultOpenSubMenus as Array<string>
  const isOpened = (index && context.mode === 'vertical') ? openedSubMenus.includes(index) : false
  const [subMenuOpen, setSubMenuOpen] = useState(isOpened)
  const classes = classnames('dreamtd-menu-submenu', className, {
    'dreamtd-submenu-item-actived': context.index === index,
    'is-opened': subMenuOpen,
    'is-vertical': context.mode === 'vertical'
  })

  const handleSubMenuOpen = (e: MouseEvent) => {
    e.preventDefault()
    setSubMenuOpen(!subMenuOpen)
  }

  let timer: NodeJS.Timeout
  const handleMouse = (e: MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(() => {
      setSubMenuOpen(toggle)
    }, 200)
  }

  const clickEvents = context.mode === 'vertical'
    ? { onClick: handleSubMenuOpen }
    : {}
  const mouseEvents = context.mode === 'horizontal'
    ? {
      onMouseEnter: (e: MouseEvent) => handleMouse(e, true),
      onMouseLeave: (e: MouseEvent) => handleMouse(e, false)
    }
    : {}

  const renderChildren = () => {
    const subMenuClasses = classnames('dreamtd-submenu-list', {
      'dreamtd-submenu-list-opened': subMenuOpen
    })

    const childrenComponent = Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      if (displayName === 'MenuItem') {
        return React.cloneElement(childElement, { index: `${index}-${i}` })
      }
    })

    return (
      <ul className={subMenuClasses}>{childrenComponent}</ul>
    )
  }

  return (
    <li key={index} className={classes} {...mouseEvents}>
      <div className='dreamtd-submenu-title' {...clickEvents}>
        {title}
        <Icon icon="angle-down" className="arrow-icon" theme='primary' />
      </div>
      {renderChildren()}
    </li>
  )
}

SubMenu.displayName = 'SubMenu'

export default SubMenu