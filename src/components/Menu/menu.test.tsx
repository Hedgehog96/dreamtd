/*
 * @Description: Menu测试文件
 * @Author: Bugmakerrrr
 * @Date: 2021-04-21 23:04:04
 * @LastEditors: Bugmakerrrr
 * @LastEditTime: 2021-11-09 11:01:09
 */
import { render, RenderResult, fireEvent, cleanup } from '@testing-library/react'

import Menu, { MenuProps } from './menu'
import MenuItem from './menuItem'

const testProps: MenuProps = {
  defaultIndex: '0',
  className: 'test',
  onSelect: jest.fn()
}

const testVerticalProps: MenuProps = {
  defaultIndex: '0',
  mode: 'vertical'
}

const testMenu = (props: MenuProps) => (
  <Menu {...props}>
    <MenuItem index='0'>active</MenuItem>
    <MenuItem index='1' disabled>disabled</MenuItem>
    <MenuItem index='2'>test</MenuItem>
  </Menu>
)

let wrapper: RenderResult, menuElement: HTMLElement, activedElement: HTMLElement, disabledElemnt: HTMLElement

describe('test Menu and MenuItem component', () => {
  beforeEach(() => {
    wrapper = render(testMenu(testProps))
    menuElement = wrapper.getByTestId('test-menu')
    activedElement = wrapper.getByText('active')
    disabledElemnt = wrapper.getByText('disabled')
  })

  it('should render correct Menu and MenuItem based on default props', () => {
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass('dreamtd-menu test')
    expect(menuElement.getElementsByTagName('li').length).toEqual(3)
    expect(activedElement).toHaveClass('dreamtd-menu-item dreamtd-menu-item-actived')
    expect(disabledElemnt).toHaveClass('dreamtd-menu-item dreamtd-menu-item-disabled')
  })

  it('click items should change active and call the right callback', () => {
    const finalItem = wrapper.getByText('test')
    fireEvent.click(finalItem)
    expect(finalItem).toHaveClass('dreamtd-menu-item-actived')
    expect(activedElement).not.toHaveClass('dreamtd-menu-item-actived')
    expect(testProps.onSelect).toHaveBeenCalledWith('2')
    fireEvent.click(disabledElemnt)
    expect(disabledElemnt).not.toHaveClass('dreamtd-menu-item-actived')
    expect(testProps.onSelect).not.toHaveBeenCalledWith('1')
  })

  it('should render vertical mode when mode is set to vertical', () => {
    cleanup()
    const wrapper = render(testMenu(testVerticalProps))
    const menuElement = wrapper.getByTestId('test-menu')
    expect(menuElement).toHaveClass('dreamtd-menu-vertical')
  })
})