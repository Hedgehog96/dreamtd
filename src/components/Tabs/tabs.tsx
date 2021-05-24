/*
 * @Description: 标签页组件
 * @Author: Pokkio
 * @Date: 2021-05-05 22:37:36
 * @LastEditors: Pokkio
 * @LastEditTime: 2021-05-24 21:19:33
 */
import React, { FC, useState, createContext, FunctionComponentElement, CSSProperties } from 'react'
import classnames from 'classnames'

import { TabPaneProps } from './tabPane'

type TabsMode = 'horizontal' | 'vertical'
type SelectCallback = (selectIndex: number) => void

export interface TabsProps {
  defaultIndex?: number
  className?: string
  mode?: TabsMode
  style?: CSSProperties
  onSelect?: SelectCallback
}

interface ITabsContext {
  index: number
  onSelect?: SelectCallback
}

export const TabsContext = createContext<ITabsContext>({ index: 0 })

const Tabs: FC<TabsProps> = ({
  defaultIndex,
  className,
  mode,
  style,
  onSelect,
  children
}) => {
  const [currentActive, setActive] = useState<number>(defaultIndex || 0)
  const classes = classnames('dreamtd-tabs-menu', className, {
    'dreamtd-tabs-menu-horizontal': mode === 'horizontal',
    'dreamtd-tabs-menu-vertical': mode === 'vertical',
  })

  const handleClickPane = (index: number) => {
    setActive(index)
    onSelect && onSelect(index)
  }

  const tabPaneContext: ITabsContext = {
    index: currentActive,
    onSelect: handleClickPane
  }

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as FunctionComponentElement<TabPaneProps>
      const { displayName } = childElement.type
      if (displayName === 'TabPane') {
        return React.cloneElement(childElement, { index })
      }
    })
  }

  return (
    <div className={classes} style={style} data-testid='test-tabs'>
      <TabsContext.Provider value={tabPaneContext}>
        {renderChildren()}
      </TabsContext.Provider>
    </div>
  )
}

Tabs.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}

export default Tabs