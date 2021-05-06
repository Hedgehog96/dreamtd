/*
 * @Description: 标签页组件
 * @Author: Pokkio
 * @Date: 2021-05-05 22:37:36
 * @LastEditors: Pokkio
 * @LastEditTime: 2021-05-06 21:41:37
 */
import React, { useState, createContext, FunctionComponentElement } from 'react'
import classnames from 'classnames'

import { ITabPaneProps} from './tabPane'

type TabsMode = 'horizontal' | 'vertical'
type SelectCallback = (selectIndex: number) => void

export interface TabsProps {
  defaultIndex?: number
  className?: string
  mode?: TabsMode
  style?: React.CSSProperties
  onSelect?: SelectCallback
}

interface ITabsContext {
  index: number
  onSelect?: SelectCallback
}

export const TabsContext = createContext<ITabsContext>({ index: 0 })

const Tabs: React.FC<TabsProps> = ({
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
      const childElement = child as FunctionComponentElement<ITabPaneProps>
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