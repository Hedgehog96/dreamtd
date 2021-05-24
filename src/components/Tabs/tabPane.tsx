/*
 * @Description: 标签页子页组件
 * @Author: Pokkio
 * @Date: 2021-05-05 22:43:09
 * @LastEditors: Pokkio
 * @LastEditTime: 2021-05-23 18:02:38
 */
import React, { FC, useContext, CSSProperties } from 'react'
import classnames from 'classnames'

import { TabsContext } from './tabs'

export interface TabPaneProps {
  index?: number
  title: string
  className?: string
  disabled?: boolean
  style?: CSSProperties
}

const TabPane: FC<TabPaneProps> = ({
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