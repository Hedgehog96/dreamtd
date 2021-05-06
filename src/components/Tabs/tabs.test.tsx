/*
 * @Description: 标签页测试文件
 * @Author: Pokkio
 * @Date: 2021-05-06 21:12:28
 * @LastEditors: Pokkio
 * @LastEditTime: 2021-05-06 22:16:09
 */
import { render, RenderResult, fireEvent } from '@testing-library/react'

import Tabs, { TabsProps } from './tabs'
import TabPane from './tabPane'

const testProps: TabsProps = {
  defaultIndex: 0,
  className: 'test',
  onSelect: jest.fn()
}

let wrapper: RenderResult, tabsElement: HTMLElement, activedElement: HTMLElement

describe('test Tabs and TabPane component', () => {
  beforeEach(() => {
    wrapper = render(<Tabs {...testProps}><TabPane title='test1' /><TabPane title='test2' /></Tabs>)
    tabsElement = wrapper.getByTestId('test-tabs')
    activedElement = wrapper.getByText('test1')
  })

  it('should render the corrent default Tabs and TabPane', () => {
    expect(tabsElement).toBeInTheDocument()
    expect(tabsElement).toHaveClass('dreamtd-tabs-menu test')
    expect(tabsElement.getElementsByTagName('div').length).toEqual(2)
    expect(activedElement).toHaveClass('dreamtd-tab-pane-actived')
  })

  it('click pane should change active and call the right callback', () => {
    const finalPane = wrapper.getByText('test2')
    fireEvent.click(finalPane)
    expect(finalPane).toHaveClass('dreamtd-tab-pane-actived')
    expect(activedElement).not.toHaveClass('dreamtd-tab-pane-actived')
    expect(testProps.onSelect).toHaveBeenCalledWith(1)
  })
})