/*
 * @Description: 标签页子页组件
 * @Author: Pokkio
 * @Date: 2021-05-05 22:43:09
 * @LastEditors: Pokkio
 * @LastEditTime: 2021-05-06 20:40:01
 */
import React, { useContext } from 'react'
import classnames from 'classnames'

import { TabsContext } from './tabs'

export interface ITabPaneProps {
  index?: number
  title: string
  className?: string
  disabled?: boolean
  style?: React.CSSProperties
}

const TabPane: React.FC<ITabPaneProps> = ({
  index,
  title,
  className,
  disabled,
  style
}) => {
  const context = useContext(TabsContext)
  const classes = classnames('dreamtd-tab-pane', className, {
    'dreamtd-tab-pane-disabled': disabled,
    'dreamtd-tab-pane-actived': context.index === index
  })
  const handleClick = () => {
    if (context.onSelect && !disabled) {
      context.onSelect(index || 0)
    }
  }

  return <div className={classes} style={style} onClick={handleClick}>{title}</div>
}

TabPane.displayName = 'TabPane'

export default TabPane